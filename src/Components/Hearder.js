import React from 'react';
import { FaDochub } from 'react-icons/fa6';

const Hearder = () => {
  return (
    <div className="w-full bg-gray-50">
      <nav className="h-[3.5rem] w-full flex justify-between items-center px-6 sm:px-10 lg:px-28">
        <div className="flex items-center">
          <FaDochub className="text-3xl sm:text-4xl" />
          <p className="ml-0 mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            IVYA GUPTA
          </p>
        </div>
        <div>
          <ul className="flex gap-x-4 sm:gap-x-6 lg:gap-x-8 text-lg sm:text-xl md:text-2xl lg:text-2xl cursor-pointer">
            <li>
              <a href="#Project">Project</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Contact Me">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Hearder;
