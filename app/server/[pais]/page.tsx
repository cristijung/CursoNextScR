import type { Country } from '@/app/server/page';
import styles from '../server.module.scss';
import Link from 'next/link';

async function getCountryByName(name: string): Promise<Country> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    return (await response.json())[0];
}

export default async function CountryPage({ params: { pais } }: { params: { pais: string }}) {
    const country = await getCountryByName(pais);
    return (
        <>
        <div className='conteudo'>
        <h2>Informações do País:</h2>
        <section className={styles.box}>
            <div className={styles.titulo}>{ country.translations.por.common }</div>

        <span><Link href='/' className={styles.menu}>Voltar</Link></span>    
        </section>
        </div>
        </>
    )
}