import Cards from './Cards';
import Button from '../Button';
import { useState } from 'react';

const Skills = ({skills}) => {

  const firstThree = skills.slice(0, 4);

  const [value, setValue] = useState(true);

  const getView = (view) => {
    setValue(view);
  };


  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="text-yellow-500">Skills </span>
            <span>& Technologies</span>
          </h2>
        </div>
        <Button onView={getView}/>
      </div>

      <Cards skills={value ? firstThree : skills} />
    </section>
  );
};

export default Skills;
