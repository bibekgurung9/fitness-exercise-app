import React from 'react'
import { IoIosFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { GiFruitBowl } from "react-icons/gi";
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaXTwitter } from "react-icons/fa6";
import { chooseList } from '@/constants';
import Image from 'next/image';
import HeroImage from '@/assets/images/1.jpg'

const HeroSection = () => {
  return (
    <div className='text-center py-4 px-16'>
      <h1 className='text-5xl font-extrabold'><span>Welcome to<span className='text-orange-400'> Fitness Nepal! </span></span><br />Your One Stop Fitness Portal</h1>

      <div className='grid md:grid-cols-2 sm:grid-cols-1 mt-8 items-center justify-center'>
        <div className='text-lef'>  
          <p className='text-2xl mb-6'>At <span className='text-orange-400 font-bold'>Fitness Nepal</span>, we believe in the power of fitness to enhance not only your physical health but your overall well-being. Whether you{'\u0027'}re a seasoned fitness enthusiast or just starting your wellness journey, we have something for everyone.</p> 
            {chooseList.map((choose, index) => (
              <ul className='text-xl md:text-2xl' key={index}>
                <li className='font-bold mb-4 md:mb-8'>{choose.title} : <span className='font-normal '>{choose.description}</span></li>
              </ul>
            ))}
            <div className='flex px-16 gap-4 items-center justify-center mb-4'>
              <a href="https://github.com/bibekgurung9" target='blank'>
                <Button variant='outline' className='gap-x-2 text-2xl md:text-4xl' id='fitness'>
                  <FaGithub />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/bibekgurung9/" target='blank'>
                <Button variant='outline' className='gap-x-2 text-2xl md:text-4xl' id='cardio'>
                  <FaLinkedin />
                </Button>
              </a>
              <a href="https://twitter.com/_BibekGurung" target='blank'>
                <Button variant='outline' className='gap-x-2 text-2xl md:text-4xl' id='diet'>
                  <FaXTwitter />
                </Button>
              </a>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 px-16 gap-4 mt-4 mb-6 items-center justify-center'>
              <Button variant='outline' className='text-2xl gap-x-2' id='#fitness'>
                <IoIosFitness />
                Fitness Plans
              </Button>
              <Button variant='outline' className='text-2xl mt-4 md:mt-0 gap-x-2' id='#cardio'>
                <IoFitness />
                Cardio Plans
              </Button>
              <Button variant='outline' className='text-2xl mt-4 md:mt-0 gap-x-2' id='#diet'>
                <GiFruitBowl />
                Diet Plans
              </Button>
            </div> 
        </div>

        <div className='flex items-center justify-center'>
          <Image 
            src={HeroImage} 
            alt="Image By: Daniel Apodaca"
            loading='lazy'
            width={500}
            height={500}
            className='flex '
            />
        </div>
      </div>

    </div>
  )
}

export default HeroSection