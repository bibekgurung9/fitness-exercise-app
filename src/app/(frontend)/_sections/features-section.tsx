import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { featureList } from '@/constants'

const FeatureSection = () => {
  return (
    <section>
      <h1 className='text-center text-4xl font-extrabold mb-4'>Our Features</h1>
      <div className='px-16 gap-4 items-center justify-center grid md:grid-cols-3 sm:grid-cols-2'>
        {featureList.map((features) => (
          <Card className='border-black hover:shadow-xl cursor-default h-full'>
            <CardHeader>
              <CardTitle className='text-center'>{features.title}</CardTitle>
              <CardDescription className='text-xl text-center'>{features.description}</CardDescription>
            </CardHeader>
        </Card>
        ))}
      </div>
    </section>
  )
}

export default FeatureSection