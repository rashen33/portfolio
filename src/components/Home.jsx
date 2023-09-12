import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#272829]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#FFCC70]">
          Rashen Fernando
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-white py-4 max-w-[700px]">
          I'm a full-stack developer building pretty digital products.Currently
          I'm focused on builidng responsive full-stack web applications.
        </p>

        <div>
          <Link to="work" spy={true} smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FFCC70] hover:border-[#FFCC70] hover:text-[#272829]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
