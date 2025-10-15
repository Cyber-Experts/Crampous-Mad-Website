import Link from "next/link";

export default function PatinoireEnchanteePage() {
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
            Le retour de la patinoire enchantée à Mulhouse !
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
          <p>24 novembre 2016 • Author: Cyber Experts</p>
        </div>

        {/* Image illustrative */}
        <div className="mb-8">
          <img 
            src="/images/noel-2015-a-mulhouse-la-patinoire-enchantee-45619-470-0.jpg" 
            alt="Patinoire enchantée à Mulhouse" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Titre principal */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#076993] mb-4">
            <em>Patinoire enchantée – Cour des Maréchaux – Du 24 novembre 2016 au 27 décembre 2016</em>
          </h2>
        </div>

        {/* Contenu principal */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Les habitants de Mulhouse et les visiteurs de la ville auront l'occasion de patiner grâce à l'ouverture cette année de la Patinoire Enchantée en plein cœur de la ville de Mulhouse, à la Cour des Maréchaux le 24 novembre 2016.
          </p>

          <p className="text-gray-700 mb-6">
            Avec 90m² de superficie, la Patinoire enchantée à Mulhouse sera à la disposition des visiteurs de la ville pendant toute la durée du Marché de Noël.
          </p>

          <p className="text-gray-700 mb-6">
            De la musique, des décors magiques ainsi que des animations surprises viendront animer la Cour des Maréchaux pour vous faire vivre un moment unique. Plus de 35 personnes pourront patiner en même temps par tranche de 30 minutes.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <p className="text-gray-700">
              Le prix pour 30 minutes est fixé à <strong>3,50€</strong>, un prix accessible offrant aux patineurs l'opportunité de passer un bon moment en famille ou entre amis.
            </p>
          </div>

          <p className="text-gray-700 mb-6">
            Si vous avez des patins à la maison, n'oubliez pas de les apporter ! Vous pourrez profiter de cette patinoire éphémère jusqu'au 27 décembre 2016,
          </p>

          <div className="bg-[#076993] text-white p-6 rounded-lg mb-8">
            <p className="text-center text-lg">
              <strong>À 3 minutes de la patinoire enchantée, la Crêperie Crampous Mad vous propose de venir déguster une galette au sarrasin ou une crêpe au froment pour régaler vos papilles !</strong> Votre crêperie est ouverte du lundi au jeudi de 12h à 21h30 et les vendredis et samedis de 12h à 22h !
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-block bg-[#076993] text-white px-6 py-3 rounded hover:bg-[#065a7a] transition-colors"
          >
            ← Retour à L'actu
          </Link>
        </div>
      </article>
    </main>
  );
}
