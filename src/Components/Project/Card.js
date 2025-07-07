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
    );
  };

  return (
    <GitHubIcon
      className="cursor-pointer !text-white md:!text-[32px] md:mt-1 hover:!text-red-500 transition-all duration-[0.4s]"
      onClick={handleClick}
    />
  );
}
function LinkedInButton() {
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/divya-gupta-6bb500302/', '_blank');
  };

  return (
    <LinkedInIcon
      className="cursor-pointer !text-white md:!text-[32px] hover:!text-red-500 md:mt-1 md:-ml-1 transition-all duration-[0.4s]"
      onClick={handleClick}
    />
  );
}

const Card = ({ i, index }) => {
  const transformClass = index % 2 === 0 ? '-translate-x-13' : 'translate-x-64';

  return (
    <div className="border border-red-800 relative md:w-[65%] md:h-[370px] md:mt-8 md:ml-60 ">
      <div
        className={` md:w-[80%] rounded-md md:h-[364px] flex shadow-lg bg-cover bg-center shadow-gray-900 transition-transform duration-300 ${transformClass}`}
      >
        <div className="cardshadow  md:w-[100%] md:h-[362px]">{i.image}</div>
        <div className="grid border border-red-600 absolute text-white md:p-[0rem] z-5 md:gap-[1rem] md:top-[69px] md:left-[6%]">
          <div className="flex md:w-[40%] md:h-[68%] md:gap-[0.2em] flex-wrap ">
            <img
              className="md:w-[14%] md:h-[48%] w-[10%] h-[26%]"
              src={HTML}
              alt="not found 1"
            />
            <img
              className="md:w-[14%] md:h-[48%] w-[10%] h-[26%]"
              src={CSS}
              alt="not found 2"
            />
            <img
              className="md:w-[14%] md:h-[48%] w-[10%] h-[26%]"
              src={Javascript}
              alt="not found 3"
            />
            <img
              className="md:w-[14%] md:h-[48%] w-[10%] h-[26%] md:mt-2"
              src={NodeJs}
              alt="not found 4"
            />
            <img
              className="md:w-[14%] md:h-[48%] w-[10%] h-[26%] md:mt-1"
              src={NextJsCircle}
              alt="not found 5"
            />
            <img
              className="md:w-[14%] md:h-[48%] w-[10%] h-[26%] md:mt-2"
              src={Tailwind}
              alt="not found 6"
            />
            <img
              className="md:w-[14%] md:h-[48%] w-[10%] h-[26%] "
              src={Express}
              alt="not found 7"
            />
            <img
              className="md:w-[14%] md:h-[48%] w-[10%] h-[26%]"
              src={MongoDB}
              alt="not found 8"
            />
            <img
              className="md:w-[15%] md:h-[48%] w-[10%] h-[26%]"
              src={Redux}
              alt="not found 9"
            />
            <img
              className="md:w-[19%] md:h-[65%] w-[10%] h-[26%]"
              src={Vercel}
              alt="not found 10"
            />
          </div>
          <div className="md:text-2xl md:font-bold md:-mt-10 md:leading-[45px]">
            {i.heading}
          </div>
          <div className="md:w-[70%] md:-mt-[15px] text-wrap text-base italic">
            {i.subHeading}
          </div>
          <div className="flex md:gap-[0.9rem] items-center">
            <div>
              <Button
                className=" !bg-red-500 md:py-2 md:px-1 md:!mt-1 !shadow-sm !shadow-white md:!text-xs font-semibold cursor-pointer transition-all duration-75 border-2 border-transparent hover:scale-105"
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
  );
};

export default Card;
