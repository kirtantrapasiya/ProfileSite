import React from 'react'

const PlayButton = ({onClick}) => {
  return (
    <div onClick={onClick} className='cursor-pointer m-2 inline-block'>
        <div className='cursor-pointer p-0.5 bg-yellow-400 rounded-full flex gap-1 hover:shadow-lg'>
            <button className='bg-[#2E402C] text-white px-6 py-2 font-sans md:font-sans rounded-full text-sm'>
                Viwe My Protfolio
            </button>
            <div class="w-12 h-12 bg-white border-4 border-yellow-400 rounded-full flex items-center justify-center">
            <div class="w-0 h-0 
                        border-t-[8px] border-b-[8px] border-l-[14px]
                        border-t-transparent border-b-transparent border-l-black 
                        ml-1">
            </div>
            </div>
        </div>
    </div>
  )
}

export default PlayButton