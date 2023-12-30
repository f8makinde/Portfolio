"use client"
import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import Show from "./Show";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    const d = new Date();
  return (
    <div className="bg-gray-100 w-full py-4 px-4 overflow-hidden" id="contact">

      <div className="flex justify-center items-center md:gap-4 gap-2 md:py-16 py-12">
        <Show>
        <a href="https://www.linkedin.com/in/faith-makinde-7556b3239/?originalSubdomain=ng"  target="_blank"
             className="text-black text-xl inline-block whitespace-no-wrap" >
            Faith Makinde
        </a>
        </Show>
       
        <a
          href="https://twitter.com/f8_makinde"
          target="_blank"
          className="md:p-3 p-2 rounded-full hover:bg-purple-500 hover:border-purple-800 border-2 border-black"
       
        >
           <Show>
          <FaXTwitter
            className="fill-black hover:fill-white
             focus:fill-white  cursor-pointer"
            size={20}
          />
          </Show>
        </a>
        
      
        <a
          href="https://www.linkedin.com/in/faith-makinde-7556b3239/?originalSubdomain=ng"
          target="_blank"
         
          className="md:p-3 p-2  rounded-full border-2 hover:bg-purple-500 hover:border-purple-800 border-black"
        >
            <Show>
          <FaLinkedinIn
            className="fill-black  hover:fill-white
            focus:fill-white  cursor-pointer"
            size={20}
          />
             </Show>
        </a>
     
       
        <a
          href="https://www.instagram.com/f8_makinde/"
          target="_blank"
          className="md:p-3 p-2  rounded-full border-2 hover:bg-purple-500 hover:border-purple-800 border-black"
        >
           <Show>
          <FaInstagram
            className="fill-black  hover:fill-white
            focus:fill-white  cursor-pointer"
            size={20}
          />
           </Show>
        </a>
       
       
        <a
          href="https://github.com/f8makinde"
          target="_blank"
          className="md:p-3 p-2  rounded-full border-2 hover:bg-purple-500 hover:border-purple-800 border-black"
        >
           <Show>
          <FaGithub
            className="fill-black  hover:fill-white
            focus:fill-white  cursor-pointer"
            size={20}
          />
          </Show>
        </a>
      </div>

      <p
        
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-transparent bg-clip-text hover:text-purple-500 text-center font-secondary"
      >
       
        © {d.getFullYear()} Faith Makinde. All rights reserved. 
     
      </p>
   
    </div>
  );
};

export default Footer;
