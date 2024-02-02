"use client"
import React, { useEffect, useState } from 'react'
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
  const handleKeyDown =  (e:any) => {
    if(e.key === 'Enter' && !e.shiftkey){
      e.preventDefault();
      onSearch(e);
    }
  };

  return (
    <section className='my-4 text-center flex flex-col'>
      <div className="flex w-full items-center justify-center px-16 gap-8 mb-6">
        <Input 
          type="text" 
          placeholder="Search for exercises...." 
          value={search}
          onChange={(e) => setSearch(e.target.value) }
          onKeyDown={handleKeyDown}
          />
        <Button type="button" variant='tag3' onClick={onSearch}>Search</Button>
      </div>

      <div className='mt-4 grid md:grid-cols-3 gap-8 mx-8 hover:shadow-l'>
      {exercises.map((exercise) => (
        <Link href={``} key={exercise.id}>
          <ExerciseCard exercise={exercise} />
        </Link>
        ))}
      </div>
    </section>
  )
}

export default SearchExercise