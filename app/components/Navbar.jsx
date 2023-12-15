"use client"
import React from "react";
import { motion } from "framer-motion"
import Image from 'next/image'
import Hamburger from "../assets/svg/Hamburger.svg";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  function handleSetActive(to) {
    setActive(to);
  }
  return (
    <div className={`w-full mx-auto md:px-[50px] px-8 md:py-[22px] py-4 sticky top-0  left-0 z-50`}>
      <div className="md:flex xl:max-w-[1400px] px-10  mx-auto justify-between hidden">
        <motion.span className="flex font-primary text-2xl font-bold"   
          initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}>
          <p>Faith Makinde</p>
        </motion.span>
        <ul className="flex items-center font-secondaryBld text-lg font-bold">
          <motion.li
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
            className={`px-3 cursor-pointer ${
              active === "home" ? "border-b-2 border-purple-500" : ""
            }`}
          >
            <Link
              activeClass="active"
              smooth
              spy
              to="home"
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Home
            </Link>
          </motion.li>
          <motion.li
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
            className={`px-3 cursor-pointer ${
              active === "projects" ? "border-b-2 border-purple-500" : ""
            }`}
          >
            <Link
              activeClass="active"
              smooth
              spy
              to="projects"
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Projects
            </Link>
          </motion.li>
             <motion.li
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
            className={`px-3 cursor-pointer ${
              active === "about" ? "border-b-2 border-purple-500" : ""
            }`}
          >
            <Link
              activeClass="active"
              smooth
              spy
              to="about"
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              About Me
            </Link>
          </motion.li>
              <motion.li
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
            className={`px-3 cursor-pointer ${
              active === "contact" ? "border-b-2 border-purple-500" : ""
            }`}
          >
            <Link
              activeClass="active"
              smooth
              spy
              to="contact"
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Contact
            </Link>
          </motion.li>
        {/* <li className="px-3 cursor-pointer">
          <button onClick={toggleDarkMode}>
            {isDarkMode ?  <MdDarkMode size={20}/> : <MdLightMode size={20}/>}
      
          </button>
       
        </li> */}
        </ul>
      </div>
      <div className="md:hidden">
        <div
          onClick={() => setIsOpen((open) => !open)}
          className="flex justify-between items-center"
        >
          <span className="flex items-center gap-[2px] text-2xl font-bold">
            <p>Faith Makinde</p>
          </span>
          {isOpen ? (
            <div>
              <button className="text-2xl font-bold">X</button>
            </div>
          ) : (
            <button>
              <Image src={Hamburger} alt="hamburger-icon" />
            </button>
          )}
        </div>
        <div>
          {isOpen && (
            <ul className="flex font-secondaryBld py-2 w-full flex-col text-lg font-bold">
              <li
                className={`p-3 cursor-pointer ${
                  active === "home" ? "border-b-2 border-purple-500 w-[30%]" : ""
                }`}
              >
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="home"
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Home
                </Link>
              </li>
              <li
                className={`p-3 cursor-pointer ${
                  active === "projects"
                    ? "border-b-2 border-purple-500 w-[30%]"
                    : ""
                }`}
              >
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="projects"
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Projects
                </Link>
              </li>
              <li
                className={`p-3 cursor-pointer ${
                  active === "about" ? "border-b-2 border-purple-500 w-[30%]" : ""
                }`}
              >
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="about"
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  About Me
                </Link>
              </li>
              <li
                className={`p-3 cursor-pointer ${
                  active === "contact" ? "border-b-2 border-purple-500 w-[30%]" : ""
                }`}
              >
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="contact"
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
