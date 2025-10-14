export default function NotreCreperiePage() {
  return (
    <main>
      <header className="relative h-[280px] w-full">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${require("../../images/F17A4397-570x460.jpg").default.src})` }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl">Notre Crêperie</h1>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[#076993] text-3xl mb-6">La crêperie Crampous Mad</h2>
          <p className="text-[#262559] font-semibold">
            Depuis plus de 40 ans, la crêperie Crampous Mad est l’union culinaire entre l’Alsace et la Bretagne.
          </p>
          <p className="mt-4 text-justify">
            Créée en 1980, la crêperie est reprise en 2016 par deux nouveaux propriétaires et associés : Françoise RITZENTHALER et David CHARLES. Ils prennent alors possession des lieux avec un objectif : redonner à la Crêperie une nouvelle identité en rénovant totalement le Restaurant mais en conservant l’âme de ce lieu emblématique de Mulhouse.
          </p>
          <p className="mt-4"><strong>Le concept :</strong></p>
          <p className="mt-2 text-justify">
            La Crêperie Crampous Mad est un établissement du cœur commerçant de Mulhouse ; un lieu familier qui prend ses aises sur deux niveaux dans une ancienne maison alsacienne, unique en ce centre urbain. L’atmosphère réjouissante et le design ludique du restaurant oscillent entre deux styles et deux cultures. Réalisée avec une certaine fraîcheur tout en s’inscrivant dans le respect d’un cadre historique, la décoration d’inspiration tantôt bretonne tantôt alsacienne, est patinée et graphique et fait la part belle aux motifs et à des notes marines subtilement pétillantes. À la fois authentique et originale, la Crêperie souhaite trouver son public auprès de générations confondues, partageant avec plaisir la convivialité d’un met simple mais travaillé, les galettes au sarrasin et crêpes au froment.
          </p>
        </div>
        <div>
          <div className="aspect-[570/460] w-full bg-[#f2f2f2] rounded overflow-hidden flex items-center justify-center text-sm text-gray-500">
            Carrousel d’images (à intégrer)
          </div>
        </div>
      </section>

      <section className="bg-[#076993] text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <div className="aspect-[570/460] w-full bg-[#0a5c7f] rounded overflow-hidden flex items-center justify-center text-sm">
              Carrousel produits locaux (placeholder)
            </div>
          </div>
          <div>
            <h2 className="text-4xl mb-6">Des Produits Locaux</h2>
            <p className="text-black/90 text-justify">
              Françoise et David apportent une grande importance à travailler le plus possible avec des produits locaux, issus d’une agriculture raisonnée. Les produits bretons sont également sélectionnés avec soin pour leur goût et leur provenance. Nos galettes et crêpes sont cuisinées une à une à la demande !
            </p>
            <p className="mt-4 text-black/90 text-justify">
              La plupart de nos légumes sont cultivés par la <a href="http://www.ferme-fischer.fr/" target="_blank" rel="noreferrer" className="underline">ferme Fischer</a> à Zimmersheim. Nos œufs sont 100% alsaciens et proviennent de la ferme <a href="http://www.prim-vert.com/index.html" target="_blank" rel="noreferrer" className="underline">Prim’Vert</a> située à Michelbach-le-Haut.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[#076993] text-4xl mb-6">Notre histoire</h2>
          <p className="text-justify">
            La crêperie Crampous Mad a été créée le vendredi 26 septembre 1980. Les heureux propriétaires Vicki et Bertrand, ont alors ouvert la première crêperie mulhousienne pouvant accueillir 50 couverts.
          </p>
          <p className="mt-4 text-justify">
            Les années passent… La crêperie devient une référence et un lieu emblématique au centre-ville de Mulhouse. En 1990, pour répondre à une demande croissante des clients, les deux propriétaires décident de racheter le bâtiment mitoyen afin d’agrandir le restaurant et d’augmenter sa capacité d’accueil à 90 couverts.
          </p>
          <p className="mt-4 text-justify">
            Après plus de 30 ans d’existence, des milliers de crêpes et de fabuleuses rencontres, les anciens dirigeants cèdent en 2015 leur restaurant à Françoise et David, pour que l’âme de Crampous Mad perdure.
          </p>
        </div>
        <div>
          <div className="aspect-[570/480] w-full bg-[#f2f2f2] rounded overflow-hidden flex items-center justify-center text-sm text-gray-500">
            Galerie historique (placeholder)
          </div>
        </div>
      </section>
    </main>
  );
}


