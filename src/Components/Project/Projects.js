import React from 'react';
import Card from './Card';
import bgimg1 from '../../images/projects/Project 1.png';
import bgimg2 from '../../images/projects/Project 4.png';
import bgimg3 from '../../images/projects/Project 3.png';
import bgimg5 from '../../images/projects/project 5.png';

const Projects = () => {
  return (
    <section id="Project">
      <div className="bg-gray-200 mt-4 lg:mt-6 md:mt-2 sm:mt-2 border border-red-500">
        <div>
          <h2 className="text-red-600 mb-[7rem] mt-6 font-semibold text-6xl text-center ">
            Projects
          </h2>
        </div>
        <div>
          {[
            {
              projectnum: '01',
              heading: 'Ecommerce Website ',
              subHeading:
                'Shopping with personalized recommendations,secure payments,and fast delivery.',
              image: <img src={bgimg1} />,
            },
            {
              projectnum: '02',
              heading: 'Testimonial Slider',
              subHeading:
                'Aims to enhance user engagement by presenting testimonials in an interactive & visually appealing slider format',
              image: <img src={bgimg2} />,
              // className: 'ml-[120px]',
            },
            {
              projectnum: '03',
              heading: 'Random Gif Generator',
              subHeading:
                'Users can search for GIFs based on keywords, allowing for personalized content discovery.',
              image: <img src={bgimg3} />,
            },
            {
              projectnum: '04',
              heading: 'Top Courses',
              subHeading:
                'Each course is designed to equip learners with the skills needed to thrive in the tech industry',
              image: <img src={bgimg5} />,
            },
          ].map((i, index) => {
            return <Card i={i} key={index} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
