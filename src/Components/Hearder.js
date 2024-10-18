import React from 'react';
import { FaDochub } from 'react-icons/fa6';

const Hearder = () => {
  return (
    <div className="w-full bg-gray-50">
      <nav className="h-[3.5rem] w-[100%] flex justify-between items-center px-6 sm:px-10 lg:px-28">
        <div className="flex items-center w-[40%]">
          <FaDochub className="text-3xl sm:text-3xl" />
          <p className="ml-0 mt-3 sm:text-lg md:text-3xl lg:text-2xl font-semibold">
            IVYA GUPTA
          </p>
        </div>
        <div className="w-[60%]">
          <ul className="flex gap-x-4 sm:gap-x-6 lg:gap-x-8 text-lg sm:text-lg md:text-2xl lg:text-2xl cursor-pointer">
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
