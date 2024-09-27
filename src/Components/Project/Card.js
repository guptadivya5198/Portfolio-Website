import React from 'react';

const Card = ({ i }) => {
  return (
    //4card  project Container main div
    <div>
      {/*1 card container */}
      <div>
        <div>01</div>
        {/* info */}
        <div></div>
        {/* icons/skills */}
        <div></div>
        {/* heading */}
        <div>{i.heading}</div>
        {/* subheading */}
        <div></div>
        {/* butto or github icon */}
        <div></div>
      </div>
    </div>
  );
};

export default Card;
