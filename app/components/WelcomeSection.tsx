import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section id="start-section" className="max-w-6xl mx-auto px-6 py-16 text-center bg-white">
      {/* Titre principal "Bienvenue chez Crampous Mad" */}
      <div className="mb-8">
        <h1 className="text-[#076993] text-5xl md:text-6xl font-cookie font-normal">
          Bienvenue chez Crampous Mad
        </h1>
      </div>
      
      {/* Ligne de séparation avec image picto1.png */}
      <div className="relative flex items-center justify-center mb-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#076993]"></div>
        </div>
        <div className="relative bg-white px-6">
          <div className="text-center">
            <div className="aio-icon-img" style={{ fontSize: '48px', display: 'inline-block' }}>
              <img 
                decoding="async" 
                className="img-icon" 
                alt="" 
                src="/images/picto1.png"
                style={{ width: '48px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
      

      
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <div className="md:w-1/3 group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg border-4 border-white shadow-lg">
            <img 
              src="/images/Crampous-Mad-2.jpg" 
              alt="Notre histoire" 
              className="w-full h-auto rounded transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2" 
              style={{ transformOrigin: 'center center' }}
            />
          </div>
          <h3 className="text-[#262559] text-2xl mt-4 font-body italic font-normal" style={{ fontSize: '24px', lineHeight: '30px' }}>
            Notre histoire
          </h3>
          <p className="text-sm leading-6 mt-2 text-black font-sans" style={{ fontSize: '14px', lineHeight: '22px' }}>
            Depuis son ouverture le 26 septembre 1980 la crêperie Crampous Mad est l'union culinaire entre l'Alsace et la Bretagne. Les années passent... La crêperie devient un lieu emblématique du centre-ville de Mulhouse...
          </p>
        </div>
        <div className="md:w-1/3 group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg border-4 border-white shadow-lg">
            <img 
              src="/images/façade.jpg" 
              alt="Le restaurant" 
              className="w-full h-auto rounded transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2" 
              style={{ transformOrigin: 'center center' }}
            />
          </div>
          <h3 className="text-[#262559] text-2xl mt-4 font-body italic font-normal" style={{ fontSize: '24px', lineHeight: '30px' }}>
            Le restaurant
          </h3>
          <p className="text-sm leading-6 mt-2 text-black font-sans" style={{ fontSize: '14px', lineHeight: '22px' }}>
            Découvrez la nouvelle ambiance authentique et conviviale, un concept familial qui prend ses aises sur deux niveaux dans une ancienne maison alsacienne du 16ème siècle.
          </p>
        </div>
        <div className="md:w-1/3 group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg border-4 border-white shadow-lg">
            <img 
              src="/images/Crampous_mad_associes.jpg" 
              alt="L'équipe" 
              className="w-full h-auto rounded transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2" 
              style={{ transformOrigin: 'center center' }}
            />
          </div>
          <h3 className="text-[#262559] text-2xl mt-4 font-body italic font-normal" style={{ fontSize: '24px', lineHeight: '30px' }}>
            L'équipe
          </h3>
          <p className="text-sm leading-6 mt-2 text-black font-sans" style={{ fontSize: '14px', lineHeight: '22px' }}>
            Françoise, David et toute l'équipe vous accueillent à la crêperie avec leur sourire et assurent un service en continu du lundi au jeudi de 11h30 à 21h30 et de 11h30 à 22h les vendredis et samedis.
          </p>
        </div>
      </div>
      
      <div className="mt-10 flex justify-center">
        <div className="stm_button flex items-center w-full max-w-6xl">
          {/* Séparateur gauche */}
          <div className="stm_separator_wrap __left flex-1 pr-12">
            <div className="h-0.5 w-full bg-[#262559]"></div>
          </div>
          
          {/* Bouton central */}
          <div className="stm_link_wrap flex-shrink-0">
            <Link 
              href="/notre-creperie" 
              className="stm_button_link text-[#076993] px-11 py-2 inline-block bg-[#262559] border border-white/55 outline-4 outline-[#262559] transition-all duration-400 hover:bg-[#232323] hover:outline-[#232323] hover:border-white/40 font-body font-normal italic"
              style={{ fontSize: '18px', color: '#076993' }}
            >
              <span className="stm_button-link_text text-white">Qui sommes-nous ?</span>
            </Link>
          </div>
          
          {/* Séparateur droit */}
          <div className="stm_separator_wrap __right flex-1 pl-12">
            <div className="h-0.5 w-full bg-[#262559]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
