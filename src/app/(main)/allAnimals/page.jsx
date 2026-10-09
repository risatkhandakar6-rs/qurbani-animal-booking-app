'use client'
import { useAnimals } from '@/context/AnimalContext';
import Link from 'next/link';
import { useState } from 'react';



export default function AllAnimals() {
  const { animals, loading } = useAnimals()
 const [sortOrder,setSortOrder]=useState('default')
   if (loading) {
    return (
      <div className="flex justify-center py-20 bg-[#F5F7FA]">
        <span className="loading loading-spinner loading-lg text-white"></span>
      </div>
     );
 

  }
  const SortedAnimals = [...animals].sort((a, b) => {
    if (sortOrder == 'low') return a.price - b.price;
    if(sortOrder == 'high')return b.price - a.price
  })
  
  return (
    <section className="container mx-auto my-10  px-4 md:px-6 lg:px-8" >
      <div >
         <div className="max-w-xl mb-10  md:text-left  grid text-center items-center justify-center mx-auto">
           <h2 className="text-2xl md:text-4xl font-bold text-black text-center ">
             All the animals here</h2>
          <p className="mt-3 text-sm text-gray-600 whitespace-nowrap text-center">Choose your favourite animal from here</p>
        </div>
        <div className="flex justify-end mb-6">
          <select
            value={sortOrder}
            onChange={(e) =>setSortOrder(e.target.value)}
          >
            <option value="default">Sort by price</option>
            <option value="low">Low to high</option>
            <option value="high">High to low</option>
        </select>
      </div>

     
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-autu">
        {SortedAnimals.map((animal) => (
          <div
            key={animal.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col justify-between"
          >
            {/* Image */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-full object-container hover:scale-105 transition-transform duration-300 "
              />
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {animal.name}
                  </h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-semibold">
                    {animal.category}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  <span className="font-medium text-gray-700">Breed:</span> {animal.breed} |{' '}
                  <span className="font-medium text-gray-700">Location:</span> {animal.location}
                </p>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {animal.description}
                </p>
              </div>

              {/* Price & Details Button */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-xs text-gray-400 block">Price</span>
                  <span className="text-lg font-bold text-green-600">
                    ৳{animal.price.toLocaleString()}
                  </span>
                
                </div>
            <Link className='btn bg-[#4CAF4F]' href={`/details-page/${animal.id}` }>View Details</Link>
               
                

                
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
   </section>
  )
}
