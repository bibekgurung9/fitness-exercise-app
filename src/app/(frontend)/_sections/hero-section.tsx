import React from 'react'
import Image from 'next/image'
import { IoIosFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { GiFruitBowl } from "react-icons/gi";
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
import { dietImages, heroImages } from '@/constants';


const HeroSection = () => {
  return (
    <div className='text-center mt-2 py-32 px-16'>
      <h1 className='text-6xl font-extrabold'><span className='text-orange-400'>Welcome! </span>Your One Stop Fitness Wesbite</h1>
      <p className='text-2xl mt-4'>Browse Through All Our Amazing Exercies and Find The Perfect On For You!</p>
      
      <div className='grid jusitfy-center sm:grid-cols-1 md:grid-cols-3 mt-4'>
        <Carousel className="w-full max-w-sm flex">
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <Card className='flex'>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image src={image.src} alt={image.alt}></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Carousel className="w-full max-w-sm flex">
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <Card className='flex'>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image src={image.src} alt={image.alt}></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Carousel className="w-full max-w-sm flex">
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <Card className='flex'>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image src={image.src} alt={image.alt}></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className='flex px-16 gap-4 items-center justify-center'>
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