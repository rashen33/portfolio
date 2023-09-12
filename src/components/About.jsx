import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#272829] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FFCC70]">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Rashen, nice to meet you. Please take a look around.</p>
          </div>

          <div>
            <p>
              As a highly motivated and adaptable engineering graduate, I
              amdedicated to pushing the boundaries of technology and
              drivinginnovation. My commitment to staying at the forefront of
              the ever-evolving software engineering landscape ensures that I am
              not onlywell-versed in established industry standards but also
              eager to embraceemerging trends and breakthroughs. My unwavering
              dedication tocontinuous self-improvement, combined with a track
              record ofdelivering high-quality software solutions, makes me a
              valuable asset toany team.I am excited to contribute my skills,
              knowledge, and passionto drive the success of your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
