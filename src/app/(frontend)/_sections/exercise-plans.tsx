"use client";
import React, { useEffect, useState } from 'react'
import {
  Card,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BiBulb } from 'react-icons/bi';
import axios from 'axios';
import { exerciseOptions } from '@/utils/getData';

interface ExerciseCard {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}

const ExercisePlans = () => {
  const [ plans, setPlans ] = useState<ExerciseCard[]>([]);

  useEffect(() => {
    const onPlans = async () => {
      if(plans){
        const plansData = await axios.get(
          `https://exercisedb.p.rapidapi.com/exercises`,
          exerciseOptions
        );
  
        const searchedPlans = plansData.data.filter(
          (plan: ExerciseCard) => plan.name.toLowerCase()
          || plan.target.toLowerCase()
          || plan.equipment.toLowerCase()
          || plan.bodyPart.toLowerCase()
        );
        setPlans(searchedPlans);
        console.log(searchedPlans)
      }
    }
    onPlans();
  }, [])

  return (
    <div className='h-full grid sm:grid-cols-2 md:grid-cols-4 gap-x-6  items-center gap-y-6'>
      {plans.map((exercise) => (
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
      ))}
    </div>
  )
}

export default ExercisePlans;