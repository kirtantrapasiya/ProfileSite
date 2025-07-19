import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const datas = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
];

const allSections = [
  ...datas,
  { name: 'Contact', href: '#contact' }, // for tracking only, not rendering
];

const Navbar = ({Logo}) => {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const sections = datas.map((data) => ({
        name: data.name,
        top: document.querySelector(data.href)?.offsetTop,
      }));

      const positions = allSections.map((sec) => ({
        name: sec.name,
        top: document.querySelector(sec.href)?.offsetTop || 0,
      }));

      let found = false;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY + 100 >= sections[i].top) {
          setActive(sections[i].name);
          found = true;
          break;
        }
      }

      for (let i = positions.length - 1; i >= 0; i--) {
        if (scrollY + 100 >= positions[i].top) {
          if (positions[i].name === 'Contact') {
            setActive(null); // Don't highlight any link
          } else {
            setActive(positions[i].name);
          }
          found = true;
          break;
        }
      }

      if (!found) setActive(null);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scroll when menu is open
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <nav
      className={`bg-[#2E402C] fixed z-50 transition-all duration-500 ${
        scrolled
          ? 'top-0 left-0 w-full rounded-none px-3 py-2 shadow-md'
          : 'top-4 left-1/2 transform -translate-x-1/2 w-[90%] rounded-full px-3 py-2 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-white font-bold text-lg">Kirtan</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {datas.map((data) => (
            <a
              key={data.name}
              href={data.href}
              className={`text-sm font-medium transition ${
                active === data.name
                  ? 'text-yellow-400'
                  : 'text-white hover:text-yellow-400'
              }`}
            >
              {data.name}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline bg-white text-[#2E402C] px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 transition"
        >
          Contact Me
        </a>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#2E402C] shadow-lg rounded-xl py-4 z-40">
          <div className="flex flex-col items-center space-y-4">
            {datas.map((data) => (
              <a
                key={data.name}
                href={data.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium ${
                  active === data.name
                    ? 'text-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {data.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-white text-[#2E402C] px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
