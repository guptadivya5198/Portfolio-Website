import React from 'react';
import Card from './Card';
import bgimg1 from '../../images/projects/Project 1.png';
// import bgimg2 from '../../images/projects/Project 2.png';
// import bgimg3 from '../../images/projects/Project 3.png';
// import bgimg5 from '../../images/projects/project 5.png';

const Projects = () => {
  return (
    <div className="bg-gray-200 mt-16">
      <div>
        <h2 className="text-red-600  font-semibold text-6xl text-center">
          Projects
        </h2>
      </div>
      <div>
        {[
          {
            projectnum: '01',
            heading: 'Heading 1',
            subHeading: 'subheading 1...',
            image: <img src={bgimg1} />,
          },
          // {
          //   project: '02',
          //   heading: 'Heading 2',
          //   subHeading: 'subheading 2...',
          //   // image: <img src={bgimg2} />,
          // },
          // {
          //   project: '03',
          //   heading: 'Heading 3',
          //   subHeading: 'subheading 3...',
          //   // image: <img src={bgimg3} />,
          // },
          // {
          //   project: '04',
          //   heading: 'Heading 4',
          //   subHeading: 'subheading 4...',
          //   // image: <img src={bgimg5} />,
          // },
        ].map((i) => {
          return <Card i={i} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
