import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-48 px-20'>
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return <div className='masker'>
            <div className='w-fit flex items-end overflow-hidden'>
              {index === 1 && (
                <motion.div initial={{ width: 0 }} animate={{ width: "7vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='mr-[0.8vw] w-[7vw] h-[4.5vw] rounded-md -top-[1.9vw] relative bg-green-500'></motion.div>
              )}
              <h1 className='uppercase text-[7vw] leading-[6.5vw] tracking-tighter font-semibold font-["P052"]'>{item}</h1>
            </div>
          </div>
        })}
      </div>
      <div className='border-t-[1px] border-zinc-600 mt-32 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
          return <p className='text-md leading-none tracking-tight font-light'>{item}</p>
        })}
        <div className='start flex items-center gap-2'>
          <div className='px-5 py-1 border-[2px] border-zinc-500 rounded-xl font-light text-md uppercase'>Start the Project</div>
          <div className='w-10 h-10 border-[2px] border-zinc-500 flex justify-center items-center rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage