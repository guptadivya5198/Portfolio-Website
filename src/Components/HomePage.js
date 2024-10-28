import React from 'react';
import User from '../images/userAsset/User.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const HomePage = () => {
  return (
    <section id="Home">
      <div className="flex flex-col lg:flex-row md:flex-row relative lg:w-[80rem] lg:h-[37rem] md:w-[800px] md:h-[240px] w-[300px] h-[300px] items-center justify-center md:gap-24 lg:my-6 my-12 md:my-12 lg:mx-auto md:mx-auto lg:py-4 lg:px-7 px-6 md:px-6">
        {/* left Section  {Text & button}*/}
        <div className="flex flex-col justify-center w-full h-[50%] lg:w-[65%] lg:h-[90%] md:w-[90%] md:h-[93%]  lg:gap-6 md:gap-0 gap-8 lg:mt-1 md:mt-2 text-center md:text-left">
          <div className="lg:text-3xl md:text-lg text-3xl font-normal">
            Hi!! Divya Gupta
          </div>
          <div>
            <h2 className="lg:text-3xl md:text-lg text-3xl">
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
              <div className="lg:text-3xl md:text-lg text-3xl ">Developer</div>
            </h2>
          </div>
          <div className="mt-0 lg:text-xl md:text-base text-base w-[100%] md:w-[100%]">
            I'm a Software Developer and here is my portfolio website. Here
            you'll learn about my journey as a software developer.
          </div>
          <div className="flex lg:mt-2 md:mt-0 mt-10 lg:mr-[82%] md:items-center md:justify-center items-center">
            <Button
              className="bg-red-500 mx-auto w-[30%] h-9 lg:w-[100%] lg:h-[90%] md:[40%] w-[26%] h-[90%] xs:w-[30%] xs:h-[50%] lg:px-2 md:px-2 lg:py-2 md:py-2 py-1 mt-3 text-base !shadow-red-200 font-semibold cursor-pointer transition-all duration-75 border-3 border-transparent hover:scale-105"
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
        <div className="relative mt-1 w-full lg:w-[30%] lg:h-[90%] md:w-[60%] md:h-[92%] w-[80%] flex justify-center items-center">
          <div className="flex items-center mt-3 justify-center w-[100%] h-[90%] lg:w-[90%] lg:h-[80%] lg:mt-0 md:w-[100%] md:h-[100%] w-[60%] h-[90%] ">
            <img
              className="w-[50%] h-[90%] lg:w-[100%] lg:h-[90%] md:w-[100%] md:h-[100%] items-center justify-center mx-auto w-[60%] h-[100%] p-5 lg:p-9 md:p-2 transition-all z-[-12] rounded-md animate-scaleInWithGrayscale object-cover duration-5000 shadow-lg"
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
