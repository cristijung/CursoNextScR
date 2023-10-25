import type { Country } from "@/app/server/page";
import styles from "../server.module.scss";
import Link from "next/link";
import Image from "next/image";

async function getCountryByName(name: string): Promise<Country> {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  return (await response.json())[0];
}

export default async function CountryPage({
  params: { pais },
}: {
  params: { pais: string };
}) {
  const country = await getCountryByName(pais);
  const formato = Intl.NumberFormat("en", { notation: "compact" }); //internacionalização para formatar o número da pop

  return (
    <>
      <div className="altura">
        <h2>Informações do País:</h2>
        <section className="conteudo">
          <div className={styles.titulo}>{country.translations.por.common}</div>
          <main className={styles.box}>
            <section>
              <h3>🏙️ Capital: {country.capital}</h3>
              <h3>
                🗺️ Continente: {country.region} - {country.subregion}{" "}
              </h3>
              <h3>👨‍👩‍👧‍👦 População: {formato.format(country.population)} </h3>
              {country.languages && (
                <h3>
                  🗣️ Idiomas: &nbsp;
                  {Object.values(country.languages).map((language) => (
                    <span key={language} className={styles.lang}>
                      {language}
                    </span>
                  ))}
                </h3>
              )}
            </section>
            <div className={styles.contentor}>
              <Image
                src={country.flags.svg}
                alt={country.flags.alt}
                width={400}
                height={200}
                className={styles.bandeira}
              />
            </div>
          </main>
          <p style={{ width: "75%", margin: "auto", marginTop: "10px" }}>
            <Link href="/server" className={styles.menu}>
              Voltar
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
