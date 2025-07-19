import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2E402C] text-white py-10 border-t border-gray-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold">Kirtan Trapasiya</h3>
          <p className="text-sm text-gray-300">Full Stack Developer</p>
          <p className="text-xs text-gray-400 mt-2">© {new Date().getFullYear()} All rights reserved</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 hover:border-yellow-400 p-2 rounded-md border border-gray-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 hover:border-yellow-400 p-2 rounded-md border border-gray-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-yellow-400 hover:border-yellow-400 p-2 rounded-md border border-gray-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
