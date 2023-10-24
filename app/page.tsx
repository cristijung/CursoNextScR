import Image from "next/image";
import styles from "./page.module.scss";

export default async function Home() {
  return (
    <>
      <section className="altura">
        <main className="conteudo">
          <h2>Welcome ao NextJs Vs 13</h2>
          <div className="content">
            <p>
              Next.js é um framework de código aberto para desenvolvimento de
              aplicativos web baseados em React. Ele é construído sobre o React
              e oferece uma série de recursos e funcionalidades que facilitam a
              criação de aplicativos web modernos e escaláveis. Aqui estão
              algumas características-chave do Next.js:
              <ul>
                <li>
                  <b>Renderização Universal:</b> O Next.js oferece suporte à
                  renderização tanto no lado do servidor (SSR) quanto no lado do
                  cliente. Isso significa que você pode renderizar páginas no
                  servidor para melhorar o SEO, a performance inicial e a
                  experiência do usuário.
                </li>
                <li>
                  <b>Roteamento Automático:</b> O Next.js possui um sistema de
                  roteamento simples, onde as rotas são baseadas na estrutura de
                  diretórios. Isso facilita a criação de páginas e a organização
                  de código.
                </li>
                <li>
                  <b>Carregamento de Página Sob Demanda:</b> O Next.js permite carregar
                  páginas de forma assíncrona, o que ajuda a reduzir o tempo de
                  carregamento inicial. Isso é conhecido como Code Splitting.
                </li>
              </ul>
            </p>
          </div>
        </main>
      </section>
    </>
  );
}
