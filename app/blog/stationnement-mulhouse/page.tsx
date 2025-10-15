import Link from "next/link";

export default function StationnementMulhousePage() {
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
            Se stationner au centre ville de Mulhouse
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
          <p>17 janvier 2018 • Author: Cyber Experts</p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Découvrez nos trucs et astuces pour se <strong>stationner au centre ville de Mulhouse</strong> afin de venir déguster une bonne galette dans votre Crêperie Crampous Mad.
          </p>
        </div>

        {/* Stationnement en surface */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#076993] mb-6">Stationnement en surface (jusqu'à 4h)</h2>
          <p className="text-gray-700 mb-4">
            Quatre zones de stationnement selon ses besoins : de 15 minutes à 4 heures ( <a href="#" className="text-[#076993] hover:underline">Télécharger le plan (pdf, 478.4 Ko)</a> ) :
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-4 h-4 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
              <div>
                <strong>Stationnement limité à 30 minutes</strong> (rouge)<br/>
                A proximité des commerces ou de la gare, une centaine de places réparties dans 8 sites proposent un stationnement gratuit limité à 30 minutes. Idéal pour des courses rapides en centre-ville ou accompagner les voyageurs.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-4 h-4 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
              <div>
                <strong>Stationnement limité à 2 h</strong> (orange).<br/>
                2 400 places en hyper centre, limité à deux heures. Tarif : 1,50 €/h du lundi au samedi de 9h à 12 h et de 14h à 19h.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-4 h-4 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
              <div>
                <strong>Stationnement limité à 4 h</strong> (vert).<br/>
                1 300 places en bordure du centre-ville.
              </div>
            </li>
          </ul>
        </section>

        {/* Stationnement en ouvrage */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#076993] mb-6">Stationnement en ouvrage (« longue durée »)</h2>
          <p className="text-gray-700 mb-4">
            Parkings en ouvrage (à l'abri, sauf pour le parking Buffon) situés au centre-ville proposent environ 3 600 places de stationnement non limitées dans le temps :
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center p-4 bg-gray-50 rounded">
              <i className="Defaults-car mr-3 text-[#076993]"></i>
              <span>Parking Centre (650 places)</span>
            </li>
            <li className="flex items-center p-4 bg-gray-50 rounded">
              <i className="Defaults-car mr-3 text-[#076993]"></i>
              <span>Parking Porte-Jeune – ex parking Europe (1 400 places)</span>
            </li>
            <li className="flex items-center p-4 bg-gray-50 rounded">
              <i className="Defaults-car mr-3 text-[#076993]"></i>
              <span>Parking Maréchaux (600 places)</span>
            </li>
            <li className="flex items-center p-4 bg-gray-50 rounded">
              <i className="Defaults-car mr-3 text-[#076993]"></i>
              <span>Parking Buffon (220 places)</span>
            </li>
            <li className="flex items-center p-4 bg-gray-50 rounded">
              <i className="Defaults-car mr-3 text-[#076993]"></i>
              <span>Parking de la Porte de Bâle (300 places)</span>
            </li>
            <li className="flex items-center p-4 bg-gray-50 rounded">
              <i className="Defaults-car mr-3 text-[#076993]"></i>
              <span>Parking du Passage de la Réunion (190 places)</span>
            </li>
            <li className="flex items-center p-4 bg-gray-50 rounded">
              <i className="Defaults-car mr-3 text-[#076993]"></i>
              <span>Parking gare (175 places)</span>
            </li>
          </ul>
        </section>

        {/* Les bons plans */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#076993] mb-6">Les bons plans pour stationner malin</h2>
          <p className="text-gray-700 mb-6">
            Mulhouse multiplie les gratuités et forfaits attractifs pour faciliter le stationnement en ville… et vous permet de payer votre stationnement avec votre mobile.
          </p>

          <h3 className="text-2xl font-semibold text-[#262559] mb-4">Stationnement gratuit</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <i className="Defaults-check text-green-500 mr-3 mt-1"></i>
              <span>Stationnement <strong>gratuit de 12h à 14h</strong> dans les rues du centre. Le bon plan pour une pause déjeuner en ville.</span>
            </li>
            <li className="flex items-start">
              <i className="Defaults-check text-green-500 mr-3 mt-1"></i>
              <span><strong>30 minutes gratuites dans 8 zones</strong>, à proximité des commerces ou de la gare. Idéal pour une course rapide ou déposer un voyageur. <a href="#" className="text-[#076993] hover:underline">En savoir plus</a></span>
            </li>
            <li className="flex items-start">
              <i className="Defaults-check text-green-500 mr-3 mt-1"></i>
              <span><strong>Gratuit les lundis, mercredis, vendredis et dimanche sur le parking du marché</strong> (530 places). Les autres jours (jour de marché), la première heure est gratuite, puis 0.80 €/h (limité à 4 heures).</span>
            </li>
            <li className="flex items-start">
              <i className="Defaults-check text-green-500 mr-3 mt-1"></i>
              <span><strong>Gratuit le dimanche</strong>, les <strong>jours fériés</strong> et <strong>la nuit</strong> entre 19h et 9h le parking Buffon : une aubaine pour les riverains et les noctambules.</span>
            </li>
            <li className="flex items-start">
              <i className="Defaults-check text-green-500 mr-3 mt-1"></i>
              <span><strong>Gratuit le dimanche, le parking de la mairie</strong>. Ce parking est ouvert au grand public le week end (payant le samedi, gratuit le dimanche). Accès depuis la rue des Orphelins.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#262559] mb-4">Forfaits attractifs</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <i className="Defaults-star text-yellow-500 mr-3 mt-1"></i>
              <span>« P+tram », la formule imbattable à 2 € combinant le parking (Université ou Kinépolis, ouverts du lundi au samedi de 7h à 19h pour le premier, de 7h à 19h30 pour le second.) et un aller-retour en tramway pour tous les occupants du véhicule (7 maximum). Plus rapide que la voiture : il faut 6 minutes environ pour rejoindre le centre-ville avec une fréquence toutes les 4 à 8 minutes en journée. <a href="#" className="text-[#076993] hover:underline">Plus d'infos sur les P+tram</a></span>
            </li>
            <li className="flex items-start">
              <i className="Defaults-star text-yellow-500 mr-3 mt-1"></i>
              <span>Astucieuse, la carte de stationnement. Elle se recharge dans les horodateurs et offre 30 minutes gratuites une fois par jour.</span>
            </li>
            <li className="flex items-start">
              <i className="Defaults-star text-yellow-500 mr-3 mt-1"></i>
              <span>2 € les 4 heures dans les parkings Centre, Porte Jeune, Maréchaux et Buffon (2,40 € les 4 h dans le parking Réunion).</span>
            </li>
            <li className="flex items-start">
              <i className="Defaults-star text-yellow-500 mr-3 mt-1"></i>
              <span>Forfait soirée et forfait nuit dans les parkings Centre, Porte Jeune, Maréchaux. 1 € entre 19h et 1h, 2 € de 1h à 7h du matin… Sortez tranquille et plus besoin de « gratter » votre pare-brise les mois d'hiver.</span>
            </li>
          </ul>
        </section>

        {/* Paiement par téléphone */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#076993] mb-6">Paiement par téléphone portable</h2>
          <p className="text-gray-700 mb-6">
            Pour faciliter la vie des automobilistes, Mulhouse propose deux solutions pour payer le stationnement, dans certaines zones, avec leur téléphone portable.
          </p>

          <h3 className="text-2xl font-semibold text-[#262559] mb-4">« Stationnement Mulhouse » : une application gratuite d'une simplicité désarmante !</h3>
          <p className="text-gray-700 mb-6">
            « Stationnement Mulhouse », une application gratuite pour payer son stationnement avec son mobile (fonctionne avec tous les smartphones, sauf windows phone) pour les courtes durées et les abonnés.
          </p>

          <h4 className="text-xl font-semibold text-[#262559] mb-4">Ticket courte durée</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <i className="Defaults-mobile text-[#076993] mr-3 mt-1"></i>
              <span>Choisissez votre zone (verte ou orange) ou localisez-vous avec votre GPS. L'application vous affiche alors la liste des rues les plus proches de votre point de localisation et le tarif correspondant.</span>
            </li>
            <li className="flex items-start">
              <i className="Defaults-mobile text-[#076993] mr-3 mt-1"></i>
              <span>Renseignez votre numéro d'immatriculation (jusqu'à 4 véhicules peuvent être mémorisés). La liste des numéros enregistrés s'affiche lors des prochaines utilisations.</span>
            </li>
            <li className="flex items-start">
              <i className="Defaults-mobile text-[#076993] mr-3 mt-1"></i>
              <span>Choisissez la durée : par défaut, l'application vous propose une heure de stationnement. Vous pouvez définir la durée au 1/4 d'heure près. Le coût correspondant vous est donné.</span>
            </li>
            <li className="flex items-start">
              <i className="Defaults-mobile text-[#076993] mr-3 mt-1"></i>
              <span>Message d'alerte (coché par défaut) : une alerte vous est envoyée 10 minutes avant la fin de la durée de stationnement. Vous pouvez alors prolonger votre stationnement (dans la limite maximale de la durée autorisée) en un clic.</span>
            </li>
            <li className="flex items-start">
              <i className="Defaults-mobile text-[#076993] mr-3 mt-1"></i>
              <span>Réglez avec votre carte bancaire via un espace de paiement sécurisé. Un code de sécurité personnel vous est demandé. Il vous permettra de payer les fois suivantes, sans réenregistrer les numéros de votre carte.</span>
            </li>
          </ul>

          <p className="text-gray-700 mt-6">
            L'application vous permet également de visionner vos stationnements en cours et récents (date, durée, coût…).
          </p>
        </section>

        {/* Remerciements */}
        <div className="bg-[#076993] text-white p-6 rounded-lg">
          <p className="text-center">
            <strong>Merci aux vitrines de Mulhouse pour les informations !</strong>
          </p>
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
