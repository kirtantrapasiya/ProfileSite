import React from 'react';
import Card from './Card';

const Cards = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <Card key={skill.id} {...skill} />
      ))}
    </div>
  );
};

export default Cards;
