import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
    return(
        <>
        <section>
            <nav className={styles.navBar}  style={{display: 'flex'}}>
                <div className={styles.titulo}>NextJs</div>
            <div className={styles.menu}>
                <Link href='/rotas'>Home </Link>| Arquitetura | Rotas
            </div>
            </nav>
            <header className={styles.header}>Trabalhando com Server Component</header>
        </section>
        </>
    );
}
