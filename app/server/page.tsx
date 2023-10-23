import React from "react";

type Country = {
  name: {
    common: string;
  }
}

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
      <section className="altura">
        <h2>Server Component</h2>
        <hr/>
        <div className="conteudo">
          {countries.map((country) => (
            <h3 key={country.name.common}>{country.name.common}</h3>
          ))}

        </div>
      </section>
    </>
  );
}
