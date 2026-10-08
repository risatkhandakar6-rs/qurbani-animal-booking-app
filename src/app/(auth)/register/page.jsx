"use client"
import { toast } from "react-toastify"
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";





export default function RegisterPage() {
  const [isShowPass, setIsShowPass] = useState(false);
  const router =useRouter()
  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm();
  const registerFunc = async (data) => {
    const { name, email, password, photo } = data;

    const { data: res, error } = await authClient.signUp.email({
    
    name:name, // required, The name of the user.
    email: email, // required, The email address of the user.
    password: password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
    image: photo, // An optional profile image of the user.
    
    })
    
   
  if(error) {
    toast.error(error.message)
    return
    }
    toast.success('SignUp succesfull')
    router.push('/')
    
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
            {...register('name',{required:'User Name is required'})}
          />  
          {errors.name && <span className='text-red-400'> {errors.name.message}</span>}
           
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

          <fieldset className="relative">
             <label className="label">Password</label>
          <input
            type={isShowPass ? 'text':'password'}
            className="input"
            placeholder="Password"
            {...register('password',{required:'Password is required'})}
            />
            <span className="absolute right-2 top-8" onClick={() => setIsShowPass(!isShowPass)}>{isShowPass ? <FaEye> </FaEye>:<FaEyeSlash></FaEyeSlash>}</span>
            
          {errors.password && <span className='text-red-400'>{errors.password.message}</span>}
 </fieldset>
          
 

  <button className="btn btn-neutral mt-4">Register</button>
</fieldset>
   </form>
   </div>
  )
}