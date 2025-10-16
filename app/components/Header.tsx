"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  isHomePage?: boolean;
}

export default function Header({ isHomePage = false }: HeaderProps) {
  const [open, setOpen] = useState(false);

  // Fermer le menu mobile quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && !(event.target as Element).closest('.mobile-menu-container')) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      // Empêcher le scroll du body quand le menu est ouvert
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (isHomePage) {
    return (
      <header className="site-header bg-white">
        <div className="site-header_in max-w-7xl mx-auto px-8">
          {/* Navigation centrée pour la page d'accueil */}
          <div className="flex justify-center items-center h-24">
            <nav className="main-menu" role="navigation">
              <ul className="menu nav-menu flex items-center gap-2 text-[#262559] font-body italic">
                <li>
                  <Link href="/notre-creperie" className="hover:opacity-80 px-4 py-2 text-base font-normal">
                    Notre Crêperie
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:opacity-80 px-4 py-2 text-base font-normal">
                    L'actu
                  </Link>
                </li>
                <li>
                  <Link href="/reservation" className="hover:opacity-80 px-4 py-2 text-base font-normal">
                    Réservation
                  </Link>
                </li>
                <li>
                  <Link href="/contactez-nous" className="hover:opacity-80 px-4 py-2 text-base font-normal">
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

              {/* Bouton hamburger pour mobile */}
              <button
                className="menu-toggle inline-flex items-center justify-center md:hidden text-[#262559] p-2"
                aria-controls="mobile-menu"
                aria-expanded={open ? "true" : "false"}
                onClick={() => setOpen((v) => !v)}
              >
                <span className="sr-only">Ouvrir le menu</span>
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : ''}`} />
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 mt-1 ${open ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 mt-1 ${open ? '-rotate-45 -translate-y-1' : ''}`} />
                </div>
              </button>
            </div>

            {/* Navigation desktop */}
            <div id="site-navigation" className="main-navigation hidden md:block">
              <nav className="main-menu" role="navigation">
                <ul className="menu nav-menu flex items-center gap-2 text-[#262559] font-body">
                  <li>
                    <Link href="/" className="hover:opacity-80 px-2" aria-current="page">
                      Notre Crêperie
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:opacity-80 px-2">
                      L'actu
                    </Link>
                  </li>
                  <li>
                    <Link href="/reservation" className="hover:opacity-80 px-2">
                      Réservation
                    </Link>
                  </li>
                  <li>
                    <Link href="/contactez-nous" className="hover:opacity-80 px-2">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar mobile - Overlay et menu */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay sombre */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="mobile-menu-container absolute top-0 right-0 h-full w-80 bg-[#232323] shadow-2xl">
            {/* Header de la sidebar */}
            <div className="flex items-center justify-between p-6 border-b border-[#a7781d]/33">
              <div className="site-logo">
                <Link href="/" onClick={() => setOpen(false)} aria-label="Accueil">
                  <img
                    src="/images/logo-sans-fond-ni-date.png"
                    alt="Crampous Mad"
                    className="h-12 w-auto"
                  />
                </Link>
              </div>
              <button
                className="text-white p-2 hover:bg-white/10 rounded"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation mobile */}
            <nav className="main-menu_mobile p-6" role="navigation">
              <ul className="menu nav-menu space-y-0">
                <li className="border-b border-[#a7781d]/33">
                  <Link 
                    href="/" 
                    onClick={() => setOpen(false)} 
                    className="block py-4 text-white font-lora font-normal italic text-xl hover:text-[#a7781d] transition-colors"
                  >
                    Notre Crêperie
                  </Link>
                </li>
                <li className="border-b border-[#a7781d]/33">
                  <Link 
                    href="/blog" 
                    onClick={() => setOpen(false)} 
                    className="block py-4 text-white font-lora font-normal italic text-xl hover:text-[#a7781d] transition-colors"
                  >
                    L'actu
                  </Link>
                </li>
                <li className="border-b border-[#a7781d]/33">
                  <Link 
                    href="/reservation" 
                    onClick={() => setOpen(false)} 
                    className="block py-4 text-white font-lora font-normal italic text-xl hover:text-[#a7781d] transition-colors"
                  >
                    Réservation
                  </Link>
                </li>
                <li className="border-b border-[#a7781d]/33">
                  <Link 
                    href="/contactez-nous" 
                    onClick={() => setOpen(false)} 
                    className="block py-4 text-white font-lora font-normal italic text-xl hover:text-[#a7781d] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}


