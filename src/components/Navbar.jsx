import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className="bg-[#0e162a] p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl cursor-pointer" onClick={() => scrollToSection('home')}>
          Fahmiduzzaman Fahim
        </div>

        {/* Hamburger menu for small devices */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#0e162a] lg:bg-transparent p-4 lg:p-0`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4">
            <li>
              <a onClick={() => scrollToSection('home')} className="block py-2 px-4 text-white hover:bg-[#1c2a3f] lg:hover:bg-transparent lg:hover:text-[#5f83cc] transition-colors duration-300 cursor-pointer">Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('services')} className="block py-2 px-4 text-white hover:bg-[#1c2a3f] lg:hover:bg-transparent lg:hover:text-[#5f83cc] transition-colors duration-300 cursor-pointer">Services</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('reviews')} className="block py-2 px-4 text-white hover:bg-[#1c2a3f] lg:hover:bg-transparent lg:hover:text-[#5f83cc] transition-colors duration-300 cursor-pointer">Reviews</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('contact')} className="block py-2 px-4 text-white hover:bg-[#1c2a3f] lg:hover:bg-transparent lg:hover:text-[#5f83cc] transition-colors duration-300 cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
