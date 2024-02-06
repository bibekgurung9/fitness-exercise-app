"use client";
import React, { useEffect, useState } from 'react'
import { ExerciseId } from '../[exerciseId]/page';
import { exerciseOptions } from '@/utils/getData';
import axios from 'axios';
import { Exercise } from '../../_sections/search-exercises';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
import { BiBulb } from 'react-icons/bi';

interface SimilarExercisesProps{
  exerciseId: ExerciseId;
}

const SimilarExercises: React.FC<SimilarExercisesProps> = ({ exerciseId }) => {
  const [ similar, setSimilar ] = useState<Exercise[]>([]);

useEffect(() => {
  const similarSearch = async () => {
    try {
      const exercisesData = await axios.get(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
      const searchedExercises = exercisesData.data.filter(
        (exercise: Exercise) =>
          exercise.name.toLowerCase().includes(exerciseId.bodyPart.toLowerCase()) ||
          exercise.target.toLowerCase().includes(exerciseId.bodyPart.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(exerciseId.bodyPart.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(exerciseId.bodyPart.toLowerCase())
      );
      setSimilar(searchedExercises);
      console.log(searchedExercises);
    } catch (error) {
      console.error('Error fetching similar exercises: ', error);
    }
  };
  similarSearch();
  })

  return (
    <div className='py-8 px-16 mt-4 grid md:grid-cols-3 gap-8 mx-8 hover:shadow-l'>
      {similar.map((exercise) => (
        <div key={exercise.id} className='h-full flex flex-col items-center'>
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
      ))}
    </div>
  )
}
export default SimilarExercises;