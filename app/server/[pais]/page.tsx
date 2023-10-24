import type { Country } from "@/app/server/page";
import styles from "../server.module.scss";
import Link from "next/link";

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
  return (
    <>
      <div className="conteudo">
        <h2>Informações do País:</h2>
        <section>
          <div className={styles.titulo}>{country.translations.por.common}</div>
          <main className={styles.box}>
            <section>
                <h3>🏙️ Capital: {country.capital}</h3>
                <h3>🗺️ Continente: {country.region} -  {country.subregion} </h3>
                <h3>👨‍👩‍👧‍👦 População: {country.population} </h3>
              {country.languages && (
                <h3>🗣️ Idiomas: 
                  {Object.values(country.languages).map((language) => (
                    <span key={language}>{language}</span>
                  ))}
                </h3>
              )}
            </section>
          </main>
          <p style={{ width: '75%', margin: 'auto', marginTop: '10px' }}>
            <Link href="/" className={styles.menu}>
              Voltar
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
