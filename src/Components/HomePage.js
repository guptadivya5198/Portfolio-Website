import React from 'react';
import dots from '../images/userAsset/dots.png';
import cube from '../images/userAsset/cube.png';
import circle from '../images/userAsset/circle.png';
import zigzags from '../images/userAsset/zigzags.png';
import plus from '../images/userAsset/plus.png';
import User from '../images/userAsset/User.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const HomePage = () => {
  return (
    <section id="Home">
      <div className="flex flex-col lg:flex-row md:flex-row relative lg:w-[1200px] lg:h-[490px] md:w-[800px] md:h-[240px] sm:w-[300px] sm:h-[300px] items-center justify-center gap-16 md:gap-24 lg:my-2 sm:my-12 md:my-12 lg:mx-64 md:mx-auto py-0 px-4 sm:px-6 md:px-10 ">
        {/* left Section  {Text & button}*/}
        <div className="flex flex-col justify-center sm:w-full md:w-[80%] md:h-[50%] lg:w-[80%] lg:gap-6 md:gap-2 md:mt-8 sm:gap-8 text-center md:text-left ">
          <div className=" sm:text-3xl md:text-xl lg:text-2xl font-normal">
            Hi!! Divya Gupta
          </div>
          <div>
            <h2 className="lg:text-3xl sm:text-4xl md:text-2xl">
              I'm a{' '}
              <span className="text-red-700 hover:scale-90 duration-300 ">
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
              <div className="lg:text-3xl sm:text-4xl md:text-2xl">
                Developer
              </div>
            </h2>
          </div>
          <div className="mt-4 sm:text-base md:text-lg lg:text-xl sm:w-[100%] md:w-[80%]">
            I'm a Software Developer and here is my portfolio website. Here
            you'll learn about my journey as a software developer.
          </div>
          <div className="flex lg:mt-[1%] md:mt-4 sm:mt-10 lg:mr-[82%] md:items-center md:justify-center sm:items-center">
            <Button
              className="!bg-red-500 lg:w-[100%] md:[60%] md:w[40%] lg:px-4 md:px-4 sm:px-2 lg:py-8 md:py-6 sm:py-4 !shadow-md !shadow-purple-950 !text-lg font-semibold cursor-pointer transition-all duration-75 border-3 border-transparent hover:scale-105"
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
        <div className="relative  mt-6 md:mt-0 w-full md:w-[60%] lg:w-[50%] sm:w-[80%] flex justify-center items-center">
          <div className="absolute size-16 z-10 bottom-0.5 right-0 w-8 h-8 md:w-12 md:h-12  animate-pulse duration-1000 infinite">
            <img src={dots} alt="1 not found " />
          </div>
          <div className="absolute z-8 right-6 top-4  w-8 h-8 md:w-12 md:h-12  animate-spin duration-1000 infinite rotate-45">
            <img src={cube} alt="2 not found " />
          </div>
          <div className="absolute z-9 bottom-2 left-7  w-8 h-16 md:w-12 md:h-12 animate-bounce rounded-full duration-1000 infinite">
            <img src={circle} alt="3 not found " />
          </div>
          <div className="absolute z-9 top-7 left-2 animate-zigzag w-12 h-12 md:w-16 md:h-16 duration-1000 infinite">
            <img src={zigzags} alt="4 not found " />
          </div>
          <div className="absolute z-9 top-5 left-[45%] ease-in  w-8 h-8 md:w-10 md:h-10 animate-bounce duration-1000 infinite ">
            <img src={plus} alt="5 not found " />
          </div>
          <div className="">
            <img
              className="lg:w-[700px] lg:h-[380px] sm:w-[250px] sm:h-[130px] md:w-[330px] md:h-[380px] p-12 transition-all z-[-9] animate-scaleInWithGrayscale object-cover duration-5000 ease-in-out shadow-lg"
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
