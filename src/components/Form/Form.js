'use client'
import { createContext } from 'react'
import { useState, useEffect } from 'react';
import "./Form.css"
import ListaService from '../../service/testeJson.json';
// import {crescente, descresente, sugestao } from '../../service/func'
import { useMyContext } from '../../app/(authenticated)/MyContext'; // Importe useMyContext

export const Form = ({ updateList }) => {


    const { handleUpdateList } = useMyContext(); // Use a função correta do contexto

    const Context = createContext()

    const sortedList = [...ListaService];

    const handleClickCrescente = () => {
        let theList = sortedList.sort((a, b) => a.dataEnvio - b.dataEnvio);
        handleUpdateList(theList);
        console.log("certo");
    };

    const handleClickDecrescente = () => {
        let theList = sortedList.sort((a, b) => b.dataEnvio - a.dataEnvio);
        handleUpdateList(sortedList);
        console.log("errado");

    };

    const search = (event) => {
        const novoValor = event.target.value;

        // let finalList = sortedList.filter(e => e.CPF == {novoValor});
        let finalList = sortedList.filter(e => e.CPF.toLowerCase().includes(novoValor));
        handleUpdateList(finalList);
        console.log(finalList);

    };
    const handleClickMelhoria = () => {
        let finalList = sortedList.filter(e => e.tipoSugestao == 'Sugestão de melhoria');
        handleUpdateList(finalList);
        console.log(sortedList);

    };
    const handleClickNovo = () => {

        let finalList = sortedList.filter(e => e.tipoSugestao == 'Sugestão de novo produto');
        handleUpdateList(finalList);
        console.log(sortedList);

    };

    return (
        <div className='cont-principal'>
            <div className='cont-secundario'>
                <div className='inputs'>
                    <label for="cpf" className='label-input'>Pesquisa por CPF</label>
                    <input
                        className='input-text'
                        name="cpf"
                        type="text"
                        placeholder="Pesquisar..."
                        onChange={search}
                    />
                </div>

            </div>
            <div className='cont-secundario'>
                <ul className='btn-ul'>
                    <li className='li-btn'>
                        <button className='' onClick={handleClickCrescente}>Ordem Crescente</button>
                    </li>
                    <li className='li-btn' >
                        <button className='' onClick={handleClickDecrescente}>Ordem Decrescente</button>
                    </li>
                    <li className='li-btn'>
                        <button className='' onClick={handleClickNovo}>Novo produto</button>
                    </li>
                    <li className='li-btn'>
                        <button className='' onClick={handleClickMelhoria}>Melhoria</button>
                    </li>

                </ul>
            </div>
        </div>
    )
}
