"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ExerciseDetailPage from '../_components/exercise-details';
import axios from 'axios';
import { exerciseOptions } from '@/utils/getData';

export interface ExerciseId {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}

const ExerciseId = () => {
  const [exerciseId, setExerciseId] = useState<ExerciseId | undefined>();

  const params = useParams<{ exerciseId: string }>();

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      try {
        const exercisesData = await axios.get(
          `https://exercisedb.p.rapidapi.com/exercises`,
          exerciseOptions
        );
        const searchedExercises = exercisesData.data.filter(
          (exercise: ExerciseId) => exercise.id.includes(params.exerciseId)
        );

        if (searchedExercises.length > 0) {
          setExerciseId(searchedExercises[0]);
        } else {
          // Handle the case when the exercise with the given ID is not found
        }
      } catch (error) {
        // Handle errors with the API request
        console.error('Error fetching exercise details:', error);
      }
    };

    fetchExerciseDetails();
  }, [params.exerciseId]);

  return (
    <div>
      {exerciseId && <ExerciseDetailPage exerciseId={exerciseId} />}
    </div>
  );
};

export default ExerciseId;
