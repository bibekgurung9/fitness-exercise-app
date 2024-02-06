import React from 'react'
import { ExerciseId } from '../[exerciseId]/page';
import { Button } from '@/components/ui/button';

interface ExerciseIdProps{
  exerciseId: ExerciseId;
}

const ExerciseDetailsPage = ({ exerciseId }: ExerciseIdProps) => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 px-16 py-16'>
      <section>
        <div className='gap-x-4'>
          <h1 className='font-bold text-2xl md:text-4xl mb-2'>{exerciseId.name.toUpperCase()}</h1>
          <p className
          ='sm:text-l md:text-xl font-semibold'>{exerciseId.instructions}</p>
        </div>
        <div className='my-4'>
          <h1 className='font-bold text-xl md:text-3xl'>Targets: </h1>
          <Button variant='tag3' className='font-bold text-xl my-2'>{exerciseId.target.toUpperCase()}</Button>          
        </div>  

        <div className='my-4'>
          <h1 className='font-bold text-xl md:text-3xl'>Secondary Muscles: </h1>
          <Button variant='tag1' className='font-bold text-xl my-2'>{exerciseId.secondaryMuscles}</Button>          
        </div>  

        <div className='my-4'>
          <h1 className='font-bold text-xl md:text-3xl'>Requirements: </h1>
          <Button variant='tag3' className='font-bold text-xl my-2'>{exerciseId.equipment.toUpperCase()}</Button>          
        </div>  
      </section>

      <section className='flex items-center justify-center'>
       <img src={exerciseId.gifUrl} alt="" />
      </section>
    </div>
  )
}

export default ExerciseDetailsPage