'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/sendEmail';
import Show from './Show';




const Contacts = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <div className='w-full flex py-10 text-black h-screen' id='contact'> 
    <div className='mx-auto max-w-[800px] md:px-[50px] px-8'>
      <div className='flex-shrink-1 items-center justify-center gap-3'>
        <Show>
      <h2 className='font-bold md:text-[40px] my-3 text-3xl lg:text-center font-primary text-purple-500'>Interested in working with me?</h2> 
      </Show>
      <Show>
            <h1 className='text-xl font-medium md:text-center'>I’m currently open to joining a new team of creative developers. If you have a question, proposal, idea or just want to say hi, Go ahead.</h1>
            </Show>
          
            
           </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <Show>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          Full Name
        </label>
        </Show>
       
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
       
      </div>
      <div className='mb-5'>
        <Show>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email Address
        </label>
        </Show>
       
        <input
          type='email'
          placeholder='email'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      
      </div>
      <div className='mb-5'>
        <Show>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        </Show>
   
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
       
      </div>
      <div>
        <Show>
        <button className='hover:shadow-form rounded-md hover:bg-purple-600 bg-purple-500 transition-colors py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
        </Show>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Contacts;