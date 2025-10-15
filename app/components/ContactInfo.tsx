import TopSeparator from "./SectionSeparator";
import BottomSeparator from "./BottomSeparator";

export default function ContactInfo() {
  return (
    <section className="py-0 bg-[#076993] text-white relative overflow-hidden">
      {/* Séparateur en haut de la section */}
      <TopSeparator color="#ffffff" />
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adresse */}
          <div className="text-center">
            <div className="text-4xl mb-4 text-white">
              <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display mb-4" style={{ fontFamily: 'Berkshire Swash, serif' }}>
              Notre adresse
            </h3>
            <p className="text-lg">
              14 Rue des Tondeurs<br/>
              68100 Mulhouse
            </p>
          </div>

          {/* Téléphone */}
          <div className="text-center">
            <div className="text-4xl mb-4 text-white">
              <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display mb-4" style={{ fontFamily: 'Berkshire Swash, serif' }}>
              Téléphone
            </h3>
            <p className="text-lg">
              <a href="tel:0389457943" className="hover:underline">
                03 89 45 79 43
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="text-4xl mb-4 text-white">
              <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-display mb-4" style={{ fontFamily: 'Berkshire Swash, serif' }}>
              E-mail
            </h3>
            <p className="text-lg">
              <a href="mailto:contact@crampous-mad.fr" className="hover:underline">
                contact@crampous-mad.fr
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Séparateur en bas de la section */}
      <BottomSeparator color="#ffffff" />
    </section>
  );
}
