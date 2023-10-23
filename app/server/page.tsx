import Image from "next/image";
import React from "react";
import styles from "./server.module.scss";

export type Country = {
  name: {
    common: string;
  };

  translations: {
    por: {
      common: string;
    };
  };

  flags: {
    svg: string;
    alt: string;
  };

  capital: string;
  region: string;
  subregion: string;
  population: number;
  languages?: {
    [key: string]: string;
  };

  borders?: string[];
  cca3: string;
};
async function getCountries(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
}

//isso funciona no Next pq está rodando no servidor e não no browser
//React e Nex enviam depois para o browser o HTML pronto
export default async function Server() {
  const countries = await getCountries();

  //console.log(countries);  //este log não aparece no browser, só no terminal da aplicação pq é um server component
  return (
    <>
      <section className={styles.altura}>
      <h2>Server Component</h2>
      <hr />
      <article>      
        <div className={styles.cardcontainer}>
          {countries.map((country) => (
            <div key={country.name.common} className={styles.card}>                        
              <div className={styles.flag}>
              <Image
                src={country.flags.svg}
                alt={country.flags.alt}
                width={300}
                height={150}               
              />   

              </div>               
              <h3>{country.translations.por.common}</h3>              
            </div>
          ))}
        </div>
        </article>      
    </section>
    </>
  );
}
