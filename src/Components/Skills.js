import React from 'react';
import BlogImg from '../images/userAsset/blob vector.png';
import HTML from '../images/stack/HTML.png';
import CSS from '../images/stack/CSS.png';
import Javascript from '../images/stack/Javascript.svg';
import react from '../images/stack/React.png';
import NodeJs from '../images/stack/NodeJs.svg';
import Next from '../images/stack/Next.svg';
import Redux from '../images/stack/Redux.svg';
import Tailwind from '../images/stack/Tailwind.png';
import Bootstrap from '../images/stack/Bootstrap.svg';
import MaterialUI from '../images/stack/MaterialUI.svg';
import Express from '../images/stack/Express.png';
import Git from '../images/stack/Git.svg';
import Github from '../images/stack/Github.svg';
import Graphql from '../images/stack/Graphql.svg';
import MongoDB from '../images/stack/MongoDB.svg';
import Vercel from '../images/stack/Vercel.svg';
import ChartJs from '../images/stack/ChartJs.svg';
import Bash from '../images/stack/Bash.svg';
import Docker from '../images/stack/Docker.svg';
import K8s from '../images/stack/K8s.svg';

const Skills = () => {
  return (
    <section id="Skills">
      <div className="relative w-full max-w-[1000px] mx-auto my-20 px-4 md:px-0">
        <div className="select-none absolute text-6xl text-gray-200 font-semibold bottom-[-3rem] right-0 md:bottom-[-3.5rem] md:right-[-3.5rem] pointer-events-none">
          Skills
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-[2rem] h-auto md:h-[545px]">
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold text-red-600 leading-none">
              <span className="inline-block align-bottom relative">
                <span className="text-6xl sm:text-8xl">M</span>
                <span className="text-4xl sm:text-5xl md:text-5xl relative top-1 ">
                  e and
                </span>
              </span>
              <br />
              Mytech Stack
            </h2>

            <div className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed">
              <p className="mb-3">
                As a Passionate Frontend Developer, I specialize in crafting
                dynamic and responsive web applications using ReactJS and
                JavaScript. My focus is on delivering seamless user experiences,
                and I thrive on translating design concepts into functional
                code.
              </p>
              <p className="mb-3">
                Currently, I am expanding my skill set by diving into the MERN
                stack, which allows me to build full‑stack applications and gain
                a comprehensive understanding of both frontend and backend
                development.
              </p>
              <p>
                To further strengthen my problem‑solving skills, I am actively
                tackling data structures and algorithm challenges. This rigorous
                practice not only sharpens my analytical thinking but also
                prepares me for real‑world coding scenarios.
              </p>
            </div>
          </div>

          {/* Right part */}
          <div className="w-full md:w-1/2 flex flex-wrap justify-center gap-6 md:gap-8">
            <img
              className="blob-style w-full md:w-auto"
              src={BlogImg}
              alt="Blob Illustration"
            />

            {[
              HTML,
              CSS,
              Javascript,
              react,
              NodeJs,
              Next,
              Redux,
              Tailwind,
              Bootstrap,
              MaterialUI,
              Express,
              Git,
              Github,
              Graphql,
              MongoDB,
              Vercel,
              ChartJs,
              Bash,
              Docker,
              K8s,
            ].map((Logo, i) => (
              <img
                key={i}
                src={Logo}
                alt=""
                className="skills-logo w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
