import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaTwitter } from 'react-icons/fa';
import { BiSolidMessageAltDetail } from 'react-icons/bi';

function GitHubButton() {
  const handleClick = () => {
    window.open('https://github.com', '_blank'); // Replace with your desired GitHub URL
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
    window.open('https://www.linkedin.com', '_blank'); // Replace with your URL
  };

  return (
    <LinkedInIcon
      className="cursor-pointer !text-white !text-[32px] hover:!text-red-500 mt-1 -ml-1 transition-all duration-[0.4s]"
      onClick={handleClick}
    />
  );
}
const Footer = () => {
  return (
    <div className="relative -mt-40 bg-blue-900 p-20 w-[1600px] h-52">
      {/* footer wrapper */}
      <div className="flex gap-4 p-5 -mt-5 justify-between items-center">
        {/* footer faded text */}
        <div className="select-none absolute text-6xl left-0 bottom-1 text-gray-600 font-semibold ease-in-out duration-300">
          Divya Gupta
        </div>
        {/*link wrapper */}
        <div className="flex gap-5  ">
          <div>
            <a
              className="text-white text-3xl underline font-serif transition-all duration-600 hover:text-red-600"
              href="#Home"
            >
              Home
            </a>
          </div>
          <div>
            <a
              className="text-white text-3xl underline font-serif transition-all duration-600 hover:text-red-600"
              href="#Project"
            >
              Project
            </a>
          </div>
          <div>
            <a
              className="text-white text-3xl underline font-serif transition-all duration-600 hover:text-red-600"
              href="#Skills"
            >
              Skills
            </a>
          </div>
          <div>
            <a
              className="text-white text-3xl underline font-serif  transition-all duration-600 hover:text-red-600"
              href="#Contact Me"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* icron-wrapper */}
        <div className="flex gap-4 !mr-32 transition-all duration-600 hover:text-red-600 ">
          <LinkedInButton />
          <GitHubButton />
          <i>
            <FaTwitter className="cursor-pointer !text-white !text-[32px] mt-1 hover:!text-red-500 transition-all duration-[0.4s]" />
          </i>
          <i>
            <BiSolidMessageAltDetail className="cursor-pointer !text-white !text-[32px] mt-1 hover:!text-red-500 transition-all duration-[0.4s]" />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
