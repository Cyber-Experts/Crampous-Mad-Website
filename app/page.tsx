import HeroSlider from "./components/HeroSlider";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import ImageSection from "./components/ImageSection";
import NewsSection from "./components/NewsSection";
import TopSeparator from "./components/SectionSeparator";
import BottomSeparator from "./components/BottomSeparator";

export default function Home() {
  return (
    <main>
      <HeroSlider
        slides={[
          {
            imageSrc: "/images/bandeau_3.jpg",
            title: "Un cadre authentique et convivial",
            ctaHref: "/notre-creperie",
            ctaLabel: "Découvrir",
          },
          {
            imageSrc: "/images/F17A4546.jpg",
            title: "Découvrez notre carte",
            ctaHref: "https://crampous-mad.fr/la-carte",
            ctaLabel: "Découvrir",
          },
          {
            imageSrc: "/images/restaurant.jpg",
            title: "Suivez notre actualité !",
            ctaHref: "/blog",
            ctaLabel: "Découvrir",
          },
        ]}
      />

      {/* Header avec logo en dessous de l'image - uniquement pour la home page */}
      <Header isHomePage={true} />

      <WelcomeSection />
      
              {/* Image de fond après "Qui sommes-nous ?" avec séparateurs */}
              <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
                <div 
                  className="absolute inset-0 w-full h-full high-quality-bg"
                  style={{ 
                    backgroundImage: `url('/images/interieur-table.jpg')`
                  }}
                />
                {/* Séparateur en haut de l'image */}
                <TopSeparator color="#ffffff" overlay={true} />
                {/* Séparateur en bas de l'image */}
                <BottomSeparator color="#ffffff" overlay={true} />
              </section>
              
              <NewsSection />
              
              {/* Image de fond avec séparateurs en overlay */}
              <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
                <div 
                  className="absolute inset-0 w-full h-full high-quality-bg"
                  style={{ 
                    backgroundImage: `url('/images/table-ronde-restaurent.jpg')`
                  }}
                />
                {/* Séparateur en haut de l'image */}
                <TopSeparator color="#ffffff" overlay={true} />
                {/* Séparateur en bas de l'image */}
                <BottomSeparator color="#ffffff" overlay={true} />
              </section>
      </main>
  );
}