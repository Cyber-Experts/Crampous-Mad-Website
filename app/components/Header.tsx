"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header bg-[#f7f7f7]">
      <div className="site-header_in max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="site-branding flex items-center gap-4">
            <div className="site-logo">
              <Link href="/" aria-label="Accueil">
                <img
                  src="/images/logo-sans-fond-ni-date.png"
                  alt="Crampous Mad"
                  className="h-10 w-auto"
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
              <ul className="menu nav-menu flex items-center gap-6 text-[#262559]">
                <li>
                  <Link href="/" className="hover:opacity-80" aria-current="page">
                    Notre Crêperie
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:opacity-80">
                    L'actu
                  </Link>
                </li>
                <li>
                  <Link href="/reservation" className="hover:opacity-80">
                    Réservation
                  </Link>
                </li>
                <li>
                  <Link href="/contactez-nous" className="hover:opacity-80">
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
            <ul className="menu nav-menu flex flex-col gap-3 text-[#262559]">
              <li>
                <Link href="/" onClick={() => setOpen(false)} className="py-1">
                  Notre Crêperie
                </Link>
              </li>
              <li>
                <a
                  href="https://crampous-mad.fr/blog"
                  className="py-1"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  L’actu
                </a>
              </li>
              <li>
                <a
                  href="https://crampous-mad.fr/reservation"
                  className="py-1"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Réservation
                </a>
              </li>
              <li>
                <a
                  href="https://crampous-mad.fr/contactez-nous"
                  className="py-1"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}


