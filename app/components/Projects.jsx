"use client"
import React from 'react';
import { motion } from 'framer-motion';
import fintekImg from "../assets/img/fintekk.png";
import frot from "../assets/img/frot.png";
import Image from 'next/image'
import pizza from "../assets/img/pizza.png"
import link from "../assets/svg/link.svg";
import Imdb from "../assets/img/imdb.png";
import { FaGithub } from "react-icons/fa";
import Show from './Show';
const Projects = () => {
  
  return (
    <motion.div     
    initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.3 }}
className="w-full bg-white md:h-screen lg:mb-32" id="projects">
    <div className="mx-auto lg:max-w-[1400px] md:px-[50px] px-8">
      <div>
          <div className="flex flex-col">
              <p className="text-2xl font-semibold text-purple-700">Projects</p>
              <h2 className="font-bold text-[40px] font-primary">
                Small selection of things I’ve built
              </h2>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-2 items-center justify-between gap-6 overflow-auto flex-1'>
        <SmallProject
                  name="IMdb Clone"
                  desc="
                IMDb (Internet Movie Database) clone"
                  skill={["Next Js", "Tailwind Css"]}
                  image={Imdb}
                  linkText="https://f8-imdb-clone.vercel.app"
                  gitLink="https://github.com/f8makinde/Imdb-clone.git"
               
                />
                  <SmallProject
                  name="Fintekk Page"
                  desc="A landing page"
                  skill={["React Js", "Tailwind Css"]}
                  image={fintekImg}
                  linkText="https://f8makinde.github.io/FINTEKK-LANDING-PAGE/"
                  gitLink="https://github.com/f8makinde/FINTEKK-LANDING-PAGE.git"
                  
                />
                    <SmallProject
                  name="Order Pizza"
                  desc="
                Order Pizza App"
                  skill={["React", "Vanilla Css"]}
                  image={pizza}
                  linkText="https://order-fast-food.vercel.app/"
                  gitLink="https://github.com/f8makinde/Order-fast-food.git"
                  
                />
                    <SmallProject
                  name="Frot"
                  desc="
                Frot Radiologist Session"
                  skill={["Next Js", "Tailwind Css"]}
                  image={frot}
                  linkText="https://amd12.vercel.app/"
                  gitLink="https://github.com/f8makinde/Amorad-page.git"
                  
                />
        </div>
        </div>
        </div>
        </motion.div>
  )
}

export default Projects

function SmallProject({ image, name, desc, skill, linkText, gitLink }) {
    const color = { yellow: "black", purple: "grey", peach: "peach" };
    return (
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.25 }}
     
       className="flex md:flex-col flex-col-reverse  border border-yellow rounded-2xl md:py-4 overflow-hidden md:h-[100%] px-8">
        <Image
          src={image}
          alt={name}
          className="md:w-[100%]  md:h-[100%] w-full object-contain rounded-xl shadow-lg "
        />
        <div className="flex flex-col  gap-3 px-4 md:border-b-0 py-2 border-b-2">
       <Show>
            <h1  
className="font-primary md:text-4xl text-3xl font-bold">
              {name}
            </h1>
            </Show>
    <Show>
            <p 
            className="lg:text-lg text-base font-medium font-secondary">
              {desc}
            </p>
            </Show>
          <div className="flex flex-wrap items-center gap-2">
            {skill.map((skills, index) => {
              return (
                  <motion.ul  
                      initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    key={index}
                    className="text-white cursor-pointer rounded-full"
                    style={{
                      background: `${index > 0 ? color.yellow : color.purple}`,
                    }}
                  >
                    <li className="text-lg font-semibold font-secondaryHvy py-1 px-2">
                      {skills}
                    </li>
                  </motion.ul>
              );
            })}
          </div>
          <Show>
            <a
            
              href={linkText}
              target="_blank"
              type="button"
              className="text-lg font-bold font-secondaryBld text-black outline-none gap-3 text-center inline-flex items-center md:pt-2"
            >
              Live Demo
              <Image src={link} alt="chat-icon" />
            </a>
        </Show>
        <Show>
          <a       
              initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          href={gitLink} target="_blank" className="cursor-pointer">
          <FaGithub size={30}/>
          </a>
          </Show>
        </div>
      </motion.div>
    );
  }