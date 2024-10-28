import React from 'react';
import { FaDochub } from 'react-icons/fa6';

const Hearder = () => {
  return (
    <div className="w-full border border-red-400 bg-gray-100">
      <nav className="navbar w-[100%] h-[4.1rem] max-h-[4rem] flex items-center">
        <div className="flex border border-red-400  px-[4%] md:px-[6%] lg:px-[3%] items-center w-[40%]">
          <FaDochub className="lg:text-5xl md:text-3xl text-2xl lg:ml-0 md:ml-0 ml-[0%] lg:mt-0 md:mt-2 mt-2" />
          <p className="lg:text-4xl md:text-2xl text-lg lg:ml-0 md:ml-0 ml-0 lg:mt-3 md:mt-3 mt-3 lg:font-semibold md:font-semibold font-normal">
            IVYA GUPTA
          </p>
        </div>
        <div className="border border-red-400 w-[60%]">
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
