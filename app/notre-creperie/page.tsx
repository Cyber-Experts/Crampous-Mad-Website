"use client";

import { useState, useEffect } from "react";
import BottomSeparator from "../components/BottomSeparator";
import TopSeparator from "../components/SectionSeparator";
import CreperieChiffres from "../components/CreperieChiffres";

export default function NotreCreperiePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);
  
  const images = [
    "/images/F17A4467-570x460.jpg",
    "/images/IMG_4421-570x460.jpg", 
    "/images/F17A4391-570x460.jpg",
    "/images/F17A4397-570x460.jpg"
  ];

  const productImages = [
    "/images/IMG_0014-570x460.jpg",
    "/images/Capture-570x356.jpg",
    "/images/IMG_9411-900x485-570x460.jpg",
    "/images/Untitled-design.jpg"
  ];

  const historyImages = [
    "/images/Crampous-Mad-2-570x480.jpg",
    "/images/crampous3.jpg",
    "/images/Crampous-Mad-7-570x480.jpg",
    "/images/Crampous-Mad-6-570x480.jpg",
    "/images/crampous2.jpg",
    "/images/Crampous-Mad-5-570x480.jpg",
    "/images/Crampous-Mad-4-570x480.jpg",
    "/images/Crampous-Mad-3-570x480.jpg",
    "/images/crampous-303x480.jpg",
    "/images/crampous1.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [productImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHistoryIndex((prevIndex) => (prevIndex + 1) % historyImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [historyImages.length]);

  return (
    <main>
      <header className="relative h-[400px] w-full">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('/images/bandeau_3-1.png')` }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <h1 className="text-white font-cookie mb-6" style={{ fontSize: '60px', lineHeight: '70px' }}>Notre Crêperie</h1>
          
          {/* Barre avec losange */}
          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-white"></div>
            <div className="w-2 h-2 bg-white transform rotate-45 mx-4"></div>
            <div className="w-16 h-0.5 bg-white"></div>
          </div>
        </div>
        {/* Séparateur en bas du header */}
        <BottomSeparator color="#ffffff" overlay={true} />
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[#076993] mb-6 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>La crêperie Crampous Mad</h2>
          <p className="text-[#262559] font-lora font-semibold mb-4" style={{ fontSize: '14px', lineHeight: '24px' }}>
            Depuis plus de 40 ans, la crêperie Crampous Mad est l'union culinaire entre l'Alsace et la Bretagne.
          </p>
          <p className="text-justify mb-4 font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
            Créée en 1980, la crêperie est reprise en 2016 par deux nouveaux propriétaires et associés : Françoise RITZENTHALER et David CHARLES. Ils prennent alors possession des lieux avec un objectif : redonner à la Crêperie une nouvelle identité en rénovant totalement le Restaurant mais en conservant l'âme de ce lieu emblématique de Mulhouse.
          </p>
          <p className="font-lora font-semibold mb-2" style={{ fontSize: '14px', lineHeight: '22px' }}><strong>Le concept :</strong></p>
          <p className="text-justify font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
            La Crêperie Crampous Mad est un établissement du cœur commerçant de Mulhouse ; un lieu familier qui prend ses aises sur deux niveaux dans une ancienne maison alsacienne, unique en ce centre urbain. L'atmosphère réjouissante et le design ludique du restaurant oscillent entre deux styles et deux cultures. Réalisée avec une certaine fraîcheur tout en s'inscrivant dans le respect d'un cadre historique, la décoration d'inspiration tantôt bretonne tantôt alsacienne, est patinée et graphique et fait la part belle aux motifs et à des notes marines subtilement pétillantes. À la fois authentique et originale, la Crêperie souhaite trouver son public auprès de générations confondues, partageant avec plaisir la convivialité d'un met simple mais travaillé, les galettes au sarrasin et crêpes au froment.
          </p>
        </div>
        <div className="flex items-center">
          <div className="relative w-[570px] h-[460px] overflow-hidden bg-[#076993] mx-auto">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Intérieur crêperie"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            
            {/* Indicateurs de navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-gray-600" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#076993] text-white relative overflow-hidden">
        {/* Séparateur en haut de la section */}
        <TopSeparator color="#ffffff" />
        
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <div className="flex items-center">
            <div className="relative w-[570px] h-[460px] overflow-hidden bg-white mx-auto">
              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Produits locaux"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentProductIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              
              {/* Indicateurs de navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentProductIndex ? "bg-gray-600" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-6 font-cookie" style={{ fontSize: '60px', lineHeight: '70px' }}>Des Produits Locaux</h2>
            <p className="text-black/90 text-justify mb-4 font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Françoise et David apportent une grande importance à travailler le plus possible avec des produits locaux, issus d'une agriculture raisonnée.
            </p>
            <p className="text-black/90 text-justify mb-4 font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Les produits bretons sont également sélectionnés avec soin pour leur goût et leur provenance.
            </p>
            <p className="text-black/90 text-justify mb-4 font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Nos galettes et crêpes sont cuisinées une à une à la demande !
            </p>
            <p className="text-black/90 text-justify mb-4 font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              La plupart de nos légumes sont cultivés par la <a href="http://www.ferme-fischer.fr/" target="_blank" rel="noreferrer" className="underline">ferme Fischer</a> à Zimmersheim, par le biais d'une agriculture locale. Toute l'année notre producteur nous propose une sélection de légumes de saison et en vente directe !
            </p>
            <p className="text-black/90 text-justify font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Nos œufs sont 100% alsaciens et proviennent de la ferme <a href="http://www.prim-vert.com/index.html" target="_blank" rel="noreferrer" className="underline">Prim'Vert</a> située à MICHELBACH-LE-HAUT. Les œufs Prim'Vert, c'est avant tout une fraîcheur incomparable et un goût préservé.
            </p>
          </div>
        </div>
        
        {/* Séparateur en bas de la section */}
        <BottomSeparator color="#ffffff" />
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[#076993] mb-6 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>Notre histoire</h2>
          <p className="text-justify mb-4 font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
            La crêperie Crampous Mad a été créé le vendredi 26 septembre 1980. Les heureux propriétaires Vicki et Bertrand, ont alors ouvert la première crêperie mulhousienne pouvant accueillir 50 couverts.
          </p>
          <p className="text-justify mb-4 font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
            Les années passent… La crêperie devient une référence et un lieu emblématique au centre-ville de Mulhouse. En 1990, pour répondre à une demande croissante des clients, les deux propriétaires décident de racheter le bâtiment mitoyen afin d'agrandir le restaurant et d'augmenter sa capacité d'accueil à 90 couverts. L'équipe s'agrandit pour arriver jusqu'à 10 personnes !
          </p>
          <p className="text-justify mb-4 font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
            La carte, n'a cessé de s'étoffer au fil du temps, avec toujours la même volonté de conserver les traditions bretonnes mais en s'adaptant aux goûts et aux envies des alsaciens ! La rencontre est à la fois belle et gourmande ! Au total c'est plus de 100 recettes qui sont conservées précieusement et font la réputation de la Crêperie.
          </p>
          <p className="text-justify mb-4 font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
            « Notre restaurant c'est également de belles rencontres humaines avec les clients, dont la plupart sont devenus des amis fidèles » nous confient Vicki et Bertrand qui ont souvent rencontré plusieurs générations d'une même famille. Crampous Mad est alors l'endroit idéal pour se retrouver et partager un moment convivial.
          </p>
          <p className="text-justify mb-4 font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
            Après plus de 30 ans d'existence, des milliers de crêpes et de fabuleuses rencontres, les anciens dirigeants décident en 2015 de céder leur restaurant pour profiter d'une retraite bien méritée. Pour autant, ils ne voulaient pas laisser leur «trésor» entre les mains d'un inconnu. Les deux amis Françoise et David souhaitent se lancer dans l'aventure entrepreneuriale et connaissent depuis plusieurs années Vicki et Bertrand. Lorsque ces derniers leur annoncent la mise en vente de la crêperie, ils ne peuvent s'empêcher de se lancer et deviennent alors les candidats rêvés !
          </p>
          <p className="text-justify font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
            La passation se fait progressivement, en toute confiance, afin qu'au-delà des murs, ce soit l'âme de la crêperie Crampous Mad qui se transmette…
          </p>
        </div>
        <div className="flex items-center">
          <div className="relative w-[570px] h-[460px] overflow-hidden bg-[#076993] mx-auto">
            {historyImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Histoire Crampous Mad"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentHistoryIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            
            {/* Indicateurs de navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {historyImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHistoryIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentHistoryIndex ? "bg-gray-600" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CreperieChiffres />
    </main>
  );
}


