import React from 'react';
import Card from './Card';

const Projects = () => {
  return (
    <div>
      <div>
        <h2>Projects</h2>
      </div>
      <div>
        {[
          {
            heading: 'Heading 1',
            image: 'url',
            button: 'btn 1',
          },
          {
            heading: 'Heading 2',
            image: 'url',
            button: 'btn 2',
          },
          {
            heading: 'Heading 3',
            image: 'url',
            button: 'btn 3',
          },
          {
            heading: 'Heading 4',
            image: 'url',
            button: 'btn 4',
          },
        ].map((i) => {
          return <Card i={i} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
