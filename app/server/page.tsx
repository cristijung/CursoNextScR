import Image from "next/image";
import React from "react";
import styles from "./server.module.scss";
import Link from "next/link";

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

export default async function Server() {
  const countries = await getCountries();

  return (
    <>
      <section className={styles.altura}>
        <h2>Server Component</h2>
        <hr />
        <div className={styles.cardcontainer}>
          {countries.map((country) => (
            <Link key={country.name.common} href={`/server/${country.name.common}`} className={styles.menu}>
              <div className={styles.card}>
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
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
