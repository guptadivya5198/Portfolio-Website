import React from 'react';
import { data } from '../Project/Array';

const Projects = () => {
  return (
    <section id="Project" className="bg-gray-100 py-10">
      <h2 className=" text-center font-bold text-4xl md:text-6xl mb-10 span1">
        Projects
      </h2>
      <div className="flex flex-col gap-8 items-center px-4">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`w-full max-w-6xl flex flex-col md:flex-row items-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } bg-white rounded-xl shadow-md overflow-hidden`}
          >
            <div className="md:w-1/2 w-full h-64 md:h-80">
              <img
                src={item.image}
                alt={item.heading1}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 w-full p-6">
              <h3 className="text-2xl font-bold mb-2  ">
                <span className="span1">{item.heading1} </span>
                <span className="span2">{item.heading2}</span>
              </h3>
              <p className="text-gray-600">{item.subHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
