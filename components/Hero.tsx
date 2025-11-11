import React from 'react'

export const Hero = () => {
  return (
    <div className='my-40 w-full flex flex-col justify-center items-center'>
        <h1 className='text-7xl font-bold max-w-3xl leading-tight tracking-tight text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-500'>
            Unleash the power of intuitive finance
        </h1>
        <p className='max-w-3xl text-xl text-neutral-300 text-center mx-auto mt-10 px-4  selection:bg-white'>Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.</p>
        <div className='mt-8 flex items-center max-w-2xl w-full'>
            <input type='text' placeholder="Enter Your Email" className='flex-1 rounded-xl border border-neutral-600 mr-4 py-2 placeholder:text-neutral-700 text-white px-4 focus:outline-none focus:ring-1 focus:ring-sky-500 transition duration-200'></input>
            <button className='rounded-xl cursor-pointer border px-4 py-2 text-white border-neutral-700 relative'>Join the waitlist
                <div className='absolute inset-x-0 -bottom-px w-full h-px bg-linear-to-r from-transparent via-blue-500 to-transparent'></div>
            </button>
        </div>
    </div>
  )
}
//check global.css @theme and use theme variables 
