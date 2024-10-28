import React from 'react';
import { FaDochub } from 'react-icons/fa6';

const Hearder = () => {
  return (
    <div className="w-full border border-red-400 bg-gray-100">
      <nav className="navbar w-[100%] h-[4.1rem] max-h-[5rem] flex justify-between items-cepx-6 md:px-20 lg:px-28">
        <div className="flex items-center w-[38%]">
          <FaDochub className="lg:text-xl md:text-3xl md:ml-0" />
          <p className="ml-0 lg:text-lg md:text-3xl font-semibold">
            IVYA GUPTA
          </p>
        </div>
        <div className="w-[62%]">
          <ul className="flex gap-x-6 lg:ml-[50%] md:ml-[30%] xl:ml-[gap-x-5 lg:gap mt-1 md:text-xl lg:text-2xl cursor-pointer">
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
