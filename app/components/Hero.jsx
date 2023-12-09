import React from 'react'
import Image from 'next/image'
import mypics from "../assets/img/myPics.png"
import chatIcon from "../assets/svg/Vector (4).svg";
const Hero = () => {
  return (
    <div className='w-full h-screen my-8' id='home'>
       <div className='lg:max-w-[1400px] mx-auto md:px-[50px] px-8'>
          <div className='flex flex-wrap gap-8 justify-evenly items-center'>
            <div>
                <h3 className='text-xl  lg:text-left text-center text-black/80'>Hello, I'm</h3>
          <h1 className="lg:text-[100px] md:text-[80px] sm:text-[75px] text-7xl lg:leading-[7rem] md:leading-[5rem] font-extrabold text-black lg:text-left text-center font-primary">
              Faith <br /> Makinde <br />
            </h1>
            <h2 className='text-3xl text-black/80 font-medium lg:text-left text-center'>
            Frontend Developer
            </h2>
           <div className='flex items-center gap-6'>
          <a
            className="relative my-4 flex justify-center w-[176px] px-4 py-4 font-medium group cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full transition rounded-lg duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full rounded-lg bg-yellow border-2 border-black group-hover:bg-yellow"></span>
              <span className="relative text-white flex items-center text-lg font-secondaryBld font-bold gap-3">
                Let’s Talk
                <Image src={chatIcon} alt="chat-icon"  className='text-white'/>
              </span>
          </a>
          <a
            className="relative my-4 flex justify-center w-[176px] px-4 py-4 font-medium group cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full transition rounded-lg duration-200 ease-out transform translate-x-1 translate-y-1 bg-black/80 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full rounded-lg bg-yellow border-2 border-black/80 group-hover:bg-yellow"></span>
              <span className="relative text-white flex items-center text-lg font-secondaryBld font-bold gap-3">
               Resume
              </span>
          </a>
          </div>
            </div>
            <Image src={mypics} alt="mypics" className='rounded-[100%] shadow-xl object-cover'/>
          </div>
       </div>
    </div>
  )
}

export default Hero
