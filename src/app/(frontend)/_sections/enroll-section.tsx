"use client";
import { Button } from '@/components/ui/button';
import { availablePrograms, exercisePlans } from '@/constants';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const EnrollForm = () => {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    program: [],
    message: '',
  });

  const enrollForm = (e:any) => {
  e.preventDefault();
  toast.success("DEMO MESSAGE SUCCESS!");
  console.log(formData);
  setFormData({
    name: '',
    email: '',
    phoneNumber: '',
    program: [],
    message: '',
  })
  }
  
  return (
    <div className='text-center py-8 px-16'>
      <h1 className='text-5xl font-extrabold'>Enroll Now @<span className='text-orange-400'> Fitness Nepal!</span></h1>
      <p className='text-2xl mb-6 mt-4'>Ready to take the first step towards a healthier and more active lifestyle? Enroll now with<span className='text-orange-400 font-bold'>Fitness Nepal</span> and unlock a world of fitness tailored just for you! </p>

    <form className='' action="post" onSubmit={enrollForm}>
      <div className='grid md:grid-cols-2 sm:grid-cols-1'>
      <div className='flex flex-col'>
        <div>
          <label className='text-xl font-bold'>Select Your Programs:</label>
          {availablePrograms.map((program, index) => (
            <div key={index} className=''>
              <input
                type='checkbox'
                value={program.name}
              />
              <label htmlFor={program.name} className='ml-2 '>
                {program.name}
              </label>
            </div>
          ))}
        </div>
        <div>
          <label className='text-xl font-bold'>Select Your Plan:</label>
          {exercisePlans.map((plan, index) => (
            <div key={index} className=''>
              <input
                type='checkbox'
                value={plan.time}
              />
              <label htmlFor={plan.time} className='ml-2'>
                {plan.time}
              </label>
            </div>
          ))}
        </div>

      </div>

      <div className='flex flex-col items-center gap-y-2'>
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
      </div>
      </div>


      <Button type='submit' variant='tag3' className='font-bold text-xl mt-4 border'>
          Send Me My Plan
      </Button>
    </form>
    </div>
  )
}

export default EnrollForm