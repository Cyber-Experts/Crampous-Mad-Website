import Link from "next/link";

export default function ReservationPage() {
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
            Réservation
          </h1>
          
          {/* Barre avec losange */}
          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-white"></div>
            <div className="w-2 h-2 bg-white transform rotate-45 mx-4"></div>
            <div className="w-16 h-0.5 bg-white"></div>
          </div>
        </div>
      </header>

      {/* Section principale */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Titre principal avec icône */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#076993] mb-8" style={{fontFamily: 'Berkshire Swash, serif'}}>
              Toute l'équipe est heureuse de vous accueillir
            </h2>
            
            {/* Icône avec barres */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-0.5 bg-[#262559]"></div>
              <div className="mx-4">
                <img src="/images/picto1.png" alt="Icône réservation" className="w-12 h-12" />
              </div>
              <div className="w-16 h-0.5 bg-[#262559]"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-[#262559] mb-4">
                Vous pouvez réserver votre table par téléphone ou nous contacter par mail pour l'organisation de vos événements privés.
              </p>
              <p className="text-lg font-semibold text-[#262559]">
                Les crêpes et galettes sont disponibles à emporter.
              </p>
            </div>
          </div>

          {/* Section des 3 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Réservation par téléphone */}
            <div className="text-center">
              <h3 className="text-2xl font-normal text-[#076993] mb-4" style={{fontFamily: 'Berkshire Swash, serif'}}>
                Réservation par téléphone
              </h3>
              <p className="text-gray-700 mb-6">
                Vous pouvez nous joindre par téléphone pour effectuer vos réservations
              </p>
              
              {/* Bouton avec barres - Design identique à Qui sommes-nous */}
              <div className="stm_button flex items-center w-full max-w-4xl">
                {/* Séparateur gauche */}
                <div className="stm_separator_wrap __left flex-1 pr-8">
                  <div className="h-0.5 w-full bg-[#076993]"></div>
                </div>
                
                {/* Bouton central */}
                <div className="stm_link_wrap flex-shrink-0">
                  <a 
                    href="tel:0389457943" 
                    className="stm_button_link text-[#076993] font-normal italic text-lg px-11 py-2 inline-block bg-[#262559] border border-white/55 outline-4 outline-[#262559] transition-all duration-400 hover:bg-[#232323] hover:outline-[#232323] hover:border-white/40"
                    style={{fontWeight: '400', fontStyle: 'italic', color: '#076993'}}
                  >
                    <span className="stm_button-link_text text-white">03 89 45 79 43</span>
                  </a>
                </div>
                
                {/* Séparateur droit */}
                <div className="stm_separator_wrap __right flex-1 pl-8">
                  <div className="h-0.5 w-full bg-[#076993]"></div>
                </div>
              </div>
            </div>

            {/* Image centrale */}
            <div className="flex items-center justify-center">
              <img 
                src="/images/F17A4434.jpg" 
                alt="Intérieur de la crêperie" 
                className="w-full h-64 object-cover shadow-lg"
              />
            </div>

            {/* Événement privé */}
            <div className="text-center">
              <h3 className="text-2xl font-normal text-[#076993] mb-4" style={{fontFamily: 'Berkshire Swash, serif'}}>
                Événement privé
              </h3>
              <p className="text-gray-700 mb-6">
                Si vous le souhaitez vous pouvez privatiser une partie du restaurant pour tous types d'événements privés : anniversaire, fête de famille, etc.
              </p>
              
              {/* Bouton avec barres - Design identique à Qui sommes-nous */}
              <div className="stm_button flex items-center w-full max-w-4xl">
                {/* Séparateur gauche */}
                <div className="stm_separator_wrap __left flex-1 pr-8">
                  <div className="h-0.5 w-full bg-[#076993]"></div>
                </div>
                
                {/* Bouton central */}
                <div className="stm_link_wrap flex-shrink-0">
                  <Link 
                    href="/contactez-nous" 
                    className="stm_button_link text-[#076993] font-normal italic text-lg px-11 py-2 inline-block bg-[#262559] border border-white/55 outline-4 outline-[#262559] transition-all duration-400 hover:bg-[#232323] hover:outline-[#232323] hover:border-white/40"
                    style={{fontWeight: '400', fontStyle: 'italic', color: '#076993'}}
                  >
                    <span className="stm_button-link_text text-white">Contactez nous</span>
                  </Link>
                </div>
                
                {/* Séparateur droit */}
                <div className="stm_separator_wrap __right flex-1 pl-8">
                  <div className="h-0.5 w-full bg-[#076993]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}