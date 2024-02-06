"use client";
import React, { useEffect, useState } from 'react'
import {
  Card,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BiBulb } from 'react-icons/bi';
import axios from 'axios';
import { exerciseOptions } from '@/utils/getData';
import Image from 'next/image';

interface ExerciseCard {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}

const ExercisePlans = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ plans, setPlans ] = useState<ExerciseCard[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(
          `https://exercisedb.p.rapidapi.com/exercises`,
          exerciseOptions
        );

        const searchedPlans = response.data.filter(
          (plan: ExerciseCard) =>
            plan.name.toLowerCase() ||
            plan.target.toLowerCase() ||
            plan.equipment.toLowerCase() ||
            plan.bodyPart.toLowerCase()
        );

        setPlans(searchedPlans);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.error('Error fetching exercise plans:', error);
        setLoading(false);
        setError(true);
      }
    };

    fetchPlans();
  }, []);

  return (
<div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className='text-orange-500 text-xl mb-4 font-bold'>Failed to fetch exercise plans. Please try again later.</p>
      ) : (
        <div>
          <h1 className='text-orange-500 text-2xl md:text-4xl mb-4 font-bold'>Our Most Favourite Picks</h1>

          <div className='h-full grid sm:grid-cols-2 md:grid-cols-4 gap-x-6 items-center gap-y-6'>
            {plans.map((exercise) => (
              <Card key={exercise.id} className='flex flex-col h-full hover:shadow-2xl'>
                {/* ... (rest of your component code) */}
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExercisePlans;