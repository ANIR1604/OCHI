import { motion } from 'framer-motion'
import React, { useState } from 'react'


function Featured() {

    const [isHovering1, setHovering1] = useState(false);
    const [isHovering2, setHovering2] = useState(false);

    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] pb-10 border-zinc-600'>
                <h1 className='text-7xl leading-none tracking-tighter font-["Neue Montreal"]'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards flex gap-20 mt-10 w-full">
                    <div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)} className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter z-[9] -pb-20 leading-none text-9xl font-["P052"]'>
                            {"FYDE".split("").map((item, index) => (
                                <motion.span initial={{ y: "100%" }} animate={isHovering1 ? ({ y: "0%" }) : ({ y: "100%" })} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .08 }} className='inline-block'>{item}</motion.span>
                            ))}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-600'>
                            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' />
                        </div>
                    </div>
                    <div onMouseEnter={() => setHovering2(true)} onMouseLeave={() => setHovering2(false)} className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter z-[9] -pb-20 leading-none text-9xl font-["P052"]'>
                            {"VISE".split("").map((item, index) => (
                                <motion.span initial={{ y: "100%" }} animate={isHovering2 ? ({ y: "0%" }) : ({ y: "100%" })} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .08 }} className='inline-block'>{item}</motion.span>
                            ))}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-600'>
                            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured