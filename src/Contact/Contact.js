// src/Contact.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaSkype, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="text-white py-20 px-8 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Info Section */}
        <div>
          <h4 className="text-yellow-500 text-sm font-medium mb-2">Contact Us</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Let’s Talk for <span className="text-yellow-400">Your Next Projects</span>
          </h2>
          <p className="text-gray-200 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-4">
              <span className="bg-yellow-500 p-2 rounded-full text-[#2E402C]">
                <FaPhoneAlt />
              </span>
              +91 9023616249
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-yellow-500 p-2 rounded-full text-[#2E402C]">
                <FaEnvelope />
              </span>
              trapasiyakirtan1607@gmail.com
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-yellow-500 p-2 rounded-full text-[#2E402C]">
                <FaMapMarkerAlt />
              </span>
              Amreli, Gujarat, India - 365421
            </li>
          </ul>
        </div>

        {/* Right Form Section */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Your Name */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Your Full Name *</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="bg-[#3D5240] text-white px-4 py-2 rounded focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Email *</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="bg-[#3D5240] text-white px-4 py-2 rounded focus:outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Phone *</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="bg-[#3D5240] text-white px-4 py-2 rounded focus:outline-none"
              required
            />
          </div>

          {/* Interested In */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">I’m Interested in *</label>
            <select
              className="bg-[#3D5240] text-white px-4 py-2 rounded focus:outline-none"
              required
            >
              <option value="">Select</option>
              <option value="Web Design">Web Design</option>
              <option value="Mobile App">Mobile App</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>

          {/* Country */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm mb-1">Country *</label>
            <select
              className="bg-[#3D5240] text-white px-4 py-2 rounded focus:outline-none"
              required
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm mb-1">Your Message *</label>
            <textarea
              placeholder="Enter here..."
              className="bg-[#3D5240] text-white px-4 py-2 rounded min-h-[120px] resize-none focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-white w-max text-[#2E402C] font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition hover:shadow-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
