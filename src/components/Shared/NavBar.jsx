"use client"
import React from 'react'
import NavLink from './NavLink'
import Image from 'next/image'
import UserPic from '@/assets/user-pic.png'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'


export default  function NavBar() {
  const { data: session,isPending } = authClient.useSession();

 
  console.log(session);
  const user = session?.user
  console.log(user)

  return (
   <div className="navbar bg-base-100 shadow-sm px-2 sm:px-10 md:px-12 lg:px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-60 p-2 shadow">
            

  <li><NavLink href={'/'}>Home</NavLink></li>
            <li><NavLink href={'/allAnimals'}>All Animals</NavLink></li>
            
               <li >
               {isPending? ( 
        <span className="loading loading-spinner loading-lg text-success"></span>
      
    ): user? ( <div className="flex gap-2 justify-start items-start flex-col w-full">
        <h1>Hello! {user.name}</h1>
      <Image className=' rounded-full w-10 h-10 ' src={ user.image||UserPic} height={10} width={30} alt='user'></Image>
        <button className='bg-[#4CAF4F] btn' onClick={async ()  => await authClient.signOut()}>LogOut</button>
      </div>) :
    <button className='bg-[#4CAF4F] btn'><Link href={"/login"}>LogIn</Link></button>
  }
            </li>
           
       
      </ul>
    </div>
    <h1 className='text-2xl font-bold'>Qurbani<span className=' text-[#4CAF4F]'>Livestock</span></h1>
  </div>
  <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          
 <li><NavLink href={'/'}>Home</NavLink></li>
      <li><NavLink href={'/allAnimals'}>All Animals</NavLink></li>

 </ul>
      </div> 
      
      <div className='navbar-end hidden sm:flex gap-2'>
         {isPending? ( 
        <span className="loading loading-spinner loading-lg text-success"></span>
      
    ): user? ( <div className="flex gap-2 items-center">
        <h1>Hello! {user.name}</h1>
      <Image className=' rounded-full w-10 h-10 ' src={ user.image||UserPic} height={10} width={30} alt='user'></Image>
        <button className='bg-[#4CAF4F] btn' onClick={async ()  => await authClient.signOut()}>LogOut</button>
      </div>) :
    <button className='bg-[#4CAF4F] btn'><Link href={"/login"}>LogIn</Link></button>
  }
    </div>
</div>
  )
}
