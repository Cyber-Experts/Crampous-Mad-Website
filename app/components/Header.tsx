"use client";

import Link from "next/link";

interface HeaderProps {
  isHomePage?: boolean;
}

export default function Header({ isHomePage = false }: HeaderProps) {

  if (isHomePage) {
    return (
      <header className="site-header bg-white">
        <div className="site-header_in max-w-7xl mx-auto px-4 md:px-8">
          {/* Navigation centrée pour la page d'accueil - responsive */}
          <div className="flex justify-center items-center h-16 md:h-24">
            <nav className="main-menu" role="navigation">
              <ul className="menu nav-menu flex items-center text-[#262559] font-body italic">
                <li>
                  <Link href="/notre-creperie" className="hover:opacity-80 px-2 py-2 text-sm md:text-base font-normal transition-all duration-200 hover:bg-gray-50 rounded">
                    Notre Crêperie
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:opacity-80 px-2 py-2 text-sm md:text-base font-normal transition-all duration-200 hover:bg-gray-50 rounded">
                    L'actu
                  </Link>
                </li>
                <li>
                  <Link href="/reservation" className="hover:opacity-80 px-2 py-2 text-sm md:text-base font-normal transition-all duration-200 hover:bg-gray-50 rounded">
                    Réservation
                  </Link>
                </li>
                <li>
                  <Link href="/contactez-nous" className="hover:opacity-80 px-2 py-2 text-sm md:text-base font-normal transition-all duration-200 hover:bg-gray-50 rounded">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="site-header bg-white relative z-50">
        <div className="site-header_in max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="site-branding flex items-center gap-4">
              <div className="site-logo">
                <Link href="/" aria-label="Accueil">
                  <img
                    src="/images/logo-sans-fond-ni-date.png"
                    alt="Crampous Mad"
                    className="h-16 w-auto"
                  />
                </Link>
              </div>

              {/* Bouton hamburger pour mobile - masqué car navbar mobile globale */}
              <div className="md:hidden">
                {/* Espace réservé pour maintenir l'alignement */}
              </div>
            </div>

            {/* Navigation desktop */}
            <div id="site-navigation" className="main-navigation hidden md:block">
              <nav className="main-menu" role="navigation">
                <ul className="menu nav-menu flex items-center text-[#262559] font-body">
                  <li>
                    <Link href="/notre-creperie" className="hover:opacity-80 px-2 py-2 transition-all duration-200 hover:bg-gray-50 rounded" aria-current="page">
                      Notre Crêperie
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:opacity-80 px-2 py-2 transition-all duration-200 hover:bg-gray-50 rounded">
                      L'actu
                    </Link>
                  </li>
                  <li>
                    <Link href="/reservation" className="hover:opacity-80 px-2 py-2 transition-all duration-200 hover:bg-gray-50 rounded">
                      Réservation
                    </Link>
                  </li>
                  <li>
                    <Link href="/contactez-nous" className="hover:opacity-80 px-2 py-2 transition-all duration-200 hover:bg-gray-50 rounded">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile supprimé - géré par MobileNavbar globale */}
    </>
  );
}


