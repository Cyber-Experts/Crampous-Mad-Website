"use client";

import Link from "next/link";
import BottomSeparator from "../components/BottomSeparator";
import ImageWithSeparators from "../components/ImageWithSeparators";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Se stationner au centre ville de Mulhouse",
      excerpt: "Découvrez nos trucs et astuces pour se stationner au centre...",
      image: "/images/stationnement-mulhouse.jpg",
      date: "17 janvier",
      time: "9 h 33 min",
      category: "actualite",
      href: "/blog/stationnement-mulhouse"
    },
    {
      id: 2,
      title: "Potagers Urbains au centre-ville de Mulhouse",
      excerpt: "Dans le cadre de la Journée Citoyenne 2017 et en partenaria...",
      image: "/images/20170504_093426.jpg",
      date: "2 mai",
      time: "17 h 33 min",
      category: "non-classe",
      href: "/blog/potagers-urbains"
    },
    {
      id: 3,
      title: "Le Carnaval de Mulhouse fait son grand retour !",
      excerpt: "CARNAVAL DE MULHOUSE – DU 3 AU 5 MARS 2017 Du 3 au 5 mars ...",
      image: "/images/carnaval-de-mulhouse-chars-place-reunion-58533-470-0.jpg",
      date: "28 février",
      time: "14 h 55 min",
      category: "non-classe",
      href: "/blog/carnaval-mulhouse"
    },
    {
      id: 4,
      title: "Le retour de la patinoire enchantée à Mulhouse !",
      excerpt: "Patinoire enchantée – Cour des Maréchaux – Du 24 novem...",
      image: "/images/noel-2015-a-mulhouse-la-patinoire-enchantee-45619-470-0.jpg",
      date: "24 novembre",
      time: "11 h 14 min",
      category: "evenement",
      href: "/blog/patinoire-enchantee"
    }
  ];

  return (
    <main>
      {/* Header avec image de fond */}
      <header className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('/images/bandeau_3-1.png')` }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl md:text-5xl font-cookie mb-6" style={{ fontSize: '60px', lineHeight: '70px' }}>
                  Événements et actualités
                </h1>
          
          {/* Barre avec losange */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-0.5 bg-white"></div>
            <div className="w-2 h-2 bg-white transform rotate-45 mx-4"></div>
            <div className="w-16 h-0.5 bg-white"></div>
          </div>
        </div>
        {/* Séparateur en bas du header */}
        <BottomSeparator color="#ffffff" overlay={true} />
      </header>

      {/* Section des articles de blog - Style identique à NewsSection */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Grille d'articles avec design carré - 4 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white border-2 border-gray-100 hover:border-[#076993] transition-all duration-300 hover:shadow-xl group flex flex-col">
                {/* Image avec background-image style */}
                <div 
                  className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                
                {/* Contenu avec design carré - flex pour aligner les boutons */}
                <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-lora font-semibold mb-2 text-[#262559]">
            <Link href={post.href} className="hover:text-[#076993] transition-colors">
              {post.title}
            </Link>
          </h3>
                  
                  {/* Date et heure */}
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-6 h-0.5 bg-[#076993]"></div>
                    <div className="px-2 text-xs text-[#076993] font-open-sans font-medium text-center">
                      {post.date}<br/>{post.time}
                    </div>
                    <div className="w-6 h-0.5 bg-[#076993]"></div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 font-open-sans leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Bouton carré avec style du site - aligné en bas */}
                  <Link 
                    href={post.href} 
                    className="inline-block bg-[#262559] hover:bg-[#076993] text-white px-4 py-2 text-sm font-lora font-medium transition-colors duration-300 border-2 border-[#262559] hover:border-[#076993] mt-auto"
                  >
                    Lire la suite
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Image de fond avec séparateurs en haut et en bas */}
      <ImageWithSeparators 
        imageSrc="/images/table-ronde-restaurent.jpg"
        height="40vh"
        minHeight="300px"
        separatorColor="#ffffff"
      />
    </main>
  );
}