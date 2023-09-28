
import React from 'react';
import RaceCardGrid from '../components/RaceCard';
import Footer from '../components/footer';

const raceCardsData = [
  {
    title: 'Ferrari',
    description: 'Descrição da corrida 1',
    imageUrl: '/Ferrari5.jpg',
  },
  {
    title: 'Mercedes',
    description: 'Descrição da corrida 2',
    imageUrl: 'Mercedes.jpg',
  },
  {
    title: 'Red Bull',
    description: 'Descrição da corrida 3',
    imageUrl: 'Red-Bull.jpg',
  },
  {
    title: 'Mclaren',
    description: 'Descrição da corrida 3',
    imageUrl: 'Mclaren.jpg',
  },
  {
    title: 'Aston Martin',
    description: 'Descrição da corrida 3',
    imageUrl: 'Aston-Martin.jpg',
  },
  {
    title: 'Alpine',
    description: 'Descrição da corrida 3',
    imageUrl: 'Alpine.jpg',
  },
  {
    title: 'Alpha Tauri',
    description: 'Descrição da corrida 3',
    imageUrl: 'Alpha-Tauri.jpg',
  },
  {
    title: 'Hass',
    description: 'Descrição da corrida 3',
    imageUrl: 'Hass.jpg',
  },
  {
    title: 'Alfa Romeo',
    description: 'Descrição da corrida 3',
    imageUrl: 'Alfa-Romeo.jpg',
  },
  {
    title: 'Williams',
    description: 'Descrição da corrida 3',
    imageUrl: 'Williams.jpg',
  },
];

export default function Page () {
    return(
        <section>
             <div className="container mx-auto py-8">
                <h1 className="text-3xl font-semibold mb-4">Equipes</h1>
                <RaceCardGrid raceCards={raceCardsData} />
             </div>
             <Footer/>
        </section>
    )
}