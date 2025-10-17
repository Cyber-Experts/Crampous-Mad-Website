import Link from "next/link";

export default function PotagersUrbainsPage() {
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
            Potagers Urbains au centre-ville de Mulhouse
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
          <p>2 mai 2017 • Author: Cyber Experts</p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-800 leading-relaxed font-lora">
            <strong>Dans le cadre de la Journée Citoyenne 2017 et en partenariat avec Les Vitrines de Mulhouse, des</strong> <strong>« Potagers Urbains » seront installés devant la Crêperie Crampous Mad et dans le centre-ville de Mulhouse !</strong>
          </p>
        </div>

        {/* Image illustrative */}
        <div className="mb-8">
          <img 
            src="/images/20170504_093426.jpg" 
            alt="Potagers urbains au centre-ville de Mulhouse" 
            className="w-full h-64 object-cover shadow-lg"
          />
        </div>

        {/* Contenu principal */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800 mb-6 text-lg font-lora leading-relaxed">
            Depuis maintenant 6 ans les mulhousiens ont leur <strong>« Journée Citoyenne »</strong>. L'objectif est de donner un peu de son temps pour embellir son cadre de vie et partager un moment convivial et citoyen. Cette année encore, les bénévoles mulhousiens pourront réaliser, ensemble, des petits chantiers et travaux pour améliorer leur quartier lors de la prochaine édition qui aura lieu le <strong>20 mai 2017</strong>.
          </p>

          <p className="text-gray-800 mb-6 text-lg font-lora leading-relaxed">
            L'une des initiatives de cette édition 2017 est <strong>l'installation et la plantation de potagers urbains</strong> dans le centre piétonnier de Mulhouse, en partenariat avec les <strong>Vitrines de Mulhouse</strong>.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <p className="text-gray-800 font-lora font-semibold text-lg">
              Des <strong>« Potagers Urbains »</strong> seront installés devant la Crêperie Crampous Mad <strong>!</strong> Françoise et David les gérants sont prêts à jardiner pour entretenir cette belle initiative locale et participative !
            </p>
          </div>

          <p className="text-gray-800 mb-8 text-lg font-lora leading-relaxed">
            Pour participer à la journée citoyenne, où vous pourrez notamment installer les Potagers Urbains au centre-ville de Mulhouse, il suffit de vous <a href="#" className="text-[#076993] hover:underline font-semibold">inscrire</a>.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-block bg-[#076993] text-white px-8 py-4 font-lora font-semibold hover:bg-[#065a7a] transition-colors"
          >
            ← Retour à L'actu
          </Link>
        </div>
      </article>
    </main>
  );
}
