import HeroSlider from "./components/HeroSlider";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import ImageSection from "./components/ImageSection";
import NewsSection from "./components/NewsSection";
import TopSeparator from "./components/SectionSeparator";
import BottomSeparator from "./components/BottomSeparator";
import ImageWithSeparators from "./components/ImageWithSeparators";

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
            ctaHref: "/notre-creperie",
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
              <ImageWithSeparators 
                imageSrc="/images/interieur-table.jpg"
                height="70vh"
                minHeight="500px"
                separatorColor="#ffffff"
              />
              
              <NewsSection />
              
              {/* Image de fond avec séparateurs en overlay */}
              <ImageWithSeparators 
                imageSrc="/images/table-ronde-restaurent.jpg"
                height="70vh"
                minHeight="500px"
                separatorColor="#ffffff"
              />
      </main>
  );
}