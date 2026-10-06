"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
const AnimalContext = createContext();
export default function AnimalProvider({ children }) {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    fetch('/animals.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('fetch data', data)
        setAnimals(data)})
      .catch((err) => console.error(err))
    .finally(()=>setLoading(false))
  
  }, [])
  
  
  
  return (
    <AnimalContext.Provider value={{animals,loading}}>
      {children}
   </AnimalContext.Provider>
  )
}
export const useAnimals =()=>useContext(AnimalContext)
