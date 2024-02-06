"use client";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';


const ContactUs = () => {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const submitForm = (e:any) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.phoneNumber || !formData.message) {
    toast.error("Please fill in all the fields");
    return;
  }

  toast.success("DEMO MESSAGE SUCCESS!");
  console.log(formData);
  setFormData({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  })
  }

  return (
    <div className='text-center py-8 px-16'>
      <h1 className='text-5xl font-extrabold'>Contact Us @<span className='text-orange-400'> Fitness Nepal!</span></h1>

      <div className='flex mt-4 px-16 gap-4 items-center justify-center mb-4'>
        <a href="https://github.com/bibekgurung9" target='blank'>
          <Button variant='outline' className='gap-x-2 text-4xl' id='fitness'>
            <FaGithub />
          </Button>
        </a>
        <a href="https://github.com/bibekgurung9" target='blank'>
          <Button variant='outline' className='gap-x-2 text-4xl' id='cardio'>
            <FaLinkedin />
          </Button>
        </a>
        <a href="https://github.com/bibekgurung9" target='blank'>
          <Button variant='outline' className='gap-x-2 text-4xl' id='diet'>
            <FaTwitter />
          </Button>
        </a>
      </div>

      <form action="post" className='flex flex-col items-center gap-y-2' onSubmit={submitForm}>
        <label 
          htmlFor="name" 
          className='text-xl font-bold'>Your Name</label>
        <input 
          type="text" 
          value={formData.name} 
          name='name' 
          placeholder='Enter your name...'
          className='p-2 border-solid border-2 border-black rounded-lg md:w-1/2 w-full'
          onChange={(e) => setFormData({...formData, name: e.target.value})}
           />
      
        <label 
          htmlFor="email" 
          className='text-xl font-bold'>Your Email</label>
        <input 
          type="email" 
          value={formData.email} 
          name='email' 
          placeholder='Enter your email...'
          className='p-2 border-solid border-2 border-black rounded-lg md:w-1/2 w-full'
          onChange={(e) => setFormData({...formData, email: e.target.value})}
           />

        <label 
          htmlFor="phoneNumber" 
          className='text-xl font-bold'>Your Phone Number</label>
        <input 
          type="tel" 
          value={formData.phoneNumber} 
          name='phoneNumber' 
          placeholder='Enter your phone number...'
          className='p-2 border-solid border-2 border-black rounded-lg md:w-1/2 w-full'
          onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
           />
        
        <label 
          htmlFor="message" 
          className='text-xl font-bold'>What do you want to tell us?</label>
        <textarea 
          value={formData.message} 
          name='message' 
          placeholder='Message...'
          className='p-2 border-solid border-2 border-black rounded-lg md:w-1/2 w-full'
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={8}
           />
        
        <Button type='submit' variant='tag3' className='font-bold text-xl'>
          Send Message
        </Button>
      </form>
    </div>
  )
}

export default ContactUs