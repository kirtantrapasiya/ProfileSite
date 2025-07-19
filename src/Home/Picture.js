import React from 'react';

const Picture = ({Image}) => {
  return (
    <div className="flex items-center justify-center px-6 lg:px-16 lg:mt-0 mt-6">
        <img
        src={Image}
        alt="Kirtan Trapasiya's Photo"
        />
    </div>
  );
};

export default Picture;

