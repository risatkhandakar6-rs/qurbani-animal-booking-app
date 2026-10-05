"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


export default function BestBreeds() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setBreeds(data.breeds))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20 bg-[#F5F7FA]">
        <span className="loading loading-spinner loading-lg text-white"></span>
      </div>
    );
  }
  return (
    <section className='bg-[#F5F7FA]'>
       <div className="max-w-7xl mx-auto px-2 md:px-10 py-8 md:py-10 lg:py-12">
         <div className="max-w-xl mb-10  md:text-left  grid text-center items-center justify-center mx-auto">
           <h2 className="text-2xl md:text-4xl font-bold text-black text-center ">
             Qurbani tips before you buy</h2>
          <p className="mt-3 text-xs text-gray-600 whitespace-nowrap">Three quick checks that help you choose a healthy animal <br className="inline sm:hidden" /> and keep it well until Eid.</p>
        </div>
         <div className="grid gap-6 sm:gap-2 lg:gap-6 grid-cols-1 sm:grid-cols-3 ">
          {breeds.map((breed) => (
            <div
              key={breed.id}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={breed.image}
                  alt={breed.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-white text-[#2E7D32] text-xs font-medium px-3 py-1 rounded-full">
                  {breed.type}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-black">
                    {breed.name}
                  </h3>
                  <span className="text-sm font-medium text-[#2E7D32]">
                    {breed.weight}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {breed.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
   </section>
  )
}
