import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='text-center flex flex-col items-center justify-center min-h-[60vh] px-4'>
      <h1 className='text-5xl font-bold text-red-400'>No page here</h1>
      <Link href={'/'}>
      <button className='mt-4 btn btn-link'>Go to home</button>
      </Link>
    </div>
  )
}
