'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowCircleRight, FaBars, FaTimes } from "react-icons/fa";

interface NavbarHomeProps {
  // props here
}

const NavbarHome: React.FC<NavbarHomeProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='top-0 right-0 left-0 z-50 fixed bg-white shadow-lg m-4 border border-gray-100 rounded-3xl'>
      <div className='px-6 py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo Section */}
          <div className='flex items-center'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='flex justify-center items-center bg-blue-600 rounded-lg w-8 h-8'>
                <span className='font-bold text-white text-lg'>B</span>
              </div>
              <span className='hidden sm:block font-bold text-gray-800 text-xl'>
                Balanso
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className='hidden md:flex items-center space-x-1 sm:space-x-2'>
            <Link
              href='#home'
              className='hover:bg-blue-50 px-3 sm:px-4 py-2 sm:py-2 rounded-3xl font-medium text-gray-600 hover:text-blue-600 text-sm sm:text-base transition-colors duration-200'
            >
              Home
            </Link>
            <Link
              href='#features'
              className='hover:bg-blue-50 px-3 sm:px-4 py-2 sm:py-2 rounded-3xl font-medium text-gray-600 hover:text-blue-600 text-sm sm:text-base transition-colors duration-200'
            >
              Features
            </Link>
            <Link
              href='#install'
              className='hover:bg-blue-50 px-3 sm:px-4 py-2 sm:py-2 rounded-3xl font-medium text-gray-600 hover:text-blue-600 text-sm sm:text-base transition-colors duration-200'
            >
              How to install
            </Link>
            <Link
              href='/install'
              className='flex items-center gap-2 bg-black hover:bg-blue-700 px-3 sm:px-4 py-2 sm:py-2 rounded-3xl font-bold text-white text-sm sm:text-base transition-colors duration-200'
            >
              Try Now <FaArrowCircleRight size={20}/>
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 pt-4 border-gray-100 border-t'>
            <div className='flex flex-col space-y-2'>
              <Link
                href='#home'
                className='hover:bg-blue-50 px-3 py-2 rounded-xl font-medium text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href='#features'
                className='hover:bg-blue-50 px-3 py-2 rounded-xl font-medium text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200'
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href='#install'
                className='hover:bg-blue-50 px-3 py-2 rounded-xl font-medium text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200'
                onClick={() => setIsMenuOpen(false)}
              >
                How to install
              </Link>
              <Link
                href='/install'
                className='flex justify-center items-center gap-2 bg-black hover:bg-blue-700 mt-2 px-3 py-2 rounded-xl font-bold text-white text-sm transition-colors duration-200'
                onClick={() => setIsMenuOpen(false)}
              >
                Try Now <FaArrowCircleRight size={16}/>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarHome;