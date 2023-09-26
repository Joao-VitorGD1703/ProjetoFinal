'use client'
import { createContext } from 'react'
import { useMyContext } from '../../app/(authenticated)/MyContext'; // Importe useMyContext


import React from 'react'
import { useState } from 'react';
import { Cards } from '../Card/Cards'
import './Lista.css'
import ListaService from "../../service/testeJson.json"


export const Lista = ({ initialList }) => {


    let { sortedList } = useMyContext(); // Use o estado correto do contexto

    const Context = createContext()

    // let object = ListaService
    // console.log(ListaService);
    // console.log(initialList);
    // const [list, setList] = useState(initialList);

    // const updateList = (newList) => {
    //   setList(newList);
    // };


    return (
        <div>
            <ul className='temp-posicao'>



                {sortedList.map((e) => (
                    <li key={e.CPF} className='theli'>
                        <Cards
                            nome={e.Nome}
                            cpf={e.CPF}
                            data={e.data}
                            tipoSugestao={e.tipoSugestao}
                            textSugestao={e.sugestao}
                        />
                    </li>
                ))}


            </ul>
        </div>
    )


}