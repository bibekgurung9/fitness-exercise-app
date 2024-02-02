"use client";
import React from 'react'

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

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
      <Card key={exercise.id} className='flex flex-col h-full hover:shadow-2xl'>
        <Button className='mx-2 mt-4' size='xs' variant='tag1'>{exercise.name.toUpperCase()}</Button>
        <Button className='mx-2 mt-4' size='xs' variant='tag2'>Targets: {exercise.bodyPart.toUpperCase()}</Button>
            <img src={exercise.gifUrl} alt="" loading='lazy'/>
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