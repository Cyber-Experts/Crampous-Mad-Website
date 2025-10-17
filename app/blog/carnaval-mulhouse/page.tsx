import Link from "next/link";

export default function CarnavalMulhousePage() {
  return (
    <main>
      {/* Header avec image de fond */}
      <header className="relative h-[400px] w-full">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('/images/bandeau_3-1.png')` }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-display mb-6" style={{fontFamily: 'Berkshire Swash, serif'}}>
            Le Carnaval de Mulhouse fait son grand retour !
          </h1>
          
          {/* Barre avec losange */}
          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-white"></div>
            <div className="w-2 h-2 bg-white transform rotate-45 mx-4"></div>
            <div className="w-16 h-0.5 bg-white"></div>
          </div>
        </div>
      </header>

      {/* Contenu de l'article */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Métadonnées */}
        <div className="text-center mb-8 text-gray-600">
          <p>28 février 2017 • Author: Cyber Experts</p>
        </div>

        {/* Image illustrative */}
        <div className="mb-8">
          <img 
            src="/images/carnaval-de-mulhouse-chars-place-reunion-58533-470-0.jpg" 
            alt="Carnaval de Mulhouse" 
            className="w-full h-64 object-cover shadow-lg"
          />
        </div>

        {/* Titre principal */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#076993] mb-4 font-lora">
            CARNAVAL DE MULHOUSE – DU 3 AU 5 MARS 2017
          </h2>
        </div>

        {/* Contenu principal */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800 mb-6 text-lg font-lora leading-relaxed">
            Du 3 au 5 mars 2017 se tiendra la nouvelle édition du Carnaval de Mulhouse. Le thème de cette nouvelle édition sera le <strong>« Carnaval des Frontières du Grand Est »</strong>.
          </p>

          <p className="text-gray-800 mb-6 text-lg font-lora leading-relaxed">
            Métamorphosé cette année, des nouveautés sont prévues pour émerveiller petits et grands et ainsi participer à la vie de la ville de Mulhouse : l'élection du prince du Carnaval, un concours de fresques, un village de Carnaval, le retour d'une cavalcade de nuit et d'autres animations ! Le Carnaval réputé pour mettre en avant les traditions locales mettra à l'honneur cette année la Suisse, l'Allemagne, la Belgique, l'Alsace et particulièrement Mulhouse.
          </p>

          <p className="text-gray-800 mb-6 text-lg font-lora leading-relaxed">
            Toujours dans la bonne humeur, le Carnaval de Mulhouse est l'opportunité de vivre un moment de partage rythmé par les jets de confettis annuels !
          </p>

          <div className="bg-[#076993] text-white p-6 mb-8">
            <p className="text-center text-lg font-lora">
              <strong>A l'occasion de ces trois jours de fête, la crêperie Crampous Mad vous invite à venir déguster ses délicieuses galettes au sarrasin !</strong> En plein centre-ville de Mulhouse, la crêperie est idéalement située pour déjeuner, goûter ou dîner durant le Carnaval !
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-block bg-[#076993] text-white px-8 py-4 font-lora font-semibold hover:bg-[#065a7a] transition-colors"
          >
            ← Retour à L'actu
          </Link>
        </div>
      </article>
    </main>
  );
}
