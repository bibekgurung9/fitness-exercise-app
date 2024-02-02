import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import image1 from '@/assets/images/1.jpg'
import image2 from '@/assets/images/2.jpg'
import image3 from '@/assets/images/3.jpg'
import image4 from '@/assets/images/4.jpg'
import image5 from '@/assets/images/5.jpg'
import Image from 'next/image'


const HeroSection = () => {
  return (
    <div className='text-center py-16 px-16'>
      <h1 className='text-5xl font-extrabold'>About Us @<span className='text-orange-400'> Fitness Nepal!</span></h1>
      <p className='text-2xl mb-6 mt-4'>Welcome to <span className='text-orange-400 font-bold'>Fitness Nepal</span>, where passion for fitness meets professional expertise! We are more than just a fitness brand; we are your dedicated partners on your journey to a healthier and happier lifestyle.</p>

      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-8'>
        <div className='flex flex-col border-solid border-2 border-black rounded-lg hover:shadow-2xl hover:scale-105 cursor-default'>
          <h1 className='text-3xl font-extrabold mt-4 mb-4'>Who We Are: </h1>
          <p className='text-2xl mb-6 mt-4'>Founded by <span className='text-orange-400 font-bold'>Bibek Gurung</span> a certified fitness trainer with a 10-year track record in the industry, <span className='text-orange-400 font-bold'>Fitness Nepal </span>is built on a foundation of passion, knowledge, and a commitment to excellence. We understand that every individual is unique, and our approach to fitness reflects this belief.</p>
        </div>

        <div className='flex flex-col border-solid border-2 border-black rounded-lg hover:shadow-2xl hover:scale-105 cursor-default'>
          <h1 className='text-3xl font-extrabold mt-4 mb-4'>Our Mission: </h1>
          <p className='text-2xl mb-6 mt-4'>At <span className='text-orange-400 font-bold'>Fitness Nepal</span>, our mission is to empower individuals to achieve their fitness goals, cultivate a positive mindset, and embrace a holistic approach to well-being. We believe that a strong and healthy body is the foundation for a fulfilling life.</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 sm:grid-cols-1 items-center justify-between mt-4'>
        <div className='flex flex-col mt-4 p-4'>
          <h1 className='text-3xl font-extrabold mt-4 mb-4'>What Sets Us Apart: </h1>
          <ul className='text-xl flex flex-col justify-start gap-y-2'>
            <li><span className='font-bold'>1. Personalized Approach:</span> We don't believe in one-size-fits-all solutions. Our programs are tailored to your individual fitness level, goals, and preferences.</li>
            <li><span className='font-bold'>2. Expert Guidance:</span> Our team of certified trainers brings a wealth of experience to ensure you receive the best guidance on your fitness journey.</li>
            <li><span className='font-bold'>3. Comprehensive Wellness:</span> We focus not only on physical fitness but also on mental and emotional well-being. Our programs are designed to nourish your mind, body, and soul.</li>
          </ul>
        </div>

        <div className='mt-4 flex items-center mx-4'>
        <Carousel className=''>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image src={image1} alt={''}></Image></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image src={image2} alt={''}></Image></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image src={image3} alt={''}></Image></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image src={image4} alt={''}></Image></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image src={image5} alt={''}></Image></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      </div>

      <div className='flex flex-col mt-4 p-4'>
        <h1 className='text-3xl font-extrabold mt-4 mb-4'>What We Believe In: </h1>
        <ul className='text-xl flex flex-col justify-start gap-y-2'>
          <li><span className='font-bold'>Supportive Community:</span> oin our community of like-minded individuals who share a commitment to health and fitness. Connect with others, share your progress, and find inspiration in the journey of fellow members.</li>
          <li><span className='font-bold'>Continuous Learning:</span> We stay abreast of the latest fitness trends, research, and best practices to ensure our programs evolve with the ever-changing landscape of health and wellness.</li>
          <li><span className='font-bold'>Fun and Enjoyable Workouts: </span> We focus not only on physical fitness but also on mental and emotional well-being. Our programs are designed to nourish your mind, body, and soul.</li>
        </ul>

        <p className='text-3xl mb-6 mt-4 font-bold'>Thank you for choosing<span className='text-orange-400'> Fitness Nepal!</span> as your fitness partner. We look forward to accompanying you on your journey to a healthier and more vibrant life!</p>
      </div>
    </div>
  )
}

export default HeroSection