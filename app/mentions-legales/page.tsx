export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-48 bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Mentions légales</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-display text-secondary mb-6">Informations légales</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-body font-semibold text-secondary mb-4">Éditeur du site</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-sans text-gray-700 mb-2">
                    <strong>Crêperie Crampous Mad</strong><br />
                    14, rue des Tondeurs<br />
                    68100 MULHOUSE<br />
                    France
                  </p>
                  <p className="font-sans text-gray-700">
                    Téléphone : <a href="tel:0389457943" className="text-primary hover:underline">03 89 45 79 43</a><br />
                    Email : <a href="mailto:contact@crampous-mad.fr" className="text-primary hover:underline">contact@crampous-mad.fr</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-body font-semibold text-secondary mb-4">Hébergement</h3>
                <p className="font-sans text-gray-700">
                  Ce site est hébergé par un prestataire technique. Pour toute question concernant l'hébergement, 
                  veuillez nous contacter directement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-body font-semibold text-secondary mb-4">Propriété intellectuelle</h3>
                <p className="font-sans text-gray-700 mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                  documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="font-sans text-gray-700">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-body font-semibold text-secondary mb-4">Collecte et traitement des données personnelles</h3>
                <p className="font-sans text-gray-700 mb-4">
                  Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement 
                  Général sur la Protection des Données (RGPD), nous nous engageons à protéger vos données personnelles.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-body font-semibold text-secondary mb-2">Données collectées :</h4>
                  <ul className="font-sans text-gray-700 list-disc list-inside space-y-1">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Informations de réservation</li>
                  </ul>
                </div>
                <p className="font-sans text-gray-700 mt-4">
                  Ces données sont utilisées uniquement pour traiter vos demandes de réservation et vous contacter 
                  si nécessaire. Elles ne sont pas transmises à des tiers sans votre consentement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-body font-semibold text-secondary mb-4">Cookies</h3>
                <p className="font-sans text-gray-700">
                  Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site. 
                  Aucun cookie de tracking ou de publicité n'est utilisé.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-body font-semibold text-secondary mb-4">Responsabilité</h3>
                <p className="font-sans text-gray-700 mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
                  à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p className="font-sans text-gray-700">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien 
                  vouloir le signaler par email, à l'adresse contact@crampous-mad.fr, en décrivant le problème 
                  de la manière la plus précise possible.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-body font-semibold text-secondary mb-4">Droit applicable</h3>
                <p className="font-sans text-gray-700">
                  Tout litige en relation avec l'utilisation du site crampous-mad.fr est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Mulhouse.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-body font-semibold text-secondary mb-4">Contact</h3>
                <p className="font-sans text-gray-700">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <ul className="font-sans text-gray-700 mt-2 space-y-1">
                  <li>Par téléphone : <a href="tel:0389457943" className="text-primary hover:underline">03 89 45 79 43</a></li>
                  <li>Par email : <a href="mailto:contact@crampous-mad.fr" className="text-primary hover:underline">contact@crampous-mad.fr</a></li>
                  <li>Par courrier : 14, rue des Tondeurs, 68100 MULHOUSE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
