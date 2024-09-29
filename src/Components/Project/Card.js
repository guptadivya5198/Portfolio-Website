import React from 'react';
// import HTML from '../../images/projects/Project1.png';
import HTML from '../../images/stack/HTML.png';
import CSS from '../../images/stack/CSS.png';
import Javascript from '../../images/stack/Javascript.svg';
import Express from '../../images/stack/Express.png';
import NextJsCircle from '../../images/stack/NextJsCircle.png';
import Tailwind from '../../images/stack/Tailwind.png';
import NodeJs from '../../images/stack/NodeJs.svg';
import MongoDB from '../../images/stack/MongoDB.svg';
import Redux from '../../images/stack/Redux.svg';
import Vercel from '../../images/stack/Vercel.svg';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function GitHubButton() {
  const handleClick = () => {
    window.open('https://github.com', '_blank'); // Replace with your desired GitHub URL
  };

  return <GitHubIcon onClick={handleClick} />;
}
function LinkedInButton() {
  const handleClick = () => {
    window.open('https://www.linkedin.com', '_blank'); // Replace with your URL
  };

  return <LinkedInIcon onClick={handleClick} />;
}

const Card = ({ i }) => {
  return (
    //4card  project Container main div
    <div className="max-w-[1000px] mx-auto my-0 py-12 px-0 flex flex-col gap-[120px]">
      {/*1 card container */}
      <div className="w-[90%] h-[550px] bg-cover relative ">
        <div className="absolute shadow-lg shadow-gray-900 ">
          <div class="cardshadow">{i.image}</div>
          {/* Card Number  */}
          <div>{i.projectnum}</div>
          {/* info */}
          <div></div>
          {/* icons/skills */}
          <div>
            <img src={HTML} alt="not found 1" />
            <img src={CSS} alt="not found 2" />
            <img src={Javascript} alt="not found 3" />
            <img src={Express} alt="not found 4" />
            <img src={NextJsCircle} alt="not found 5" />
            <img src={Tailwind} alt="not found 6" />
            <img src={NodeJs} alt="not found 7" />
            <img src={MongoDB} alt="not found 8" />
            <img src={Redux} alt="not found 9" />
            <img src={Vercel} alt="not found 10" />
          </div>
          {/* heading */}
          <div>{i.heading}</div>
          {/* subheading */}
          <div>{i.subHeading}</div>
          {/* butto or github icon */}
          <div>
            <div>
              <Button
                className="w-fit !bg-red-500 px-4 py-8 !mt-4 !shadow-md !shadow-purple-950 !text-lg font-semibold cursor-pointer transition-all duration-75 border-3 border-transparent hover:scale-105 "
                variant="contained"
                endIcon={<SendIcon />}
              >
                Read More
              </Button>
            </div>
            <GitHubButton />
            <LinkedInButton className="!bg-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
