'use client'
import { createContext } from 'react'
import './user.css'

import React from 'react';
import Link from 'next/link';
import { MyContextProvider, useMyContext } from '../../(authenticated)/MyContext'; // Importe o provedor do contexto

import { Lista } from '@/components/ListaSugestao/Lista';
export default function Info({ props }) {

    const { handleUpdateList } = useMyContext(); // Use a função correta do contexto

    const Context = createContext()

    const sortedList = [...ListaService];


    return (
        <>
            <header>
                <Link href="/">Home</Link>
            </header>
            <div className='container-princ'>

                <MyContextProvider >

                    <Lista />

                </MyContextProvider >
            </div>





        </>


    );
}
