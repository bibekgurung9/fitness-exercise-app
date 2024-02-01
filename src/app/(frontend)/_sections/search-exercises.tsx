"use client"
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from 'axios'
import { exerciseOptions } from '@/utils/getData'
import Link from 'next/link'
import ExerciseCard from './exerciseCard'

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

const SearchExercise = () => {
  const [ search, setSearch ] = useState("");
  const [ exercises, setExercises ] = useState<Exercise[]>([]);
  const [ bodyParts, setBodyParts ] = useState([]);

  /*
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await axios.get(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData.data.bodyPartList]);
    }
    fetchExercisesData();
  }, [])
  */

  const onSearch = async () => {
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
    <section className='my-4 text-center flex flex-col'>
      <h1 className='text-center text-4xl font-extrabold mb-4'>Awesome Exercises You Should Know</h1>

      <div className="flex w-full items-center justify-center px-16 gap-2">
        <Input 
          type="text" 
          placeholder="Search for exercises...." 
          value={search}
          onChange={(e) => setSearch(e.target.value) }
          />
        <Button type="button" variant='default' onClick={onSearch}>Search</Button>
      </div>

      <div className='mt-4 grid grid-cols-2 gap-8 mx-8 hover:shadow-l'>
      {exercises.map((exercise) => (
        <Link href={`/exercise/${exercise.id}`} key={exercise.id}>
          <ExerciseCard exercise={exercise} />
        </Link>
        ))}
      </div>
    </section>
  )
}

export default SearchExercise