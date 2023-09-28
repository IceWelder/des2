// pages/index.tsx
import React from 'react';
import VideoBox from '../components/VideoBox';

const videos = [
  '/vd1.mp4',
  '/vd2.mp4',
  '/vd3.mp4',
  '/vd4.mp4',
  '/vd5.mp4',
  '/vd6.mp4',
  '/vd7.mp4',
  '/vd8.mp4',
  '/vd9.mp4',
  '/vd10.mp4',
  '/vd11.mp4',
  
  
  
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto py-8 h-screen">
      <h1 className="text-3xl font-semibold mb-4">Momentos da F1</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((videoUrl, index) => (
          <VideoBox key={index} videoUrl={videoUrl} />
        ))}
      </div>
    </div>
  );
};

export default Home;
