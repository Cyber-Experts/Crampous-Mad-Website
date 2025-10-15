"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  isHomePage?: boolean;
}

export default function Header({ isHomePage = false }: HeaderProps) {
  const [open, setOpen] = useState(false);

  if (isHomePage) {
    return (
      <header className="site-header bg-white">
        <div className="site-header_in max-w-7xl mx-auto px-8">
          {/* Navigation centrée pour la page d'accueil */}
          <div className="flex justify-center py-8">
            <nav className="main-menu" role="navigation">
              <ul className="menu nav-menu flex items-center gap-4 text-[#262559] font-body">
                <li>
                  <Link href="/" className="hover:opacity-80 px-8 py-3 text-lg font-medium" aria-current="page">
                    Notre Crêperie
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#076993] transform rotate-45 mx-6"></div>
                </li>
                <li>
                  <Link href="/blog" className="hover:opacity-80 px-8 py-3 text-lg font-medium">
                    L'actu
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#076993] transform rotate-45 mx-6"></div>
                </li>
                <li>
                  <Link href="/reservation" className="hover:opacity-80 px-8 py-3 text-lg font-medium">
                    Réservation
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#076993] transform rotate-45 mx-6"></div>
                </li>
                <li>
                  <Link href="/contactez-nous" className="hover:opacity-80 px-8 py-3 text-lg font-medium">
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
    <header className="site-header bg-white">
      <div className="site-header_in max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="site-branding flex items-center gap-4">
            <div className="site-logo">
              <Link href="/" aria-label="Accueil">
                <img
                  src="/images/logo-sans-fond-ni-date.png"
                  alt="Crampous Mad"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            <button
              className="menu-toggle inline-flex items-center justify-center md:hidden text-[#262559]"
              aria-controls="menu"
              aria-expanded={open ? "true" : "false"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <span className="menu-toggle_item __left block h-[2px] w-6 bg-current" />
              <span className="menu-toggle_item __middle block h-[2px] w-6 bg-current mx-1" />
              <span className="menu-toggle_item __right block h-[2px] w-6 bg-current" />
            </button>
          </div>

          <div id="site-navigation" className="main-navigation hidden md:block">
            <nav className="main-menu" role="navigation">
              <ul className="menu nav-menu flex items-center gap-2 text-[#262559] font-body">
                <li>
                  <Link href="/" className="hover:opacity-80 px-2" aria-current="page">
                    Notre Crêperie
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#076993] transform rotate-45 mx-2"></div>
                </li>
                <li>
                  <Link href="/blog" className="hover:opacity-80 px-2">
                    L'actu
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#076993] transform rotate-45 mx-2"></div>
                </li>
                <li>
                  <Link href="/reservation" className="hover:opacity-80 px-2">
                    Réservation
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#076993] transform rotate-45 mx-2"></div>
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

        {/* Mobile menu */}
        <div
          id="menu"
          className={`${open ? "block" : "hidden"} md:hidden pb-4`}
          aria-expanded={open ? "true" : "false"}
        >
          <nav role="navigation">
            <ul className="menu nav-menu flex flex-col gap-3 text-[#262559] font-body">
              <li>
                <Link href="/" onClick={() => setOpen(false)} className="py-1">
                  Notre Crêperie
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => setOpen(false)} className="py-1">
                  L'actu
                </Link>
              </li>
              <li>
                <Link href="/reservation" onClick={() => setOpen(false)} className="py-1">
                  Réservation
                </Link>
              </li>
              <li>
                <Link href="/contactez-nous" onClick={() => setOpen(false)} className="py-1">
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


