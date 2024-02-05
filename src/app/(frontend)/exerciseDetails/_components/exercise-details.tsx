import React from 'react'
import { ExerciseId } from '../[exerciseId]/page';
import { Button } from '@/components/ui/button';

interface ExerciseIdProps{
  exerciseId: ExerciseId;
}

/*
  bodyPart: string;
  equipment: string;
  gifUrl: string; //
  id: string; //
  name: string; //
  target: string; //
  secondaryMuscles: string[];
  instructions: string[]; //
}

*/

const ExerciseDetailsPage = ({ exerciseId }: ExerciseIdProps) => {
  return (
    <main className='grid sm:grid-cols-1 md:grid-cols-2 px-16 py-16 '>
      <section className=''>
        <div>
          <h1 className='font-bold xs:text-2xl sm:text-3xl md:text-4xl'>{exerciseId.name.toUpperCase()}</h1>
          <Button variant='tag3' className='font-bold text-xl my-2'>Targets : {exerciseId.target.toUpperCase()}</Button>
          <Button variant='tag1' className='font-bold text-xl my-2'>Secondary Muscles : {exerciseId.secondaryMuscles}</Button>
          <p className='sm:text-l md:text-xl font-semibold'>{exerciseId.instructions}</p>
        </div>

        <div className='my-4'>
          <h1 className='font-bold xs:text-xl sm:text-2xl md:text-3xl'>Requirements: </h1>
          <Button variant='tag2' className='font-bold text-xl my-2'>{exerciseId.equipment.toUpperCase()}</Button>          
        </div>  
      </section>

      <section>
       <img src={exerciseId.gifUrl} alt="" />
      </section>
    </main>
  )
}

export default ExerciseDetailsPage