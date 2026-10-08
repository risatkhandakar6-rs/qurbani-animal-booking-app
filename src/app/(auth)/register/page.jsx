"use client"

import { useForm } from 'react-hook-form'

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm();
  const registerFunc =()=> {

     
  }
  return (
    <div className='flex mx-auto justify-center items-center my-auto h-screen'>
       <form onSubmit={handleSubmit(registerFunc)}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
<h1 className='fieldset-legend mx-auto font-bold text-lg'> Register Your Accout</h1>
 
  <label className="label">User Name</label>
          <input
            type="name"
            className="input"
            placeholder="Name"
            {...register('userName',{required:'User Name is required'})}
          />  
          {errors.userName && <span className='text-red-400'> {errors.userName.message}</span>}
           
  <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register('email',{required:'Email is required'})}
          />
          {errors.email && <span className='text-red-400'>{errors.email.message}</span>}
  <label className="label">Photo</label>
          <input
            type="photo"
            className="input"
            placeholder="Photo"
            {...register('photo',{required:'Photo is required'})}
          />
          {errors.photo && <span className='text-red-400'>{errors.photo.message}</span>}

  <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register('password',{required:'Password is required'})}
          />
          {errors.password && <span className='text-red-400'>{errors.password.message}</span>}
          
 

  <button className="btn btn-neutral mt-4">Register</button>
</fieldset>
   </form>
   </div>
  )
}