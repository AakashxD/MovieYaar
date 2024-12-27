import React from 'react'; 
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='bg-gray-900 p-4 shadow-xl fixed top-0 left-0 right-0 z-50 border-b-4 border-yellow-500 rounded-b-lg h-[80px] flex items-center'>
        <div className='flex items-center justify-between max-w-7xl mx-auto px-6 w-full'>
          {/* Logo and Title */}
          <div className='flex items-center space-x-4'>
            <img 
              className="h-12 w-12 rounded-full border-2 border-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out" 
              src={Logo} 
              alt="Logo" 
            />
            <h2 className='text-yellow-300 font-bold text-lg md:text-xl uppercase tracking-wide'>
              Movie Buddies
            </h2>
          </div>

          {/* Navigation Links */}
          <div className='flex space-x-8'>
            <Link 
              to={"/"} 
              className='text-yellow-300 hover:text-white font-medium text-sm md:text-base tracking-wide uppercase transition-transform transform hover:scale-105 ease-in-out duration-300'
            >
              Home
            </Link>
            <Link 
              to={"/movies"} 
              className='text-yellow-300 hover:text-white font-medium text-sm md:text-base tracking-wide uppercase transition-transform transform hover:scale-105 ease-in-out duration-300'
            >
              Movies
            </Link>
            <Link 
              to={"/login"} 
              className='text-yellow-300 hover:text-white font-medium text-sm md:text-base tracking-wide uppercase transition-transform transform hover:scale-105 ease-in-out duration-300'
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer to offset fixed navbar */}
      <div className="pt-[80px]"></div>
    </>
  );
}

export default Navbar;
