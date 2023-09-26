'use client'
import React, { createContext, useState, useContext } from 'react';
import listaJson from '../../service/testeJson.json'

const MyContext = createContext();

export function MyContextProvider({ children }) {
    
  const Context = createContext()

  const listaOriginal = [...listaJson]

  const [sortedList, setSortedList] = useState(listaOriginal);
  
  const handleUpdateList = (newList) => {
    setSortedList(newList);
  };

  return (
    <MyContext.Provider value={{ sortedList, handleUpdateList }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
