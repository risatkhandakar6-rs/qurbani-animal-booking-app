import React from 'react'

export default function RegisterPage() {
  return (
    <div className='flex mx-auto justify-center items-center my-auto h-screen'>
       <form>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
<h1 className='fieldset-legend mx-auto font-bold text-lg'> Register Your Accout</h1>
 
  <label className="label">User Name</label>
  <input type="name" className="input" placeholder="Name" />       
           
  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
 <input type="password" className="input" placeholder="Password" />
          
 

  <button className="btn btn-neutral mt-4">Login</button>
</fieldset>
   </form>
   </div>
  )
}