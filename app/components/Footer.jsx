import React from "react";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import logo from "../assets/svg/white.svg"
import Image from 'next/image'
const Footer = () => {
    const d = new Date();
  return (
    <div className="bg-gray-100 w-full py-4 overflow-hidden" id="contact">

      <div className="flex justify-center items-center gap-4 py-16">
        <a href="https://www.linkedin.com/in/faith-makinde-7556b3239/?originalSubdomain=ng"  target="_blank"
             className="text-black text-xl" >
            Faith Makinde
        {/* <Image src={logo} alt="white-logo" className="object-fit"/>  */}
        </a>
        <a
          href="https://twitter.com/f8_makinde"
          target="_blank"
          className="p-3 rounded-full hover:bg-yellow hover:border-yellow border-2 border-black"
       
        >
          <FaTwitter
            className="fill-black hover:fill-black cursor-pointer"
            size={25}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/faith-makinde-7556b3239/?originalSubdomain=ng"
          target="_blank"
         
          className="p-3 rounded-full border-2 hover:bg-yellow  hover:border-yellow border-black"
        >
          <FaLinkedinIn
            className="fill-black hover:fill-black cursor-pointer"
            size={25}
          />
        </a>
        <a
          href="https://www.instagram.com/f8_makinde/"
          target="_blank"
         
          className="p-3 rounded-full hover:bg-yellow hover:border-yellow border-2 border-black"
        >
          <FaInstagram
            className="fill-black hover:fill-black cursor-pointer"
            size={25}
          />
        </a>
        <a
          href="https://github.com/f8makinde"
          target="_blank"
        
          className="p-3 rounded-full hover:bg-yellow  hover:border-yellow border-2 border-black"
        >
          <FaGithub
            className="fill-black hover:fill-black cursor-pointer"
            size={25}
          />
        </a>
      </div>
      <p
        
        className="text-black/70 text-center font-secondary"
      >
        © {d.getFullYear()} Faith Makinde. All rights reserved. 
      </p>
    </div>
  );
};

export default Footer;
