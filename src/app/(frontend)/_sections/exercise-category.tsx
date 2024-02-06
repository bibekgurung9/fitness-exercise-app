"use client";
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { exerciseCategory } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';
import { exerciseOptions } from '@/utils/getData'
import axios from 'axios';
import ExerciseCard from './exerciseCard';

export interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}

const ExerciseCategory = () => {
  const [ search, setSearch ] = useState("");
  const [ exercises, setExercises ] = useState<Exercise[]>([]);

  const onSearch = async (e:any) => {
    e.preventDefault();
    if(search){
      const exercisesData = await axios.get(
        `https://exercisedb.p.rapidapi.com/exercises`,
        exerciseOptions
      );

      const searchedExercises = exercisesData.data.filter(
        (exercise: Exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
    setSearch("");
    setExercises(searchedExercises);
    console.log(searchedExercises);
    }
  }

  return (
    <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-y-8 gap-x-8 my-6'>
      {exerciseCategory.map((category) => (
      <Link href={``} onClick={(e) => { setSearch(category.title.toString()); onSearch(e); }} key={category.id}>
        <Card  className='w-full'>
          <CardTitle className=''>
            <CardHeader>
              <CardContent className='flex'>
                <Image src={category.img} alt={category.alt} className='flex' />
              </CardContent>
            </CardHeader>
          </CardTitle>
          <CardDescription className='sm:text-2xl md:text-4xl font-bold text-black '>
              {category.title}
            </CardDescription>
        </Card>
      </Link>
      ))}

      <div className='mt-4 grid md:grid-cols-3 gap-8 mx-8 hover:shadow-l'>
      {exercises.map((exercise) => (
        <Link href={``} key={exercise.id}>
          <ExerciseCard exercise={exercise} />
        </Link>
        ))}
      </div>
    </div>
  )
}

export default ExerciseCategory