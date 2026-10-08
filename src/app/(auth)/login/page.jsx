"use client"
import React from 'react'

import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function LogInPage() {

  const {
    register,
    handleSubmit,
    formState:{errors}

  }=useForm()
  const loginFunc = (e) => {
  
  }
  return (
    <div className='flex mx-auto justify-center items-center my-auto h-screen'>
       <form onSubmit={handleSubmit(loginFunc)}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
<h1 className='fieldset-legend mx-auto font-bold text-lg'>Login Your Accout</h1>
 
    
           
  <label className="label">Email</label>
          <input
            {...register('email',{required:'Email is required'})}
            type="email"
            className="input"
            placeholder="Email" />
          {errors.email && <span className='text-red-400'>{errors.email.message}</span>}

  <label className="label">Password</label>
          <input
            {...register('password', { required: 'Password  is required' })}
            type="password"
            className="input"
            placeholder="Password" />
            {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
       
 
          
 

          <button className="btn btn-neutral mt-4">Login</button>
          <p className='mt-2'>Don't have an accoutn? <Link className='text-red-300' href={"/register"}>Register</Link> </p>
        </fieldset>
        
   </form>
   </div>
  )
}
