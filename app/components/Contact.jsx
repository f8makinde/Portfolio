import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";


const Contact = () => {
  return (
    <div className='w-full flex p-10 text-black h-screen' id='about'> 
    <div className='mx-auto max-w-[1400px] px-8'>
      <div className='flex-shrink-1  gap-3'>
      <h2 className='font-bold md:text-[40px] text-3xl text-center font-primary'>Interested in working with me?</h2> 
            <h1 className='md:text-3xl text-2xl font-semibold text-center'>Contact Me</h1>
            
          
            
           </div>
          <div className='border bg-gray-300 text-black p-6'>
            <div className='flex justify-between'>
                <span className='flex items-center gap-2'><MdOutlineMailOutline size={30}/> <span className='text-xl'>
                Email</span></span>
                <a href='' target='_blank'  className='flex items-center gap-2'><FaLinkedinIn /> Linkedln</a>
            </div>
          </div>
          </div>
      
    </div>
  )
}

export default Contact
