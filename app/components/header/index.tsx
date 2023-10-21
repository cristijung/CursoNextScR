import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <>
      <section>
        <nav className={styles.navBar} style={{ display: "flex" }}>
          <div className={styles.titulo}>
            NextJs
          </div>
          <div className={styles.menu}>
            <Link href="/">Home </Link>| <Link href="/arquitetura">Arquitetura</Link> | <Link href="/rotas">Rotas</Link>
          </div>
        </nav>
        <header className={styles.header}>
          Trabalhando com Server Component
        </header>
      </section>
    </>
  );
}
