import React from 'react';
import { FaDochub } from 'react-icons/fa6';

const Hearder = () => {
  return (
    <div className="w-full flex bg-gray-100">
      <nav className="w-[100%] h-[4.1rem] flex">
        <div className="rounded-md flex items-center justify-center w-[33%] md:w-[30%]">
          <FaDochub className=" border-black md:text-5xl md:mt-2" />
          <p className=" md:text-4xl md:mt-5 md:semifont-bold font-normal">
            IVYA GUPTA
          </p>
        </div>
        <div className="flex items-center justify-center w-[67%] md:w-[70%]">
          <ul className="flex md:gap-16 gap-3 md:mt-3 border md:ml-[280px] text-base md:text-4xl hover:cursor-pointer">
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
