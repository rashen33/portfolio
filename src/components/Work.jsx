import React from "react";
import EduSync from "../assets/EduSync.jpeg";
import ThogaKade from "../assets/ThogaKade.PNG";
import SkyCast from "../assets/SkyCast.PNG";
import SimonGame from "../assets/SimonGame.PNG";
import DrumKit from "../assets/DrumKit.PNG";
import SmartHome from '../assets/SmartHomeController.PNG'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-white bg-[#272829] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-[#FFCC70]">
            Work
          </p>
          <p className="py-6">Check out my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${EduSync})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Student Management System
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg  px-4 py-3 m-2 bg-[#FFF6E0] text-[#272829] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ThogaKade})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Inventery Mangement System
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg  px-4 py-3 m-2 bg-[#FFF6E0] text-[#272829] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${SkyCast})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather Application
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg  px-4 py-3 m-2 bg-[#FFF6E0] text-[#272829] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${SimonGame})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Simon Game
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg  px-4 py-3 m-2 bg-[#FFF6E0] text-[#272829] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${DrumKit})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Drum Kit
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg  px-4 py-3 m-2 bg-[#FFF6E0] text-[#272829] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${SmartHome})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Smart Home Controller
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg  px-4 py-3 m-2 bg-[#FFF6E0] text-[#272829] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Work;
