import React from 'react';
import { FaDochub } from 'react-icons/fa6';

const Hearder = () => {
  return (
    <div className="w-full border flex items-center justify-center border-red-400 bg-gray-100">
      <nav className="navbar w-[100%] h-[4.1rem]  flex items-center">
        <div className="custom-div flex border border-red-400 items-center justify-center w-[34%]">
          <FaDochub className="lg:text-5xl md:text-3xl text-2xl lg:mt-0 md:mt-2" />
          <p className="lg:text-4xl md:text-2xl text-lg lg:mt-3 md:mt-3 mt-1 lg:font-semibold md:font-semibold font-normal">
            IVYA GUPTA
          </p>
        </div>
        <div className="border border-red-400 w-[66%]">
          <ul className="flex gap-x-5 mt-1 md:text-xl lg:text-2xl cursor-pointer">
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
