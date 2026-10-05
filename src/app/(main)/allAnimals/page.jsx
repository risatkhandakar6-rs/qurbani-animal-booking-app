import React, { useEffect, useState } from 'react'

export default function AllAnimals() {
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
  
  if (loading) {
     return (
      <div className="flex justify-center py-20 bg-[#F5F7FA]">
        <span className="loading loading-spinner loading-lg text-white"></span>
      </div>
    );
  }
  return (
    <section>
      <div>
         <div className="max-w-xl mb-10  md:text-left  grid text-center items-center justify-center mx-auto">
           <h2 className="text-2xl md:text-4xl font-bold text-black text-center ">
             All the animals here.</h2>
          <p className="mt-3 text-xs text-gray-600 whitespace-nowrap">Choose your favourite animal from here.</p>
        </div>
        <div>
          {
            animals.map((animal)=>(
              <div key={animal.id}>
                <div>
                  {animal.name}
                </div>
              </div>
            ))
          }
        </div>
      </div>
   </section>
  )
}
