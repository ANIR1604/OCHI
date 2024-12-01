import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-100 flex px-20 items-center gap-5'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]'>
                    <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />
                    <button className='absolute px-5 py-1 rounded-full left-10 bottom-10 border-2 border-green-600 text-green-600'>&copy;2019-2020</button>
                </div>
            </div>
            <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
                <div className='card relative rounded-xl w-1/2 h-full bg-[#0b2420] flex items-center justify-center'>
                    <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' />
                    <button className='absolute px-5 py-1 uppercase rounded-full left-10 bottom-10 border-2 border-zinc-100 text-zinc-100'>rating 5.0 on CLutch</button>
                </div>
                <div className='card relative rounded-xl w-1/2 h-full bg-[#000000] flex items-center justify-center'>
                    <img className='w-28 h-28 ' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' />
                    <button className='absolute px-5 py-1 uppercase rounded-full left-10 bottom-10 border-2 border-zinc-100 text-zinc-100'>Buisness Bootcamp</button>
                </div>
            </div>
        </div>
    )
}

export default Cards