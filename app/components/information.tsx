import React from "react";
import Image from "next/image";

export default function Information() {
  return (
    <section className="bg-gray-700 h-screen flex flex-col justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2">
          <Image
            src={"/safety-car.jpg"}
            alt="Logo"
            width={400}
            height={400}
          />
        </div>
        
        <div className="md:w-1/2 md:ml-8 text-white">
          <h2 className="text-4xl font-bold mb-4">Formula 1</h2>
          <p className="mb-6">
            A Fórmula 1 é a categoria de automobilismo mais popular do mundo,
            conhecida por seus carros de alta velocidade, equipes renomadas e
            corridas emocionantes em circuitos famosos em todo o globo.
          </p>
          <p>
            A Fórmula 1 atrai pilotos talentosos e milhões de fãs apaixonados
            que acompanham cada corrida para ver quem ficará no topo do
            pódio.
          </p>
        </div>
      </div>
    </section>
  );
}
