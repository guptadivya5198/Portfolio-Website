import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-gray-100 shadow-md fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl md:text-3xl font-semibold text-gray-800">
            <span className="span1">DIVYA</span>
            <span className="span2"> GUPTA</span>
          </h1>
        </div>
        <ul className="hidden md:flex gap-10 text-gray-700 text-lg md:text-xl font-medium">
          <li className="hover:text-red-500 transition">
            <a href="#Project">Projects</a>
          </li>
          <li className="hover:text-red-500 transition">
            <a href="#Skills">Skills</a>
          </li>
          <li className="hover:text-red-500 transition">
            <a href="#Contact Me">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
