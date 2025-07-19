import React from 'react';
import PlayButton from '../PlayButton';

const Info = ({ onViewPortfolio }) => {
  return (
    <div className="flex-1 flex flex-col justify-center px-6 lg:px-16">
      <div className="mb-6">
        <h3 className="text-sm text-gray-800 inline-block px-3 py-1 border-4 border-double border-gray-800 font-semibold mb-4">
          Hello There!
        </h3>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4 pt-4 tracking-normal">
          I’m <span className="text-yellow-500 underline">Kirtan Trapasiya,</span><br />
          Web Developer Based in India.
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-md">
          I’m an experienced Web Developer with strong front-end and back-end skills,
          collaborating with clients and startups to build high-quality products.
        </p>
      </div>

      <div className="flex items-center space-x-4 mt-6">
        <PlayButton onClick={onViewPortfolio}/>

        <button className="border-2 border-gray-600 text-gray-800 px-6 py-2 rounded-full hover:shadow-lg">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Info;
