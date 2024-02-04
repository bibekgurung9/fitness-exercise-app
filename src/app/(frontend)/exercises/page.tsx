import React from 'react'
import SearchExercise from '../_sections/search-exercises'
import ExerciseCategory from '../_sections/exercise-category'

const Exercise = () => {
  return (
    <div className='text-center py-16 px-16'>
      <h1 className='text-5xl font-extrabold'>Search Your Exercise @<span className='text-orange-400'> Fitness Nepal!</span></h1>

      <div className=''>
        <ExerciseCategory />
      </div>  
      <div>
        <SearchExercise />
      </div>
    </div>
  )
}

export default Exercise