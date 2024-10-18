import React from 'react';
import { FaDochub } from 'react-icons/fa6';

const Hearder = () => {
  return (
    <div className="w-full bg-gray-50 ">
      <nav className="h-[3.5rem] w-[100%] sticky flex justify-between items-center sm:px-6 md:px-20 lg:px-28">
        <div className="flex items-center w-[38%]">
          <FaDochub className="lg:text-4xl md:text-4xl sm:text-xl md:ml-0 sm:ml-0" />
          <p className="ml-0 sm:ml-0 lg:mt-3 sm:text-lg md:text-3xl lg:text-2xl font-semibold">
            IVYA GUPTA
          </p>
        </div>
        <div className="w-[62%]">
          <ul className="flex gap-x-6 lg:ml-[50%] md:ml-[30%] xl:ml-[50%] sm:gap-x-5 lg:gap-x-8 sm:text-xs sm:mt-1 md:text-xl lg:text-2xl cursor-pointer">
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
