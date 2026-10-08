"use client"
import React, { useState } from 'react'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { authClient } from '@/lib/auth-client'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

export default function LogInPage() {
  const [isShowPass, setIsShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState:{errors}

  }=useForm()
  const loginFunc =async (data) => {
    const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required, The email address of the user.
    password:data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
    rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)
      callbackURL: "/", // An optional URL to redirect to after the user signs in. (optional)
  
    });
    console.log(res,error)
  
  }
   const handleGoogleLogin = async () => {
     const { error } = await authClient.signIn.social({
       provider: 'google',
       callbackURL: "/"
     });
     if (error) {
       console.log('google error',error)
     }

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


          <fieldset className='fieldset relative'>
              <label className="label">Password</label>
                 <input
              type={isShowPass ? 'text' : 'password'}
              className="input"
              placeholder="Password"
              {...register('password', { required: 'Password  is required' })}
           />
            <span className='absolute right-2 top-10' onClick={()=>setIsShowPass (!isShowPass)}> {isShowPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
             
            
            {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
         
     </fieldset>
 
          
 

          <button className="btn btn-neutral mt-4">Login</button>
             <div className="divider">OR</div>

        
          <button
            // type="button"
            // onClick={handleGoogleLogin}
            // className="btn btn-outline w-full"
            type='button'
            onClick={handleGoogleLogin}
            className='btn btn-outline w-full'
          >
            <FcGoogle size={20} />
            Login With Google
          </button>
          <p className='mt-2'>Don't have an accoutn? <Link className='text-red-300' href={"/register"}>Register</Link> </p>
        </fieldset>
        
   </form>
   </div>
  )
}
