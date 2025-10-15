import Link from "next/link";

export default function NewsSection() {
  const newsArticles = [
    {
      image: "/images/stationnement-mulhouse.jpg",
      title: "Stationnement à Mulhouse",
      description: "Découvrez nos trucs et astuces pour se stationner au centre de Mulhouse.",
      href: "/blog"
    },
    {
      image: "/images/20170504_093426.jpg",
      title: "Potagers Urbains au centre-ville",
      description: "Dans le cadre de la Journée Citoyenne 2017 et en partenariat avec la ville.",
      href: "/blog"
    },
    {
      image: "/images/carnaval-de-mulhouse-chars-place-reunion-58533-470-0.jpg",
      title: "Le carnaval de Mulhouse",
      description: "CARNAVAL DE MULHOUSE - DU 3 AU 5 MARS 2017. Découvrez les festivités.",
      href: "/blog"
    },
    {
      image: "/images/noel-2015-a-mulhouse-la-patinoire-enchantee-45619-470-0.jpg",
      title: "Le retour de la patinoire enchantée",
      description: "Patinoire enchantée – Cour des Maréchaux – Du 24 novembre au 31 décembre.",
      href: "/blog"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre avec style plus marqué */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-secondary mb-4" style={{ fontFamily: 'Berkshire Swash, serif' }}>
            L'actu
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        {/* Grille d'articles avec design carré - 4 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.map((article, index) => (
            <article key={index} className="bg-white border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-xl group flex flex-col">
              {/* Image avec background-image style */}
              <div 
                className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${article.image})` }}
              ></div>
              
              {/* Contenu avec design carré - flex pour aligner les boutons */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-body font-semibold mb-2 text-secondary" style={{ fontFamily: 'Lora, serif' }}>
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-sans leading-relaxed flex-grow">
                  {article.description}
                </p>
                
                {/* Bouton carré avec style du site - aligné en bas */}
                <Link 
                  href={article.href} 
                  className="inline-block bg-secondary hover:bg-primary text-white px-4 py-2 text-sm font-body font-medium transition-colors duration-300 border-2 border-secondary hover:border-primary mt-auto"
                >
                  Lire la suite
                </Link>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
}
