import React from 'react';
import User from '../images/userAsset/User.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const HomePage = () => {
  return (
    <section id="Home">
      <div className="relative lg:flex-row md:flex-row flex flex-col sm:flex-col lg:w-[80%] lg:h-[38rem] md:w-[85%] md:h-[33rem] w-[100%] h-[34rem] sm:w-[100%] items-center justify-center md:gap-16 lg:ml-[12%] md:ml-[12%]">
        {/* left Section  {Text & button}*/}
        <div className="flex flex-col justify-center lg:w-[60%] lg:h-[90%] md:w-[62%] md:h-[95%] w-[100%] h-[50%] sm:w-[90%] sm:h-[34rem] lg:gap-6 md:gap-[6%] gap-[4%] sm:gap-[4%] lg:mt-[0%] md:mt-[2%] mt-[-15%] sm:mt-[2%] text-center">
          <div className="lg:text-4xl md:text-2xl text-3xl sm:text-3xl md:mt-[10%] mt-[1%] font-normal">
            Hi!! Divya Gupta
          </div>
          <div>
            <h2 className="lg:text-4xl md:text-2xl text-3xl sm:text-3xl">
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
              <div className="lg:text-4xl md:text-2xl text-3xl sm:text-3xl">
                Developer
              </div>
            </h2>
          </div>
          <div className="mt-0 lg:text-2xl md:text-xl text-base sm:text-lg w-[100%] md:w-[100%]">
            I'm a Software Developer and here is my portfolio website. Here
            you'll learn about my journey as a software developer.
          </div>
          <div className="flex lg:mt-[4%] md:mt-[4%] mt-[2%] sm:mt-[1%] md:items-center md:justify-center items-center">
            <Button
              className="bg-red-500 mx-auto lg:w-[18%] lg:h-[70%] md:w-[38%] w-[36%] h-[100%] sm:w-[20%] sm:h-[90%] lg:mt-[2%] sm:lg:mt-[0%] text-lg !shadow-red-100 cursor-pointer hover:scale-105"
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
        <div className=" relative lg:w-[30%] lg:h-[90%] md:w-[38%] md:h-[90%] w-[80%] sm:w-[40%] sm:mt-[0%] flex justify-center items-center">
          <div className="flex items-center mt-[15%] sm:mt-[5%] justify-center lg:w-[80%] lg:h-[70%] md:w-[100%] md:h-[100%] w-[100%] h-[90%] sm:w-[90%] sm:h-[90%]">
            <img
              className="w-[50%] h-[90%] lg:w-[90%] lg:h-[90%] md:w-[77%] md:h-[50%] sm:w-[65%] sm:h-[90%] items-center justify-center z-auto rounded-md lg:shadow-2xl md:shadow-xl shadow-3xl"
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
