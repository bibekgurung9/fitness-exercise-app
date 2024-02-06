import React from 'react'
import HeroSection from '../_sections/hero-section'
import FeatureSection from '../_sections/features-section'
import SearchExercise from '../_sections/search-exercises'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SearchExercise />
      <FeatureSection />
    </div>
  )
}

export default HomePage