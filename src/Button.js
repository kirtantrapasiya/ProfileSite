import React from 'react'
import { useState } from 'react';

const Button = ({onView}) => {
  const [view, setView] = useState(true);

  const viewHandler = () => {
    setView(!view);
    onView(!view)
  }

  return (
    <div onClick={viewHandler} className='cursor-pointer m-2 inline-block'>
        <div className='cursor-pointer p-0.5 bg-yellow-400 rounded-full flex gap-1'>
            <button className='bg-[#2E402C] text-white px-6 py-2 font-sans md:font-sans rounded-full text-sm hover:shadow-lg'>
              {view ? 'View All Skills' : 'Show Less'}
            </button>
        </div>
    </div>
  )
}

export default Button