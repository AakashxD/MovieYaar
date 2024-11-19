import React from 'react'; 
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='bg-gray-900 p-3 shadow-xl  fixed top-0 left-0 right-0 z-50 border-b-4 border-yellow-500 rounded-b-lg h-18'>
        <div className='flex items-center justify-between max-w-7xl mx-auto px-4'>
          <img 
            className="h-12 w-12 rounded-full border-2 border-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out" 
            src={Logo} 
            alt="Logo" 
          />
          <div className='flex space-x-10 pl-6'>
            <Link 
              to={"/"} 
              className='text-yellow-300 hover:text-white transform hover:scale-105 transition duration-300 ease-in-out'
            >
              <h2 className='font-medium text-base tracking-wide uppercase'>Home</h2>
            </Link>
            <Link 
              to={"/movies"} 
              className='text-yellow-300 hover:text-white transform hover:scale-105 transition duration-300 ease-in-out'
            >
              <h2 className='font-medium text-base tracking-wide uppercase'>Movies</h2>
            </Link>
            <Link 
              to={"/login"} 
              className='text-yellow-300 hover:text-white transform hover:scale-105 transition duration-300 ease-in-out'
            >
              <h2 className='font-medium text-base tracking-wide uppercase'>Login</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-16">
      </div>
    </>
  );
}
export default Navbar;
