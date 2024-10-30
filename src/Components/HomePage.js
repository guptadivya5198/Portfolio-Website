import React from 'react';
import User from '../images/userAsset/User.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const HomePage = () => {
  return (
    <section id="Home">
      <div className="border border-yellow-400 relative lg:flex-row md:flex-row flex flex-col lg:w-[80%] lg:h-[38rem] md:w-[85%] md:h-[33rem] w-[100%] h-[34rem] items-center justify-center md:gap-16 lg:ml-[7rem]">
        {/* left Section  {Text & button}*/}
        <div className=" border border-yellow-800 flex flex-col justify-center lg:w-[65%] lg:h-[90%] md:w-[62%] md:h-[95%] w-full h-[50%] lg:gap-6 md:gap-[6%] gap-[4%] lg:mt-1 md:mt-[2%] mt-[-10%] text-center">
          <div className="lg:text-3xl md:text-2xl text-3xl md:mt-[10%] mt-[15%] font-normal">
            Hi!! Divya Gupta
          </div>
          <div>
            <h2 className="lg:text-3xl md:text-2xl text-3xl">
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
              <div className="lg:text-3xl md:text-2xl text-3xl ">Developer</div>
            </h2>
          </div>
          <div className="mt-0 lg:text-xl md:text-xl text-base w-[100%] md:w-[100%]">
            I'm a Software Developer and here is my portfolio website. Here
            you'll learn about my journey as a software developer.
          </div>
          <div className="flex lg:mt-2 md:mt-[2%] mt-[5%] lg:mr-[82%] md:items-center md:justify-center items-center">
            <Button
              className="bg-red-500 mx-auto lg:w-[100%] lg:h-[90%] md:w-[38%] w-[30%] h-[50%] mt-[4%] text-lg !shadow-red-100 cursor-pointer hover:scale-105"
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
        <div className="border border-yellow-800 relative lg:w-[30%] lg:h-[90%] md:w-[38%] md:h-[90%] w-[80%] flex justify-center items-center">
          <div className="flex items-center mt-2 justify-center lg:w-[90%] lg:h-[80%] md:w-[100%] md:h-[100%]  w-[100%] h-[90%]">
            <img
              className="w-[50%] h-[90%] lg:w-[100%] lg:h-[90%] md:w-[77%] md:h-[50%] items-center justify-center z-[-15] rounded-md object-cover duration-5000 lg:shadow-xl md:shadow-xl shadow-xl"
              src={User}
              alt="6 not found "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
