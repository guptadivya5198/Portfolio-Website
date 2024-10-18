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
    window.open(
      'https://github.com/guptadivya5198/Portfolio-Website',
      '_blank'
    ); // Replace with your desired GitHub URL
  };

  return (
    <GitHubIcon
      className="cursor-pointer !text-white !text-[32px] mt-1 hover:!text-red-500 transition-all duration-[0.4s]"
      onClick={handleClick}
    />
  );
}
function LinkedInButton() {
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/divya-gupta-6bb500302/', '_blank'); // Replace with your URL
  };

  return (
    <LinkedInIcon
      className="cursor-pointer !text-white !text-[32px] hover:!text-red-500 mt-1 -ml-1 transition-all duration-[0.4s]"
      onClick={handleClick}
    />
  );
}

const Card = ({ i, index }) => {
  const transformClass = index % 2 === 0 ? '-translate-x-32' : 'translate-x-32';
  const cardNumberPosition = index % 2 === 0 ? 'right-5 top-5' : 'left-5 top-5';

  return (
    //4card  project Container main div
    <div className="max-w-[1000px] mx-auto -my-20 -py-2 px-0 flex flex-col gap-[120px]">
      {/*1 card container */}
      <div className="w-[90%] h-[545px] relative">
        <div
          className={`absolute shadow-lg bg-cover bg-center shadow-gray-900 transition-transform duration-300 ${transformClass}`}
        >
          <div className="cardshadow ">{i.image}</div>
          {/* Card Number  */}
          <div
            classname={`absolute z-10 text-9xl font-light text-white ${cardNumberPosition}`}
          >
            {i.projectnum}
          </div>
          {/* project content */}
          <div className="flex flex-col absolute text-white p-[1em] bottom-[23%] z-5 gap-[1em] transition-all duration-[0.4s] top-[79px] left-[7%]">
            {/* icons/skills */}
            <div className="flex w-[60%] gap-[0.4em] flex-wrap ">
              <img className="w-[38px] h-[40px]" src={HTML} alt="not found 1" />
              <img className="w-[38px] h-[40px]" src={CSS} alt="not found 2" />
              <img
                className="w-[38px] h-[40px]"
                src={Javascript}
                alt="not found 3"
              />
              <img
                className="w-[48px] h-[40px] "
                src={NodeJs}
                alt="not found 4"
              />
              <img
                className="w-[40px] h-[40px]"
                src={NextJsCircle}
                alt="not found 5"
              />
              <img
                className="w-[44px] h-[40px]"
                src={Tailwind}
                alt="not found 6"
              />
              <img
                className="w-[40px] h-[40px]"
                src={Express}
                alt="not found 7"
              />
              <img
                className="w-[40px] h-[40px]"
                src={MongoDB}
                alt="not found 8"
              />
              <img
                className="w-[40px] h-[40px]"
                src={Redux}
                alt="not found 9"
              />
              <img
                className="w-[90px] h-[90px] -mt-[22px]"
                src={Vercel}
                alt="not found 10"
              />
            </div>
            {/* heading */}
            <div className="text-2xl font-bold -mt-10 leading-[45px]">
              {i.heading}
            </div>
            {/* subheading */}
            <div className="w-[70%] -mt-[15px] text-wrap text-base italic">
              {i.subHeading}
            </div>
            {/* butto or github icon */}
            <div className="flex gap-[0.9rem]  items-center">
              <div>
                <Button
                  className=" !bg-red-500 px-2 py-4 !mt-1 !shadow-md !shadow-purple-950 !text-sm font-semibold cursor-pointer transition-all duration-75 border-2 border-transparent hover:scale-105 "
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Read More
                </Button>
              </div>
              <GitHubButton />
              <LinkedInButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
