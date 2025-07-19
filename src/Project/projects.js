import React, { useState } from 'react';
import Pcards from './Pcards';
import Button from '../Button';

const Projects = ({projects}) => {

  const firstThree = projects.slice(0, 2);

  const [value, setValue] = useState(true);

  const getView = (view) => {
    setValue(view);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto px-16 py-16 bg-[#F6F6F6]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="text-yellow-500">My </span>
            <span>Projects</span>
          </h2>
        </div>
        <Button onView={getView}/>
      </div>
      <Pcards projects={value ? firstThree : projects} />
      </div>
    </section>
  );
};

export default Projects;
