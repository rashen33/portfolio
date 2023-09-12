import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#272829] text-[#FFF6E0]">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-[#FFCC70]">Rashen Fernando .</h1>
      </div>

      {/* Menue */}
      <div className="hedden md:flex">
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#272829] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-8px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/rashen-fernando-91a965214/"
              className="flex justify-between items-center w-full text-while"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-8px] duration-300 bg-[#333]">
            <a
              href="https://github.com/rashen33"
              className="flex justify-between items-center w-full text-while"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-8px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto:rashen598@gmail.com?subject = Feedback&body = Message"
              className="flex justify-between items-center w-full text-while"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-8px] duration-300 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-while"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
