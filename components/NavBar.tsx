"use client"
import { Menu } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

export const NavBar = () => {
    const [open,setOpen]=useState(false); 
    const links = [
        { href: '#', name: 'Home' },
        { href: '#', name: 'About' },
        { href: '#', name: 'Blog' },
        { href: '#', name: 'Contact' },
    ];

  return (
   <div className='relative'>
     <div className='mt-4 bg-white max-w-4xl mx-auto w-full md:rounded-full flex justify-between items-center px-4 py-2 shadow-xl'>
        <Image
        src="/image.png"
        alt='logo'
        width={40}
        height={40}
        className='rounded-full'
        />
        <div className='hidden md:flex items-center gap-4 text-sm text-neutral-500 mr-10'>
            {
                links.map((link,index)=>(<Link className='hover:text-neutral-900' key={index} href={link.href}>{link.name}</Link>))
            }
        </div>
       <button onClick={()=>setOpen(!open)} className='md:hidden'><Menu/></button>
       {open && <div className='absolute inset-x-0 top-15 bg-white rounded-md max-w-[95%] mx-auto'>
        <div className='flex md:hidden flex-col items-start gap-4 text-sm text-neutral-600 p-4'>
             {
                links.map((link,index)=>(<Link className='hover:text-neutral-900' key={index} href={link.href}>{link.name}</Link>))
            }
        </div>
        </div>}
    </div>
   </div>
  )
}
