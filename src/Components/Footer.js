import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaTwitter } from 'react-icons/fa';
import { BiSolidMessageAltDetail } from 'react-icons/bi';

function GitHubButton() {
  return (
    <GitHubIcon
      className="cursor-pointer text-white text-[28px] sm:text-[32px] mt-1 hover:text-red-500 transition-all duration-300"
      onClick={() =>
        window.open(
          'https://github.com/guptadivya5198/Portfolio-Website',
          '_blank'
        )
      }
    />
  );
}

function LinkedInButton() {
  return (
    <LinkedInIcon
      className="cursor-pointer text-white text-[28px] sm:text-[32px] mt-1 hover:text-red-500 transition-all duration-300"
      onClick={() =>
        window.open(
          'https://www.linkedin.com/in/divya-gupta-6bb500302/',
          '_blank'
        )
      }
    />
  );
}

const Footer = () => {
  return (
    <div className=" w-full p-4 bg-blue-900 h-32 mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
        {['Home', 'Project', 'Skills', 'Contact Me'].map((item, i) => (
          <a
            key={i}
            href={`#${item}`}
            className="text-white text-lg sm:text-xl underline font-serif hover:text-red-500 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <LinkedInButton />
        <GitHubButton />
        <FaTwitter
          className="cursor-pointer text-white text-[28px] sm:text-[32px] mt-1 hover:text-red-500 transition-all duration-300"
          onClick={() => window.open('https://twitter.com/', '_blank')}
        />
        <BiSolidMessageAltDetail className="cursor-pointer text-white text-[28px] sm:text-[32px] mt-1 hover:text-red-500 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Footer;
