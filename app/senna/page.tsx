import Image from "next/image"
export default function Page () {
    return(
        <section>
             <div className="bg-gradient-to-r from-yellow-400 to-green-950 min-h-screen">
      <header className="text-green-500 text-center py-10">
        <h1 className="text-4xl font-bold">Ayrton Senna</h1>
      </header>
      <main className="container mx-auto py-8">
        <section className="mb-8">
        <div className="bg-blue-950 text-white rounded-lg p-4 shadow-md">
  <h2 className="text-2xl font-semibold mb-4">Ayrton Senna</h2>
  <p className="text-lg">
    Ayrton Senna, cujo nome completo era Ayrton Senna da Silva, foi um dos pilotos de Fórmula 1 mais icônicos e reverenciados da história do automobilismo. Nascido em 21 de março de 1960 em São Paulo, Brasil, e falecido tragicamente em 1º de maio de 1994 durante o Grande Prêmio de San Marino, Senna deixou um legado duradouro que transcende as pistas de corrida.
  </p>
  <p className="text-lg mt-4">
    Senna era conhecido por sua paixão, determinação e habilidade excepcionais como piloto. Desde cedo, ele mostrou um interesse profundo pelo automobilismo e começou a competir em karting. Sua ascensão meteórica o levou a competir em categorias de base e, finalmente, a ingressar na Fórmula 1 em 1984 com a equipe Toleman.
  </p>
  <p className="text-lg mt-4">
    No entanto, foi com a equipe McLaren que Senna alcançou seu maior sucesso. Ele conquistou três campeonatos mundiais consecutivos de Fórmula 1 em 1988, 1990 e 1991. Sua rivalidade épica com o piloto francês Alain Prost é uma das mais memoráveis da história da F1, e suas batalhas nas pistas são lendárias.
  </p>
  <p className="text-lg mt-4">
    O estilo de pilotagem de Senna era caracterizado por sua agressividade e habilidade em condições de pista molhada, onde ele muitas vezes brilhava. Ele era conhecido por suas voltas de classificação impressionantes e por pilotar no limite absoluto. Seu famoso capacete amarelo com uma faixa verde é um dos ícones mais reconhecíveis da Fórmula 1.
  </p>
  <p className="text-lg mt-4">
    Além de suas realizações nas pistas, Ayrton Senna era igualmente admirado por seu compromisso com causas sociais e filantrópicas. Ele era um embaixador da UNICEF e estava envolvido em inúmeras obras de caridade em seu país natal, o Brasil.
  </p>
  <p className="text-lg mt-4">
    Ayrton Senna deixou um impacto indelével no mundo do esporte a motor e continua sendo uma figura inspiradora para pilotos e fãs de automobilismo em todo o mundo. Sua morte prematura em um acidente durante uma corrida em Imola, Itália, foi um momento trágico que chocou o mundo, mas seu legado perdura através da Fundação Ayrton Senna, que continua a trabalhar para melhorar a educação e a vida de crianças no Brasil.
  </p>
  <p className="text-lg mt-4">
    Ayrton Senna não era apenas um piloto excepcional, mas também um ser humano notável que dedicou sua vida a suas paixões e à ajuda aos menos afortunados. Sua história continua a inspirar gerações futuras a buscar a excelência e a fazer a diferença no mundo, tanto nas pistas quanto fora delas.
  </p>
</div>

        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Galeria de Imagens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="relative">
              <Image
                src="/yt1.jpg"
                alt="Ayrton Senna 1"
                width={600}
                height={400}
                className="transition-transform transform hover:scale-110"
              />
            </div>
            <div className="relative">
              <Image
                src="/yt2.jpg"
                alt="Ayrton Senna 2"
                width={600}
                height={400}
                className="transition-transform transform hover:scale-110"
              />
            </div>
            <div className="relative">
              <Image
                src="/yt3.jpg"
                alt="Ayrton Senna 2"
                width={600}
                height={400}
                className="transition-transform transform hover:scale-110"
              />
            </div>
            <div className="relative">
              <Image
                src="/yt4.jpg"
                alt="Ayrton Senna 2"
                width={600}
                height={400}
                className="transition-transform transform hover:scale-110"
              />
            </div>
            <div className="relative">
              <Image
                src="/yt5.jpg"
                alt="Ayrton Senna 2"
                width={600}
                height={400}
                className="transition-transform transform hover:scale-110"
              />
            </div>
            <div className="relative">
              <Image
                src="/yt9.jpg"
                alt="Ayrton Senna 2"
                width={600}
                height={400}
                className="transition-transform transform hover:scale-110"
              />
            </div>
            <div className="relative">
              <Image
                src="/yt7.jpg"
                alt="Ayrton Senna 2"
                width={600}
                height={400}
                className="transition-transform transform hover:scale-110"
              />
            </div>
            <div className="relative">
              <Image
                src="/yt8.jpg"
                alt="Ayrton Senna 2"
                width={600}
                height={300}
                className="transition-transform transform hover:scale-110"
              />
            </div>
            <div className="relative">
              <Image
                src="/yt10.jpg"
                alt="Ayrton Senna 2"
                width={600}
                height={400}
                className="transition-transform transform hover:scale-110"
              />
            </div>
            
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="bg-blue-950 p-4 rounded-lg shadow-md">
              <iframe
                width="100%"
                height="315"
                src="/vdy1.mp4"
                title="Ayrton Senna Video 1"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-blue-950 p-4 rounded-lg shadow-md">
              <iframe
                width="100%"
                height="315"
                src="vdy2.mp4"
                title="Ayrton Senna Video 2"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-blue-950 p-4 rounded-lg shadow-md">
              <iframe
                width="100%"
                height="315"
                src="vdy3.mp4"
                title="Ayrton Senna Video 2"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-blue-950 p-4 rounded-lg shadow-md">
              <iframe
                width="100%"
                height="315"
                src="vdy4.mp4"
                title="Ayrton Senna Video 2"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-blue-950 p-4 rounded-lg shadow-md">
              <iframe
                width="100%"
                height="315"
                src="vdy5.mp4"
                title="Ayrton Senna Video 2"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-blue-950 p-4 rounded-lg shadow-md">
              <iframe
                width="100%"
                height="315"
                src="vdy6.mp4"
                title="Ayrton Senna Video 2"
                allowFullScreen
              ></iframe>
            </div>
            
          </div>
        </section>
      </main>
    </div>
        </section>
    )
}