import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Stationnement à Mulhouse : nos conseils",
      excerpt: "Vous venez nous rendre visite ? Voici nos conseils pour vous garer facilement à Mulhouse.",
      image: "/images/stationnement-mulhouse.jpg",
      date: "25 juillet 2016",
      category: "Actualité",
      link: "#"
    },
    {
      id: 2,
      title: "Noël 2015 à Mulhouse : la foire enchantée",
      excerpt: "Découvrez les festivités de Noël à Mulhouse et notre participation à la foire enchantée.",
      image: "/images/noel-2015-a-mulhouse-la-foire-enchantee-45619-470-0.jpg",
      date: "15 décembre 2015",
      category: "Événements",
      link: "#"
    },
    {
      id: 3,
      title: "Carnaval de Mulhouse : chaîne de réunion",
      excerpt: "Notre participation au carnaval de Mulhouse et la chaîne de réunion traditionnelle.",
      image: "/images/carnaval-de-mulhouse-cha-ce-reunion-58533-470-0.jpg",
      date: "10 mars 2015",
      category: "Événements",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display mb-4">L'actu</h1>
          <p className="text-xl font-body">Retrouvez toutes nos actualités et événements</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-body">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2 font-body">
                    {post.date}
                  </div>
                  <h2 className="text-xl font-body font-semibold mb-3 text-secondary">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 font-sans">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={post.link}
                    className="inline-flex items-center text-primary hover:text-blue-600 font-body font-medium"
                  >
                    Lire la suite
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display text-secondary mb-4">
            Restez informé de nos actualités
          </h2>
          <p className="text-gray-600 mb-8 font-sans">
            Abonnez-vous à notre newsletter pour ne rien rater de nos événements et nouveautés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-body font-medium transition-colors duration-300">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
