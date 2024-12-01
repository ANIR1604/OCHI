import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2.5" className='w-full p-20 bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl'>
      <h1 className='font-["Neue Montreal"] text-zinc-800 text-[3.5vw] tracking-tight leading-[4vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='w-full flex gap-10 border-[#a1b562] mt-20 pt-10 border-t-[1px]'>
        <div className='w-1/2'>
          <h1 className='text-7xl text-black'>Our approach</h1>
          <button className=' flex uppercase gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <img className='rounded-3xl h-[70vh]' src='src/assets/img1.jpg' />
      </div>
    </div>
  )
}

export default About