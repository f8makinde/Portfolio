"use client";
import React from "react";
import { motion } from "framer-motion";
import Show from "./Show";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center items-center text-black/90 md:h-screen md:my-16 my-8"
      id="about"
    >
      <div className="max-w-[1400px] mx-auto flex md:flex-row flex-col justify-center items-center gap-6 md:px-[50px] px-8">
        <div className="flex-shrink-1 md:w-1/2 gap-3">
          <Show>
          <span
            className="md:text-3xl text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
          >
            About Me
          </span>
</Show>
      <Show>
          <h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-bold md:text-[40px] text-3xl font-primary  my-3"
          >
            Get a brief look at who I am and what I do.
          </h2>
          </Show>
          <Show>
          <p
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.25 }}
            className="text-lg"
          >
            I&apos;m a dedicated Frontend Web Developer skilled in HTML, CSS,
            JavaScript and React JS, passionate about creating captivating user
            experiences.
          </p>
          </Show>
          <Show>
          <p
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 1.5 }}
            className="text-lg"
          >
            By merging design and technology, I transform concepts into
            responsive, interactive websites. With an eye for detail and a
            commitment to accessibility, I craft interfaces that marry
            aesthetics with functionality. Check out some of my work in the
            Portfolio section.
          </p>
          </Show>
          <Show>
          <p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.65 }}
            className="text-lg"
          >
            With an eye for detail and a commitment to accessibility, I craft
            interfaces that marry aesthetics with functionality. Check out some
            of my work in the Portfolio section.
          </p>
          </Show>
          <Show>
          <p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.75 }}
          >
            Let&apos;s create something remarkable together
          </p>
          </Show>
        </div>
        <div className="flex flex-col gap-3 md:w-1/2">
          <Show>
          <span
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2 }}
            className="text-3xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
          >
            My Skills
          </span>
          </Show>
          <Skillset />
        </div>
      </div>
    </motion.div>
  );
};

export default About;

const data = [
  {
    skill: "HTML",
    id: 0,
  },
  {
    skill: "CSS",
    id: 1,
  },
  {
    skill: "JavaScript",
    id: 2,
  },
  {
    skill: "React JS",
    id: 3,
  },
  {
    skill: "Next JS",
    id: 4,
  },
  {
    skill: "SASS",
    id: 5,
  },
  {
    skill: "TypeScript",
    id: 6,
  },
  {
    skill: "Redux & Redux Toolkit",
    id: 7,
  },
  {
    skill: "Git",
    id: 8,
  },
  {
    skill: "GitHub",
    id: 9,
  },
  {
    skill: "Tailwind css",
    id: 10,
  },
  {
    skill: "Bootstrap",
    id: 11,
  },
];
function Skillset() {
  return (
    <div className="flex gap-3 flex-wrap">
      {data.map((skill) => (
        <Show>
        <div
          className="bg-yellow hover:bg-black hover:text-white cursor-pointer text-black font-bold py-3 flex-shrink-0 border px-6 rounded-md text-center text-lg"
          key={skill.id}
        >
          <motion.p       
             initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.25, delay: 2 }}>{skill.skill}</motion.p>
        </div>
        </Show>
      ))}
    </div>
  );
}
