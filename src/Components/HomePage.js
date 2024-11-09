import React from 'react';
import User from '../images/userAsset/User.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const HomePage = () => {
  return (
    <section id="Home">
      <div className="flex-wrap relative md:flex-row flex flex-col md:w-[75%] md:h-[39rem] w-[100%] h-[34rem] items-center justify-center md:gap-13 md:ml-[12%]">
        {/* left Section  {Text & button}*/}
        <div className="flex flex-col justify-center md:w-[62%] md:h-[95%] w-[100%] h-[50%] md:gap-[5%] gap-[4%] md:mt-[-2%] text-center">
          <div className="md:text-3xl text-3xl md:mt-[8%] mt-[1%] font-normal">
            Hii!! Divya Gupta
          </div>
          <div>
            <h2 className="md:text-4xl text-3xl">
              I'm a{' '}
              <span className="text-red-700 hover:scale-90 duration-300">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Full Stack',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"

                    'Web',
                    1000,

                    'Frontend ',
                    1000,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </span>{' '}
              <div className="md:text-3xl text-3xl">Developer</div>
            </h2>
          </div>
          <div className="mt-0 md:text-2xl text-sm w-[100%] md:w-[100%]">
            I'm a Software Developer and here is my portfolio website. Here
            you'll learn about my journey as a software developer.
          </div>
          <div className="flex md:mt-[4%] mt-[2%] md:items-center md:justify-center items-center">
            <Button
              className="bg-red-500 mx-auto md:w-[25%] w-[36%] h-[100%] text-lg !shadow-red-100 cursor-pointer hover:scale-105"
              variant="contained"
              SendIcon={<SendIcon />}
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/divya-gupta-6bb500302/',
                  '_blank'
                )
              }
            >
              Hire Me
            </Button>
          </div>
        </div>
        {/* Right Section */}
        <div className=" relative md:w-[38%] md:h-[90%] w-[80%] flex justify-center items-center">
          <div className="flex items-center mt-[8%] justify-center">
            <img
              className="w-[50%] h-[90%] md:w-[55%] md:h-[50%] items-center justify-center z-auto rounded-md"
              src={User}
              alt="6 not found"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
