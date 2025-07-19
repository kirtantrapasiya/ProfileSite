import React from 'react';

const Picture = ({Image}) => {
  return (
    <div className="flex items-center justify-center px-6 lg:px-16 lg:mt-0 mt-6">
      <div style={{ borderRadius: '67% 33% 50% 50% / 38% 29% 71% 62%' }}
        className="
        relative 
        w-[260px] h-[220px] mt-[80px]     /* default for small screens */
        sm:w-[320px] sm:h-[280px] sm:mt-[100px] 
        md:w-[420px] md:h-[360px] md:mt-[150px] 
        bg-yellow-400
      "
      >
      </div>
      <img
        src={Image}
        alt="Kirtan Trapasiya"
        className="absolute w-72 h-auto object-cover z-10 rounded-xl "
      />
    </div>
  );
};

export default Picture;

