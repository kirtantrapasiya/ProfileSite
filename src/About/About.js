import React from 'react';

const About = () => {
  return (
    <section className="bg-[#2E402C] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <p className="text-yellow-500 text-sm mb-2">— About Me</p>

        <h2 className="text-4xl font-bold mb-4">
          Who is <span className="text-yellow-400">Kirtan Trapasiya?</span>
        </h2>

        <p className="text-gray-300 mb-2 text-lg">2022 – 2026</p>

        <h3 className="text-xl font-semibold text-yellow-400 mb-2">
          Bachelor of Engineering (Computer Engineering) CGPA: 7.61
        </h3>

        <p className="text-gray-300 mb-8 leading-relaxed max-w-3xl">
          Currently pursuing Computer Engineering at Government Engineering College, Bhavnagar. 
          Focusing on Cloud Computing, Progressive Web Applications, and Full-Stack Development 
          with strong academic performance and practical project experience.
        </p>

        {/* Button and Name side-by-side */}
        <div className="flex items-center gap-6 flex-wrap">
          <button className="bg-white text-[#2E402C] px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition hover:shadow-xl">
            Download CV
          </button>
        <span
            className="text-yellow-400 text-2xl tracking-wide"
            style={{ fontFamily: 'Great Vibes' }}
        >
            Kirtan Trapasiya
        </span>
        </div>
      </div>
    </section>
  );
};

export default About;
