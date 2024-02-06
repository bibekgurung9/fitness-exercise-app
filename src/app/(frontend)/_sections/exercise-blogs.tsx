import { dummyBlogs } from '@/constants'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

const ExerciseBlogs = () => {
  return (
    <div className='px-16 py-16 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-y-8 gap-x-4'>
      {dummyBlogs.map((blog, index) => (
        <div key={index} className='h-full hover:shadow-2xl'>
          <Link href={'/'}>
            <Card>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src={blog.src} alt={''}></Image>
              </CardContent>
              <CardFooter>
              <p>{blog.description}</p>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ExerciseBlogs