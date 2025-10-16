"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MobileNavbar() {
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

  return (
    <>
      {/* Bouton hamburger flottant en haut à droite - uniquement sur mobile */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          className="p-2 hover:bg-white/10 transition-all duration-300"
          aria-controls="mobile-menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block h-0.5 w-6 bg-black transition-all duration-300 mt-1 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-black transition-all duration-300 mt-1 ${open ? '-rotate-45 -translate-y-1' : ''}`} />
          </div>
        </button>
      </div>

      {/* Sidebar mobile - Overlay et menu */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay sobre */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="mobile-menu-container absolute top-0 right-0 h-full w-80 bg-white shadow-2xl">
            {/* Header de la sidebar */}
            <div className="flex items-center justify-end p-6 border-b border-gray-200">
              <button
                className="text-gray-600 p-2 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation mobile */}
            <nav className="main-menu_mobile p-8" role="navigation">
              <ul className="menu nav-menu space-y-0">
                <li className="border-b border-gray-200">
                  <Link 
                    href="/" 
                    onClick={() => setOpen(false)} 
                    className="block py-6 text-gray-800 font-lora font-normal text-xl hover:text-black hover:font-medium transition-all duration-200 hover:pl-3 hover:bg-gray-50 relative hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:bottom-0 hover:before:w-1 hover:before:bg-black"
                  >
                    Notre Crêperie
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link 
                    href="/blog" 
                    onClick={() => setOpen(false)} 
                    className="block py-6 text-gray-800 font-lora font-normal text-xl hover:text-black hover:font-medium transition-all duration-200 hover:pl-3 hover:bg-gray-50 relative hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:bottom-0 hover:before:w-1 hover:before:bg-black"
                  >
                    L'actu
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link 
                    href="/reservation" 
                    onClick={() => setOpen(false)} 
                    className="block py-6 text-gray-800 font-lora font-normal text-xl hover:text-black hover:font-medium transition-all duration-200 hover:pl-3 hover:bg-gray-50 relative hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:bottom-0 hover:before:w-1 hover:before:bg-black"
                  >
                    Réservation
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link 
                    href="/contactez-nous" 
                    onClick={() => setOpen(false)} 
                    className="block py-6 text-gray-800 font-lora font-normal text-xl hover:text-black hover:font-medium transition-all duration-200 hover:pl-3 hover:bg-gray-50 relative hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:bottom-0 hover:before:w-1 hover:before:bg-black"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Footer de la sidebar */}
            <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-gray-200 bg-gray-50">
              <div className="text-center">
                <p className="text-gray-800 text-lg font-lora font-medium mb-2">
                  Crampous Mad
                </p>
                <p className="text-gray-600 text-sm font-lora">
                  Crêperie traditionnelle
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
