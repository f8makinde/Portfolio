import React from 'react'

const About = () => {
  return (
    <div className='w-full flex justify-center items-center text-black/90 md:h-screen my-8' id='about'> 
    <div className='max-w-[1400px] mx-auto flex md:flex-row flex-col justify-center items-center gap-6 md:px-[50px] px-8'>
      <div className='flex-shrink-1 md:w-1/2 gap-3'>
       
            <span className='md:text-3xl text-2xl font-semibold text-purple-500'>About Me</span>
           
            
            <h2 className='font-bold md:text-[40px] text-3xl font-primary  my-3'>Get a brief look at who I am and what I do.</h2> 
            
            <p className='text-lg'>I&apos;m a dedicated Frontend Web Developer skilled in HTML, CSS, JavaScript and React JS, passionate about creating captivating user experiences.</p>
            
                <p className='text-lg'>By merging design and technology, I transform concepts into responsive, interactive websites. With an eye for detail and a commitment to accessibility, I craft interfaces that marry aesthetics with functionality. Check out some of my work in the Portfolio section.</p>
              
                <p className='text-lg'>With an eye for detail and a commitment to accessibility, I craft interfaces that marry aesthetics with functionality. Check out some of my work in the Portfolio section.</p>
           
              <p>Let&apos;s create something remarkable together</p>
    
          </div>
          <div className='flex flex-col gap-3 md:w-1/2'>
              
                
                <span className='text-3xl font-semibold'>My Skills</span>                            
                      <Skillset />
                </div> 
         </div>
         </div> 
      
  )
}

export default About

const data = [
    {
      skill: "HTML",
      id: 0
    },
    {
      skill: "CSS",
      id: 1
    },
    {
      skill: "JavaScript",
      id: 2
    },
    {
      skill: "React JS",
      id: 3
    },
    {
      skill: "Next JS",
      id: 4
    },
    {
      skill: "SASS",
      id: 5
    },
    {
      skill: "TypeScript",
      id: 6
    },
    {
      skill: "Redux & Redux Toolkit",
      id: 7
    },
    {
      skill: "Git",
      id: 8
    },
    {
      skill: "GitHub",
      id: 9
    },
    {
      skill: "Tailwind css",
      id: 10
    },
    {
      skill: "Bootstrap",
      id: 11
    },
  ]
  function Skillset(){
    return(
      <div className='flex gap-3 flex-wrap'>
        {data.map((skill) => (
         
          <div  className='bg-yellow hover:bg-black hover:text-white cursor-pointer text-black font-bold py-3 flex-shrink-0 border px-6 rounded-md text-center text-lg' key={skill.id}><p>{skill.skill}</p></div>
        ))}
      </div>
    )
  }