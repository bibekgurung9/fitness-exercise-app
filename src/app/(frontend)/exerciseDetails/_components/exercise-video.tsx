import React from 'react';

interface ExerciseVideosProps {
  exerciseVideos: { videoUrl: string }[];
  exerciseName: string;
}

const ExerciseVideos: React.FC<ExerciseVideosProps> = ({ exerciseVideos, exerciseName }) => {
  return (
    <div className='px-16'>
      <h2 className='text-3xl font-bold'>Watch Videos For: <span className='text-orange-500'>{exerciseName}</span></h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-4'>

      </div>
    </div>
  );
};

export default ExerciseVideos;
