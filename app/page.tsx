import HeroSlider from "./components/HeroSlider";
import Link from "next/link";

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

      {/* Section Bienvenue */}
      <section id="start-section" className="max-w-6xl mx-auto px-6 py-16 text-center bg-white">
        <h2 className="text-primary text-5xl mb-6 font-display">Bienvenue chez Crampous Mad</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <div className="md:w-1/3">
            <img src="/images/Crampous-Mad-2.jpg" alt="Notre histoire" className="w-full h-auto rounded shadow-lg" />
            <h3 className="italic text-[24px] leading-[30px] text-accent mt-4 font-body">Notre histoire</h3>
            <p className="text-sm leading-6 mt-2 font-sans">
              Depuis son ouverture le 26 septembre 1980 la crêperie Crampous Mad est l'union culinaire entre l'Alsace et la Bretagne. Les années passent…
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/images/F17A4522-570x460.jpg" alt="Le restaurant" className="w-full h-auto rounded shadow-lg" />
            <h3 className="italic text-[24px] leading-[30px] text-accent mt-4 font-body">Le restaurant</h3>
            <p className="text-sm leading-6 mt-2 font-sans">
              Découvrez la nouvelle ambiance authentique et conviviale, dans une ancienne maison alsacienne du 16ème siècle.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/images/Crampous-Mad-3.jpg" alt="L'équipe" className="w-full h-auto rounded shadow-lg" />
            <h3 className="italic text-[24px] leading-[30px] text-accent mt-4 font-body">L'équipe</h3>
            <p className="text-sm leading-6 mt-2 font-sans">
              Françoise, David et toute l'équipe vous accueillent avec le sourire et assurent un service en continu.
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <span className="flex-1 h-px bg-secondary" />
          <Link href="/notre-creperie" className="italic text-primary font-body hover:text-blue-600 transition-colors">Qui sommes-nous ?</Link>
          <span className="flex-1 h-px bg-secondary" />
        </div>
      </section>

      {/* Section Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display text-secondary text-center mb-12">Nos services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-body font-semibold mb-2 text-secondary">Service en continu</h3>
              <p className="text-gray-600 font-sans">Mardi au Samedi de 11h30 à 21h30</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-body font-semibold mb-2 text-secondary">Groupes & Événements</h3>
              <p className="text-gray-600 font-sans">Privatisation possible pour vos événements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-body font-semibold mb-2 text-secondary">Réservation</h3>
              <p className="text-gray-600 font-sans">Réservez au 03 89 45 79 43</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Actualités */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display text-secondary text-center mb-12">L'actu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="/images/stationnement-mulhouse.jpg" alt="Stationnement" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-body font-semibold mb-2 text-secondary">Stationnement à Mulhouse</h3>
              <p className="text-gray-600 text-sm mb-4 font-sans">Nos conseils pour vous garer facilement à Mulhouse.</p>
              <Link href="/blog" className="text-primary hover:underline font-body">Lire la suite</Link>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="/images/noel-2015-a-mulhouse-la-foire-enchantee-45619-470-0.jpg" alt="Noël 2015" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-body font-semibold mb-2 text-secondary">Noël 2015 à Mulhouse</h3>
              <p className="text-gray-600 text-sm mb-4 font-sans">La foire enchantée et notre participation.</p>
              <Link href="/blog" className="text-primary hover:underline font-body">Lire la suite</Link>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="/images/carnaval-de-mulhouse-cha-ce-reunion-58533-470-0.jpg" alt="Carnaval" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-body font-semibold mb-2 text-secondary">Carnaval de Mulhouse</h3>
              <p className="text-gray-600 text-sm mb-4 font-sans">Chaîne de réunion traditionnelle.</p>
              <Link href="/blog" className="text-primary hover:underline font-body">Lire la suite</Link>
            </article>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-body font-medium transition-colors">
              Voir toutes les actualités
            </Link>
          </div>
        </div>
      </section>
      </main>
  );
}