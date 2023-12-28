"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import mypics from "../assets/img/myPics.png"
import { FaRegFilePdf } from "react-icons/fa6"
import chatIcon from "../assets/svg/Vector (4).svg";
const Hero = () => {
  const resume  = "https://drive.google.com/file/d/1r0v-3UT8bgQPOVqYPq-Rmy-FFE5fBuQt/view?usp=sharing"

  const text2 = "With a passion for solving complex problems and  a commitment".split(" ");
  const text3 = " to staying up-to-date with the latest technologies".split(" ")
  return (
    <div className='w-full  my-8' id='home'>
       <div className='lg:max-w-[1400px] mx-auto md:px-[50px] px-8'>
          <div className='flex lg:flex-row flex-col gap-8 justify-between'>
            <div>
                <motion.h3 
                 initial={{ opacity: 0, y: -50 }} 
                 animate={{ opacity: 1, y: 0 }}    
                 transition={{ duration: 1 }} 
      className='text-xl  sm:text-left text-center text-purple-500'>Hello, I&apos;m</motion.h3>
          <motion.h1  
              initial={{ opacity: 0, y: 50 }}  
              animate={{ opacity: 1, y: 0 }}   
              transition={{ duration: 1 }}  className="lg:text-[100px] md:text-[80px] sm:text-[75px] text-6xl lg:leading-[7rem] md:leading-[5rem] font-extrabold text-black sm:text-left text-center font-primary">
              Faith <br /> Makinde <br />
            </motion.h1>
            <motion.h2  
           initial={{ opacity: 0, x: -100 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: 100 }}
           transition={{ duration: 0.45 }}
       className='text-3xl text-black/80 font-medium sm:text-left text-center'>
            Frontend Developer
            </motion.h2>
            <motion.p  initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 100 }}
           transition={{ duration: 0.5 }} className="font-medium text-xl sm:text-left text-center">
           <span>I bring a unique perspective to the industry.</span>
            </motion.p>
            <motion.p   initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 100 }}
           transition={{ duration: 0.65 }} className="font-medium text-xl sm:text-left text-center">
           <span>With a passion for solving complex problems and  a commitment</span>
            </motion.p>
            <motion.p   initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 100 }}
           transition={{ duration: 0.75 }}
            className="font-medium text-xl sm:text-left text-center">
          <span>to staying up-to-date with the latest technologies</span>
            </motion.p>
           <div className='flex items-center gap-6'>
          <motion.a 
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.25 }}
           href='#contact'
            className="relative my-4 flex justify-center items-center w-[176px] px-4 py-4 font-medium group cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full transition rounded-lg duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full rounded-lg bg-yellow border-2 border-black group-hover:bg-yellow"></span>
              <motion.span initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 100 }}
           transition={{ duration: 0.5 }} className="relative text-white flex items-center text-lg font-secondaryBld font-bold gap-3">
                Let’s Talk
                <Image src={chatIcon} alt="chat-icon"  className='text-white'/>
              </motion.span>
          </motion.a>
          <motion.a 
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.25 }}
                 href={resume}
             target="_blank" rel="noopener noreferrer"
            className="relative my-4 flex justify-center items-center w-[176px] px-4 py-4 font-medium group cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full transition rounded-lg duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-500 hover:bg-purple-400 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full rounded-lg bg-yellow border-2 border-black/10 group-hover:bg-yellow"></span>
              <motion.span initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 100 }}
           transition={{ duration: 0.5 }}  className="relative text-white flex items-center text-lg font-secondaryBld font-bold gap-3">
               Resume
               <FaRegFilePdf size={25} fill='white'/>
              </motion.span>
          </motion.a>
            {/* <li
                className={`p-3 cursor-pointer ${
                  active === "resume" ? "border-b-2 border-black" : ""
                }`}
              >
                <a href={resume} download onSetActive={handleSetActive}>
                  Resume
                </a>
              </li> */}
          </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
    <Image   src={mypics} alt="mypics" className='rounded-[100%] shadow-xl object-cover'/>
            </motion.div>
        
          </div>
       </div>
    </div>
  )
}

export default Hero




