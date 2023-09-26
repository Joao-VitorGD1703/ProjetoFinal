'use client'
import { createContext } from 'react'

import React from 'react';

import '../globals.css';
import { Form } from '@/components/Form/Form';
import { Lista } from '@/components/ListaSugestao/Lista';
import ListaService from '../../service/testeJson.json';
import { MyContextProvider } from './MyContext'; // Importe o provedor do contexto

export default function Home() {


  return (
    <MyContextProvider> {/* Fornece o contexto */}
      <div>
        <section className='posicao posicao-head'>
          <Form  />
        </section>
        <section className='posicao posicao-lista'>
           <Lista />
        </section>
      </div>
    </MyContextProvider>
  );
}



// 'use client'
// import { createContext } from 'react'

// import { useState } from 'react';
// import { React } from 'react';
// import './globals.css'
// import { Form } from '@/components/Form/Form'
// import { Lista } from '@/components/ListaSugestao/Lista'
// import ListaService from '../service/testeJson.json'; // Importe sua lista de serviço
// // import { Formlista } from '@/components/FormLIsta/Formlista';


// export default function Home() {

//   const Context = createContext()

//   const [sortedList, setSortedList] = useState(ListaService);

//   const handleUpdateList = (newList) => {
//     setSortedList(newList);
//   };

//   return (
//     <>
//     <section className='posicao' >
//       <Form updateList={handleUpdateList} />

//     </section>
//     <section className='posicao' >
//       <Lista  initialList={sortedList}/>
//     </section>
//   </>
   
//   )
// }





// import {React}  from 'react';
// import { useClient } from 'next/client';

// import Image from 'next/image'
// import './globals.css'
// import { Form } from '@/components/Form/Form'
// import { Lista } from '@/components/ListaSugestao/Lista'

// export default function Home() {
//   useClient();

//   const [sortedList, setSortedList] = useState(ListaService);

//   const handleUpdateList = (newList) => {
//     setSortedList(newList);
//   };
//   return (
//     <>
//       <section className='posicao'>
//         <Form updateList={handleUpdateList}/>

//       </section>
//       <section className='posicao'>
//         <Lista initialList={sortedList}/>
      
        

//       </section>
//     </>
//   )
// }
