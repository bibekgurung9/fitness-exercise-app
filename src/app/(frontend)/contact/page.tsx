import React from 'react'
import HeroSection from '../_sections/hero-section'
import FeatureSection from '../_sections/features-section'
import SearchExercise from '../_sections/search-exercises'
import ContactUs from '../_sections/contact-us'
import { Toaster } from 'react-hot-toast'

const HomePage = () => {
  return (
    <div>
      <Toaster />
      <ContactUs />
    </div>
  )
}

export default HomePage