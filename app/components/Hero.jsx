import React from 'react'
import Image from 'next/image'
import mypics from "../assets/img/myPics.png"
import chatIcon from "../assets/svg/Vector (4).svg";
const Hero = () => {
  return (
    <div className='w-full  my-8' id='home'>
       <div className='lg:max-w-[1400px] mx-auto md:px-[50px] px-8'>
          <div className='flex lg:flex-row flex-col gap-8 justify-between'>
            <div>
                <h3 className='text-xl  sm:text-left text-center text-black/80'>Hello, I'm</h3>
          <h1 className="lg:text-[100px] md:text-[80px] sm:text-[75px] text-6xl lg:leading-[7rem] md:leading-[5rem] font-extrabold text-black sm:text-left text-center font-primary">
              Faith <br /> Makinde <br />
            </h1>
            <h2 className='text-3xl text-black/80 font-medium sm:text-left text-center'>
            Frontend Developer
            </h2>
            <p className="font-medium text-xl sm:text-left text-center">
              I bring a unique perspective to the industry. <br /> With a passion for
              solving complex problems and <br /> a commitment to staying up-to-date
              with the latest technologies
            </p>
           <div className='flex items-center gap-6'>
          <a
            className="relative my-4 flex justify-center items-center w-[176px] px-4 py-4 font-medium group cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full transition rounded-lg duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full rounded-lg bg-yellow border-2 border-black group-hover:bg-yellow"></span>
              <span className="relative text-white flex items-center text-lg font-secondaryBld font-bold gap-3">
                Let’s Talk
                <Image src={chatIcon} alt="chat-icon"  className='text-white'/>
              </span>
          </a>
          <a
            className="relative my-4 flex justify-center items-center w-[176px] px-4 py-4 font-medium group cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full transition rounded-lg duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full rounded-lg bg-yellow border-2 border-black/10 group-hover:bg-yellow"></span>
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
