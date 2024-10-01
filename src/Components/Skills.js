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
      <div>
        <div className="flex relative w-[1000px] h-[500px] items-center justify-center gap-[2rem] my-[10rem] mx-auto py-5">
          <div className="select-none absolute text-6xl mt-0 text-gray-200 font-semibold ease-in-out duration-300 bottom-[-14%] ml-[1372px] ">
            Skills
          </div>
          {/* left part */}
          <div className="w-[50%] flex flex-col">
            <h2 className="text-5xl font-semibold text-red-600">
              <span className="text-[90px]">M</span>e and
              <br />
              Mytech Stack
            </h2>
            <div className="w-[85%] mt-4 text-justify">
              <p className="my-3 mx-0">
                As a Passionate Frontend Developer, I specialize in crafting
                dynamic and responsive web applications using ReactJS and
                JavaScript. My focus is on delivering seamless user experiences,
                and I thrive on translating design concepts into functional
                code.
              </p>
              <p className="my-4 mx-0">
                Currently, I am expanding my skill set by diving into the MERN
                stack, which allows me to build full-stack applications and gain
                a comprehensive understanding of both frontend and backend
                development.
              </p>
              <p className="my-4 mx-0">
                To further strengthen my problem-solving skills, I am actively
                tackling data structures and algorithms challenges. This
                rigorous practice not only sharpens my analytical thinking but
                also prepares me for real-world coding scenarios.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-wrap w-[50%] relative gap-8 justify-center">
            <img class="blob-style" src={BlogImg} alt="1 not found " />
            <img class="skills-logo" src={HTML} alt="2 not found " />
            <img class="skills-logo" src={CSS} alt="3 not found " />
            <img class="skills-logo" src={Javascript} alt="4 not found " />
            <img class="skills-logo" src={react} alt="5 not found " />
            <img class="skills-logo" src={NodeJs} alt="6 not found " />
            <img class="skills-logo" src={Next} alt="7 not found " />
            <img class="skills-logo" src={Redux} alt="8 not found " />
            <img class="skills-logo" src={Tailwind} alt="9 not found " />
            <img class="skills-logo" src={Bootstrap} alt="10 not found " />
            <img class="skills-logo" src={MaterialUI} alt="11 not found " />
            <img class="skills-logo" src={Express} alt="12 not found " />
            <img class="skills-logo" src={Git} alt="13 not found " />
            <img class="skills-logo" src={Github} alt="14 not found " />
            <img class="skills-logo" src={Graphql} alt="15 not found " />
            <img class="skills-logo" src={MongoDB} alt="16 not found " />
            <img class="skills-logo" src={Vercel} alt="17 not found " />
            <img class="skills-logo" src={ChartJs} alt="18 not found " />
            <img class="skills-logo" src={Bash} alt="19 not found " />
            <img class="skills-logo" src={Docker} alt="20 not found " />
            <img class="skills-logo" src={K8s} alt="20 not found " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
