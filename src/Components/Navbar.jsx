import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <nav className="bg-blue-600  font-serif shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold">UrgentCare</h1>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-10">
                <ScrollLink 
                  to="hero" 
                  smooth 
                  duration={500} 
                  onClick={handleLinkClick} 
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-extrabold cursor-pointer">
                  Home
                </ScrollLink>
                <ScrollLink 
                  to="about" 
                  smooth 
                  duration={500} 
                  onClick={handleLinkClick} 
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-extrabold cursor-pointer">
                  About Us
                </ScrollLink>
                <ScrollLink 
                  to="services" 
                  smooth 
                  duration={500} 
                  onClick={handleLinkClick} 
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-extrabold cursor-pointer">
                  Services
                </ScrollLink>
                <ScrollLink 
                  to="contact" 
                  smooth 
                  duration={500} 
                  onClick={handleLinkClick} 
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-extrabold cursor-pointer">
                  Contact
                </ScrollLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <RouterLink 
              to="/login" 
              className="bg-blue-700 text-white hover:bg-blue-500 px-4 py-2 rounded-md font-semibold">
              Login / Register
            </RouterLink>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <ScrollLink 
              to="hero" 
              smooth 
              duration={500} 
              onClick={handleLinkClick} 
              className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Home
            </ScrollLink>
            <ScrollLink 
              to="about" 
              smooth 
              duration={500} 
              onClick={handleLinkClick} 
              className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              About Us
            </ScrollLink>
            <ScrollLink 
              to="services" 
              smooth 
              duration={500} 
              onClick={handleLinkClick} 
              className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Services
            </ScrollLink>
            <ScrollLink 
              to="contact" 
              smooth 
              duration={500} 
              onClick={handleLinkClick} 
              className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Contact
            </ScrollLink>
            <RouterLink 
              to="/login" 
              className="w-full bg-blue-700 text-white hover:bg-blue-500 px-4 py-2 rounded-md font-semibold mt-2 block text-center">
              Login / Register
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;   

