import React from 'react';
import sandyLogo2 from '../assets/sandyLogo2.jpeg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-md fixed w-full z-10 top-0 left-0 bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo Section */}
          <a className="flex flex-col md:flex-row items-center mb-4 md:mb-0 hover:text-blue-500">
            {/* Logo Image */}
            <img
              src={sandyLogo2}
              alt="SIIT Logo"
              className="w-16 h-16 rounded-full transition-all duration-300 ease-in-out hover:scale-105"
            />
            {/* SIIT Text below logo on small screens, beside on large screens */}
            <span className="text-xl text-blue-500 font-medium md:ml-3 mt-2 md:mt-0">
              SIIT
            </span>
          </a>
          
          {/* Navbar Links */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* Home Link */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-blue-500 font-bold underline transition duration-300"
                  : "mr-5 text-gray-800 hover:text-blue-500 transition duration-300"
              }
            >
              Home
            </NavLink>
            
            {/* About Us Link */}
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-blue-500 font-bold underline transition duration-300"
                  : "mr-5 text-gray-800 hover:text-blue-500 transition duration-300"
              }
            >
              About Us
            </NavLink>

            {/* Courses Link */}
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-blue-500 font-bold underline transition duration-300"
                  : "mr-5 text-gray-800 hover:text-blue-500 transition duration-300"
              }
            >
              Courses
            </NavLink>

            {/* Contact Us Link */}
            <NavLink
              to="/ContactUs"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-blue-500 font-bold underline transition duration-300"
                  : "mr-5 text-gray-800 hover:text-blue-500 transition duration-300"
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20"> {/* Add padding to content below the navbar */}
        {/* Your main content goes here */}
      </div>
    
    </div>
  );
};

export default Navbar;
