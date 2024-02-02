import React from 'react'
import { IoIosFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { GiFruitBowl } from "react-icons/gi";
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { chooseList } from '@/constants';

const HeroSection = () => {
  return (
    <div className='text-center py-16 px-16'>
      <h1 className='text-5xl font-extrabold'><span>Welcome to<span className='text-orange-400'> Fitness Nepal! </span></span><br />Your One Stop Fitness Portal</h1>

      <div className='grid md:grid-cols-2 sm:grid-cols-1 mt-8 items-center'>
        <div className='text-left'>  
          <p className='text-2xl mb-6'>At <span className='text-orange-400 font-bold'>Fitness Nepal</span>, we believe in the power of fitness to enhance not only your physical health but your overall well-being. Whether you're a seasoned fitness enthusiast or just starting your wellness journey, we have something for everyone.</p>
            
            {chooseList.map((choose) => (
              <ul className='sm:text-2xl md:text-2xl'>
                <li className='font-bold mb-4 md:mb-8'>{choose.title} : <span className='font-normal '>{choose.description}</span></li>
              </ul>
            ))}

            <div className='grid md:grid-cols-3 sm:grid-cols-2 px-16 gap-4 mt-4 mb-6 items-center justify-center'>
              <Button variant='outline' className='gap-x-2 md:text-2xl' id='#fitness'>
                <IoIosFitness />
                Fitness Plans
              </Button>
              <Button variant='outline' className='gap-x-2 md:text-2xl' id='#cardio'>
                <IoFitness />
                Cardio Plans
              </Button>
              <Button variant='outline' className='gap-x-2 md:text-2xl' id='#diet'>
                <GiFruitBowl />
                Diet Plans
              </Button>
            </div> 
        </div>
        <div className='hover:shadow-2xl'>
          <img 
            src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Image By: Daniel Apodaca"
            loading='lazy'
            />
        </div>
      </div>
      <div className='flex px-16 gap-4 items-center justify-center mt-8'>
        <a href="https://github.com/bibekgurung9" target='blank'>
          <Button variant='outline' className='gap-x-2 md:text-4xl' id='fitness'>
            <FaGithub />
          </Button>
        </a>
        <a href="https://github.com/bibekgurung9" target='blank'>
          <Button variant='outline' className='gap-x-2 md:text-4xl' id='cardio'>
            <FaLinkedin />
          </Button>
        </a>
        <a href="https://github.com/bibekgurung9" target='blank'>
          <Button variant='outline' className='gap-x-2 md:text-4xl' id='diet'>
            <FaTwitter />
          </Button>
        </a>
      </div>


    </div>
  )
}

export default HeroSection