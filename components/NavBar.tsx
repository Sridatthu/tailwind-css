import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const NavBar = () => {
    const links: { href: string; title: string }[] = [
        { href: '/guide', title: 'Guide' },
        { href: '/pricing', title: 'Pricing' },
        { href: '/login', title: 'Login' },
    ];
  return (
    <div className='flex justify-between items-center py-4 px-4'>
        <Link href={"/"}>
        <Image src="/finta-logo-light.svg" 
        alt='logo'
        height={100}
        width={100}
        />
        </Link>
        <div className='flex items-center gap-8'>
            {links.map((link,index)=>(
                <Link key={index} href={link.href}
                className='text-neutral-800 font-medium hover:text-neutral-500 transition duration-200'
                >{link.title}</Link>
            ))}
            <button className='bg-[#2579F4] text-white px-4 py-2 rounded-lg 
             font-bold shadow-lg text-shadow-md tracking-wide'>Start free trial</button>
        </div>
    </div>
  )
}
