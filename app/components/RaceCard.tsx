import Image from 'next/image';
import React from 'react';

interface RaceCard {
  title: string;
  description: string;
  imageUrl: string;
}

interface RaceCardGridProps {
  raceCards: RaceCard[];
}

function RaceCardGrid({ raceCards }: RaceCardGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {raceCards.map((race, index) => (
        <div
          key={index}
          className="bg-slate-500 rounded-lg p-4 shadow-md transition-transform transform hover:scale-105"
        >
          <Image src={race.imageUrl} alt={race.title} className="w-full h-auto rounded-lg" />
          <h2 className="text-red-600 text-xl font-semibold mt-2">{race.title}</h2>
          <p className="text-white mt-2">{race.description}</p> 
        </div>
      ))}
    </div>
  );
}

export default RaceCardGrid;
