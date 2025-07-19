import React, { useState } from 'react';

const Pcard = ({
  title,
  description,
  image,
  tags,
  date,
  client,
  techStack,
  type,
  sourceCode,
  liveDemo,
}) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const toggleDesc = () => setShowFullDesc(!showFullDesc);

  const shortDescription =
    description.length > 100 ? description.slice(0, 100) + '... ' : description;

  return (
    <div className="relative group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-200">

      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {sourceCode && (
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white bg-[#ef4444] px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Source Code
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white bg-[#10b981] px-4 py-2 rounded hover:bg-green-600 transition"
            >
              View Project
            </a>
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>

        <div className="text-sm text-gray-500 mb-2">
          {tags?.join(' | ')}
        </div>

        <p className="text-gray-600 text-sm mb-2">
            {showFullDesc ? description : shortDescription}
            <button
                onClick={toggleDesc}
                className="text-sm font-semibold hover:underline focus:outline-none text-[#1a75ff]"
            >
            {showFullDesc ? 'Show less' : 'Read more'}
            </button>
        </p>

        <div className="text-xs text-gray-500 mt-4 mb-2">
          <strong>Date:</strong> {date} <br />
          <strong>Client:</strong> {client} <br />
          <strong>Type:</strong> {type}
        </div>

        <div className="text-xs text-gray-500">
          <strong>Tech:</strong> {techStack?.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default Pcard;
