"use client"
import React from 'react'

import Link from 'next/link'

export default function LogInPage() {
  const loginFunc = (e) => {
    e.preventDefault()
    const email = e.target.email;
    const password = e.target.password;
    console.log(email,password , 'this is inputs')
    
  }
  return (
    <div className='flex mx-auto justify-center items-center my-auto h-screen'>
       <form onSubmit={loginFunc}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
<h1 className='fieldset-legend mx-auto font-bold text-lg'>Login Your Accout</h1>
 
    
           
  <label className="label">Email</label>
  <input name='email' type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
 <input name='password' type="password" className="input" placeholder="Password" />
 
          
 

          <button className="btn btn-neutral mt-4">Login</button>
          <p className='mt-2'>Don't have an accoutn? <Link className='text-red-300' href={"/register"}>Register</Link> </p>
        </fieldset>
        
   </form>
   </div>
  )
}
