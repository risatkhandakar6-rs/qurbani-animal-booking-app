"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({ children, href}) {
  const pathName = usePathname();
  const isActive = href == pathName;

  return (
    <div>
      <Link href={href} className={`${isActive ?'border-b-2 border-green-500':''}`}>{children}
      </Link>
    </div>
  )
}
