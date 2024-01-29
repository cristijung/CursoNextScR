import React from "react";
import style from "./Novidades.module.scss";
import texts from "../data/texts.json";
import imgTela from "../assets/scrn.png";
import Image from "next/image";

export default function Novidades() {
  return (
    <>
      <section className="altura">
        <div className={style.texto}>
          <h2>Novidades</h2>
          <h3>{texts.tituloNovidade}</h3>
          <ul style={{ listStyleType: "none" }}>
            <li>{texts.textoNovidade}</li>
            <li>
              <h3>{texts.stituloNovidade}</h3>
            </li>
            <li>{texts.stextoDesempenhoNovidade}</li>
            <li>{texts.stextoServidorNovidade}</li>
            <li>{texts.stextoCargaNovidade}</li>
          </ul>
          <h4>Referência</h4>
          <p>            
            <Image
              src={imgTela}
              alt="Fluxo do server component"
              width={500}
              height={300}
            />
          </p>
        </div>
      </section>
    </>
  );
}
