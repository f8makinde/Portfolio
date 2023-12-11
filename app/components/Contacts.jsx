'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/sendEmail';




const Contacts = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <div className='w-full flex p-10 text-black h-screen' id='about'> 
    <div className='mx-auto max-w-[1400px] px-8'>
      <div className='flex-shrink-1  gap-3'>
      <h2 className='font-bold md:text-[40px] text-3xl text-center font-primary'>Interested in working with me?</h2> 
            <h1 className='md:text-3xl text-2xl font-semibold text-center text-purple-500'>Contact Me</h1>
            
          
            
           </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='email'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Contacts;