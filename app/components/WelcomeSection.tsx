import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section id="start-section" className="max-w-6xl mx-auto px-6 py-16 text-center bg-white">
      {/* Titre principal "Bienvenue chez Crampous Mad" */}
      <div className="mb-8">
        <h1 className="text-[#076993] text-5xl md:text-6xl font-body" style={{ fontFamily: 'Berkshire Swash, cursive' }}>
          Bienvenue chez Crampous Mad
        </h1>
      </div>
      
      {/* Ligne de séparation avec "depuis • 1980 •" */}
      <div className="relative flex items-center justify-center mb-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#076993]"></div>
        </div>
        <div className="relative bg-white px-6">
          <div className="text-center">
            <div className="text-gray-500 text-sm mb-1">depuis</div>
            <div className="text-[#076993] text-lg font-medium">• 1980 •</div>
          </div>
        </div>
      </div>
      

      
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <div className="md:w-1/3 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="/images/Crampous-Mad-2.jpg" 
              alt="Notre histoire" 
              className="w-full h-auto rounded shadow-lg transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
          <h3 className="text-[#262559] text-2xl mt-4 font-body" style={{ fontFamily: 'Lora, serif' }}>
            Notre histoire
          </h3>
          <p className="text-sm leading-6 mt-2 font-sans text-gray-700">
            Depuis son ouverture le 26 septembre 1980 la crêperie Crampous Mad est l'union culinaire entre l'Alsace et la Bretagne. Les années passent... La crêperie devient un lieu emblématique du centre-ville de Mulhouse...
          </p>
        </div>
        <div className="md:w-1/3 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="/images/façade.jpg" 
              alt="Le restaurant" 
              className="w-full h-auto rounded shadow-lg transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
          <h3 className="text-[#262559] text-2xl mt-4 font-body" style={{ fontFamily: 'Lora, serif' }}>
            Le restaurant
          </h3>
          <p className="text-sm leading-6 mt-2 font-sans text-gray-700">
            Découvrez la nouvelle ambiance authentique et conviviale, un concept familial qui prend ses aises sur deux niveaux dans une ancienne maison alsacienne du 16ème siècle.
          </p>
        </div>
        <div className="md:w-1/3 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="/images/Crampous_mad_associes.jpg" 
              alt="L'équipe" 
              className="w-full h-auto rounded shadow-lg transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
          <h3 className="text-[#262559] text-2xl mt-4 font-body" style={{ fontFamily: 'Lora, serif' }}>
            L'équipe
          </h3>
          <p className="text-sm leading-6 mt-2 font-sans text-gray-700">
            Françoise, David et toute l'équipe vous accueillent à la crêperie avec leur sourire et assurent un service en continu du lundi au jeudi de 11h30 à 21h30 et de 11h30 à 22h les vendredis et samedis.
          </p>
        </div>
      </div>
      
      <div className="mt-10 flex justify-center">
        <div className="stm_button flex items-center">
          {/* Séparateur gauche */}
          <div className="stm_separator_wrap __left pr-8">
            <span className="stm_button_separator block h-px w-full bg-[#262559]" style={{width: '100%', height: '1px', backgroundColor: '#262559'}}></span>
          </div>
          
          {/* Bouton central */}
          <div className="stm_link_wrap">
            <Link 
              href="/notre-creperie" 
              className="stm_button_link text-[#076993] font-normal italic text-lg px-11 py-2 inline-block bg-[#262559] border border-white/55 outline-4 outline-[#262559] transition-all duration-400 hover:bg-[#232323] hover:outline-[#232323] hover:border-white/40"
              style={{fontWeight: '400', fontStyle: 'italic', color: '#076993'}}
            >
              <span className="stm_button-link_text text-white">Qui sommes-nous ?</span>
            </Link>
          </div>
          
          {/* Séparateur droit */}
          <div className="stm_separator_wrap __right pl-8">
            <span className="stm_button_separator block h-px w-full bg-[#262559]" style={{width: '100%', height: '1px', backgroundColor: '#262559'}}></span>
          </div>
        </div>
      </div>
    </section>
  );
}
