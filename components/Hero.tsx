import React from 'react'

export const Hero = () => {
  return (
    <div className='px-4 py-2 flex items-center flex-col w-full my-10'>
        <div className='bg-gray-200 border border-neutral-200 text-neutral-600 px-4 py-2 rounded-full cursor-pointer transition duration-200 hover:bg-gray-100'>We're hiring Founding Ruby Engineers ?</div>
        <div>
            <h1 className='text-7xl font-medium text-center mt-10 tracking-tighter'>Magically simplify 
                <br />accounting and taxes
            </h1>
            <p className='text-center mt-8 text-lg text-gray-500'>Automated bookkeeping, effortless tax filing, real‑time insights.<br/> Set up in 10 mins. Back to building by 8:15pm.</p>
        </div>
        <div className='flex items-center gap-4 mt-10'>
             <button className='bg-[#2579F4] text-white px-4 py-2 rounded-lg 
             font-bold shadow-lg text-shadow-md tracking-wide cursor-pointer'>Get Started</button>
              <button className='text-black px-4 py-2 rounded-lg 
             font-bold   tracking-wide cursor-pointer hover:bg-gray-300'>Pricing &rarr;</button>
        </div>
    </div>
  )
}
