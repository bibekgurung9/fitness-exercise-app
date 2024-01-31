"use client"
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from 'axios'

const SearchExercise = () => {

  const [ searching, setSearching] = useState("");

  const onSearch = async () => {
    console.log("Search Called", searching)
    try{
      const response = await axios.post('api/get-exercise/', searching)
      console.log("Successful Search", response)
    } catch(error:any){
      console.log("Search Has Failed!", error)
    }
  }

  return (
    <section className='my-4 text-center flex flex-col'>
      <h1 className='text-center text-4xl font-extrabold mb-4'>Awesome Exercises You Should Know</h1>

      <div className="flex w-full items-center justify-center px-16 gap-2">
        <Input 
          type="text" 
          placeholder="Search for exercises...." 
          value={searching}
          onChange={(e) => setSearching(e.target.value) }
          />
        <Button type="button" variant='default' onClick={onSearch}>Search</Button>
      </div>

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}

export default SearchExercise