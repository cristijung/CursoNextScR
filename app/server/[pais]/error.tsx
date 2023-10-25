//para renderizar o componente no lado do cliente:
//declaração da diretiva:
'use client';

import Link from "next/link";

export default function Error() {
    return(
        <>
        <div className="altura">
            <h2>Desculpe, não encontramos a página que você busca!</h2>
            <hr/>
            <Link href={'/'} className='menuLink'>Voltar</Link>
        </div>
        </>
    )
}