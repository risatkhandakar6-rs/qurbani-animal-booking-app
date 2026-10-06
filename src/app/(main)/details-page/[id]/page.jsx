"use client"
import BookingForm from '@/components/BookingForm';
import { useAnimals } from '@/context/AnimalContext'
import Link from 'next/link';
import React from 'react'

export default function AnimalDetails({ params }) {
   const {id} = React.use(params)
  const { loading, animals } = useAnimals();
 
  const animal =animals.find((res)=>res.id == id)

   if (loading) {
    return (
      <div className="flex justify-center py-20 bg-[#F5F7FA]">
        <span className="loading loading-spinner loading-lg text-white"></span>
      </div>
    );
  }
  return (
   <section className="container mx-auto px-4 py-10 max-w-6xl">
     
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/allAnimals" className="text-sm font-semibold text-gray-600 hover:text-black flex items-center gap-1 btn bg-[#4CAF4F] w-50">
          ← Back to All Animals
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
        
        {/* Left Column: Animal Information */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="w-full h-80 rounded-xl overflow-hidden bg-gray-100 mb-6">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-between items-start mb-3">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {animal.name}
              </h1>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                {animal.category}
              </span>
            </div>

            {/* Badges / Quick Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 bg-gray-50 p-3 rounded-xl text-center">
              <div>
                <span className="text-xs text-gray-400 block">Breed</span>
                <span className="text-sm font-semibold text-gray-700">{animal.breed}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Weight</span>
                <span className="text-sm font-semibold text-gray-700">{animal.weight} kg</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Age</span>
                <span className="text-sm font-semibold text-gray-700">{animal.age} yrs</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Location</span>
                <span className="text-sm font-semibold text-gray-700">{animal.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed my-4">
              {animal.description}
            </p>
          </div>

          {/* Price */}
          <div className="pt-4 border-t border-gray-100 mt-4">
            <span className="text-xs text-gray-400 block">Total Price</span>
            <span className="text-2xl font-bold text-green-600">
              ৳{animal.price?.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Right Column: Booking Form */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Book This Animal</h2>
          <p className="text-xs text-gray-500 mb-6">
            Fill up your details to place a booking request for Qurbani.
          </p>

     <BookingForm animal={animal}></BookingForm>
        </div>

      </div>
    </section>
  )
}
