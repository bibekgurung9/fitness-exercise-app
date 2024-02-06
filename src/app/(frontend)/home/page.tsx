import React from 'react'
import HeroSection from '../_sections/hero-section'
import FeatureSection from '../_sections/features-section'
import SearchExercise from '../_sections/search-exercises'
import ExerciseBlogs from '../_sections/exercise-blogs'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SearchExercise />
      <FeatureSection />
      <ExerciseBlogs />
    </div>
  )
}

export default HomePage