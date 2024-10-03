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
      <div className="flex relative w-[1000px] h-[490px] items-center justify-center gap-[5rem] my-[4rem] mx-[16rem] py-0 px-[1rem] pb-20">
        {/* faded text */}
        <div className="select-none absolute text-5xl mt-1 text-gray-200 font-semibold ease-in-out duration-300 bottom-[-13%] ml-[700px] -mr-96">
          Divya Gupta
        </div>
        {/* left Section */}
        <div className="flex flex-col justify-center gap-8 ">
          <div className="text-3xl font-normal sm:text-6xl md:text-3xl">
            Hi!! Divya Gupta
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-4xl">
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
              <div>Developer</div>
            </h2>
          </div>
          <div className="mt-4 w-[74%] font-sm text-xl">
            I'm a software developer and here is my portfolio website. Here
            you'll learn about my journey as a software developer.
          </div>
          <Button
            className="w-fit !bg-red-500 px-4 py-8 !mt-4 !shadow-md !shadow-purple-950 !text-lg font-semibold cursor-pointer transition-all duration-75 border-3 border-transparent hover:scale-105 "
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
        {/* Right Section */}
        <div className="relative">
          <div className="absolute size-16 z-10 bottom-0.5 right-0 animate-pulse duration-1000 infinite">
            <img src={dots} alt="1 not found " />
          </div>
          <div className="absolute z-8 right-6 top-4 animate-spin duration-1000 infinite rotate-45">
            <img src={cube} alt="2 not found " />
          </div>
          <div className="absolute z-9 bottom-2 left-7 animate-bounce h-16 w-8 rounded-full duration-1000 infinite">
            <img src={circle} alt="3 not found " />
          </div>
          <div className="absolute z-9 top-7 left-2 animate-zigzag h-10 w-20 duration-1000 infinite">
            <img src={zigzags} alt="4 not found " />
          </div>
          <div className="absolute z-9 top-5 left-[45%] ease-in animate-bounce duration-1000 infinite ">
            <img src={plus} alt="5 not found " />
          </div>
          <div className="">
            <img
              className="w-[700px] h-[380px] p-12 transition-all  z-[-9] animate-scaleInWithGrayscale duration-5000 ease-in-out shadow-lg"
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
