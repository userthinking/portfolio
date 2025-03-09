import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed top-0 z-10 flex w-full items-center justify-between border-b
    border-b-gray-700 bg-black/70 px-14 py-6 text-white backdrop-blur-md md:justify-evenly"
    >
      {/* Logo */}
      <a
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 
        font-bold text-2xl transition-all duration-300 hover:opacity-100"
        href="#home"
      >
        Siddu
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <li>
          <a
            href="#home"
            className="opacity-80 transition-all duration-300 hover:opacity-100"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tech"
            className="opacity-80 transition-all duration-300 hover:opacity-100"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="opacity-80 transition-all duration-300 hover:opacity-100"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="opacity-80 transition-all duration-300 hover:opacity-100"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Social Icons (Desktop) */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:opacity-100 hover:text-orange-400">
          <BsInstagram />
        </li>
        <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:opacity-100 hover:text-blue-500">
          <BsLinkedin />
        </li>
        <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:opacity-100 hover:text-sky-500">
          <BsTwitterX />
        </li>
        <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:opacity-100 hover:text-gray-500">
          <BsGithub />
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={menuOpen} className="block md:hidden text-4xl">
        {isOpen ? <BiX /> : <BiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start 
          justify-start gap-10 border-l border-gray-800 bg-black/80 p-10 md:hidden"
        >
          <ul className="flex flex-col gap-8">
            <li>
              <a
                href="#home"
                onClick={menuOpen}
                className="opacity-80 transition-all duration-300 hover:opacity-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tech"
                onClick={menuOpen}
                className="opacity-80 transition-all duration-300 hover:opacity-100"
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={menuOpen}
                className="opacity-80 transition-all duration-300 hover:opacity-100"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={menuOpen}
                className="opacity-80 transition-all duration-300 hover:opacity-100"
              >
                Contact
              </a>
            </li>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:opacity-100 hover:text-orange-400">
              <BsInstagram />
            </li>
            <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:opacity-100 hover:text-blue-500">
              <BsLinkedin />
            </li>
            <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:opacity-100 hover:text-sky-500">
              <BsTwitterX />
            </li>
            <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:opacity-100 hover:text-gray-500">
              <BsGithub />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
