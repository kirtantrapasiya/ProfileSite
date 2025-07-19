import React from 'react';

const Card = ({ title, items }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition border border-gray-200">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4 shadow">
        {/* Replace this icon with your own icon or image */}
        <span className="text-2xl font-bold text-[#2E402C]">📌</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {items}
      </p>
    </div>
  );
};

export default Card;
