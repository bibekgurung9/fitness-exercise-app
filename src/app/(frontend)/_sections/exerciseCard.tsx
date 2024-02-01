"use client";
import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Exercise } from './search-exercises';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BiBulb } from 'react-icons/bi';

interface ExerciseCardProps{
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <div className='h-full flex flex-col items-center'>
      <Card key={exercise.id} className=''>
        <Button className='mx-2 mt-4' variant='default'>{exercise.name.toUpperCase()}</Button>
        <Button className='mx-2 mt-4' variant='default'>{exercise.bodyPart.toUpperCase()}</Button>
            <img src={exercise.gifUrl} alt="" />
        <CardHeader>
          <CardTitle className='text-3xl'>{exercise.name.toUpperCase()}</CardTitle>
          <CardDescription className='text-xl text-left'>{exercise.instructions}</CardDescription>
        </CardHeader>
        <Link href={`/exercise/${exercise.id}`}>
          <Button className='mx-2 mb-4 text-xl' variant='default'>
            <BiBulb />
            Learn More...
          </Button>
        </Link>

      </Card>
    </div>
  )
}

export default ExerciseCard;