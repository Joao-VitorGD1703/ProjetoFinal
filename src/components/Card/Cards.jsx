import React from 'react'
import './Card.css'

export const Cards = (props) => {

    const data = props

    return (
        <div className='cont-card'>
            <section className='article-elem'>


                <h2>{data.nome}</h2><br />
                {/* <p>{data.Grupo}</p> */}


            </section>
            <section className='article-elem'>
                <ul>

                    <li>{data.Grupo}</li><br></br>
                    <li><b>{data.Cidade} / {data.Uf}</b></li>
                    <li>{data.cpf}</li>
                    <li>{data.data}</li>
                    <li>{data.tipoSugestao}</li>
                </ul>
            </section>
            <section className='article-elem'>
                <p className='par'>{data.textSugestao}</p>
            </section>
        </div>
    )

}