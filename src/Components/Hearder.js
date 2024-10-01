import React from 'react';
import { FaDochub } from 'react-icons/fa6';
// import { NavLink } from 'react-router-dom';

const Hearder = () => {
  return (
    <div className="w-[1600px] bg-gray-50">
      <nav className=" h-[3.5rem] w-full  justify-between">
        <div className="flex ">
          <FaDochub className="mt-4 ml-28 text-4xl" />
          <p className="mt-5 text-3xl">IVYA GUPTA</p>
          <div>
            <nav>
              <ul className=" flex items-center ml-[45rem] gap-x-5 text-2xl mt-5 cursor-pointer ">
                <li>
                  {' '}
                  <a href="#Project">Project</a>
                </li>
                <li>
                  <a href="#Skills">Skills</a>
                </li>
                <li>
                  {' '}
                  <a href="#Contact Me">Contact Me</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Hearder;
