"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from 'axios'
import { exerciseOptions } from '@/utils/getData'
import ExerciseCard from './exerciseCard'
import { useRouter } from 'next/router'
import Link from 'next/link'

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

export const SearchExercise = () => {
  const [ search, setSearch ] = useState("");
  const [ exercises, setExercises ] = useState<Exercise[]>([]);

  const onSearch = async (e:any) => {
    e.preventDefault();
    alert("Exercises Here May Not Load beacause I ran out of free monthly requests from RapidAPI: ExerciseDB. Please feel free to check out later at a later date")
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
  const handleKeyDown =  (e:any) => {
    if(e.key === 'Enter' && !e.shiftkey){
      e.preventDefault();
      onSearch(e);
    }
  };

  return (
    <section className='my-4 text-center flex flex-col'>
      <h1 className='text-4xl font-bold mb-4'>Search For Awesome Exercises: </h1>
      <div className='flex flex-col md:flex-row items-center md:justify-between w-4/5 md:w-1/2 mx-auto px-4 md:px-0 mb-6 gap-y-4 gap-x-4'>
        <Input 
          type="text" 
          placeholder="Search for exercises...." 
          value={search}
          onChange={(e) => setSearch(e.target.value) }
          onKeyDown={handleKeyDown}
          className='outline '
          />
        <Button type="button" variant='tag3' onClick={onSearch}>Search</Button>
      </div>

      <div className='mt-4 grid md:grid-cols-3 gap-8 mx-8 hover:shadow-l'>
      {exercises.map((exercise) => (
        <Link key={exercise.id} href={`/exerciseDetails/${exercise.id}`}>
            <ExerciseCard exercise={exercise} />
        </Link>
        ))}
      </div>
    </section>
  )
}

export default SearchExercise