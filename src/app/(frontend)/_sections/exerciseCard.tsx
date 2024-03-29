"use client";
import React from 'react'

import {
  Card,
} from "@/components/ui/card"


import { Exercise } from './search-exercises';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BiBulb } from 'react-icons/bi';
import Image from 'next/image';

interface ExerciseCardProps{
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <div className='h-full flex flex-col items-center'>
      <Card key={exercise.id} className='flex flex-col h-full hover:shadow-2xl'>
        <Button className='mx-2 mt-4' size='xs' variant='tag1'>{exercise.name.toUpperCase()}</Button>
        <Button className='mx-2 mt-4' size='xs' variant='tag2'>Targets: {exercise.bodyPart.toUpperCase()}</Button>
            <Image src={exercise.gifUrl} alt="" loading='lazy'/>
        <Link href={`/exercise/${exercise.id}`}>
          <Button className='mx-2 mb-4 text-xl' variant='tag3'>
            <BiBulb />
            Learn More...
          </Button>
        </Link>
      </Card>
    </div>
  )
}

export default ExerciseCard;