import React from 'react';
import { FaDochub } from 'react-icons/fa6';

const Hearder = () => {
  return (
    <div className="w-full border flex items-center justify-center border-red-400 bg-gray-100">
      <nav className="navbar w-[100%] h-[4.1rem]  flex items-center">
        <div className="custom-div flex items-center justify-center w-[38%]">
          <FaDochub className="lg:text-5xl md:text-3xl text-2xl lg:mt-0 md:mt-2" />
          <p className="lg:text-4xl md:text-2xl text-lg lg:mt-3 md:mt-3 mt-1 lg:font-semibold md:font-semibold font-normal">
            IVYA GUPTA
          </p>
        </div>
        <div className="flex items-center justify-center w-[62%]">
          <ul className="flex items-center justify-center lg:gap-14 md:gap-8 gap-4 mt-1 lg:text-3xl md:text-2xl hover:cursor-pointer">
            <li>
              <a href="#Project">Projects</a>
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
