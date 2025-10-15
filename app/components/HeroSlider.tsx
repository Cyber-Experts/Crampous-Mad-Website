"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Slide = {
  imageSrc: string;
  title: string;
  ctaHref?: string;
  ctaLabel?: string;
};

type HeroSliderProps = {
  slides: Slide[];
  intervalMs?: number;
};

export default function HeroSlider({ slides, intervalMs = 5000 }: HeroSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  const current = slides[index];

  return (
    <section className="hero-slider relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${s.imageSrc})` }}
          aria-hidden={i !== index}
        />
      ))}

      <div className="absolute inset-0 bg-black/35" />

      {/* Navbar en haut */}
      <div className="relative z-20 w-full">
        <header className="bg-white/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-center py-6">
              <nav className="main-menu" role="navigation">
                <ul className="menu nav-menu flex items-center gap-4 text-[#262559] font-body">
                  <li>
                    <Link href="/notre-creperie" className="hover:opacity-80 px-8 py-3 text-lg font-medium" aria-current="page">
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
      </div>

      {/* Contenu principal centré */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Logo au centre */}
        <div className="mb-8">
          <img src="/images/logo-sans-fond-ni-date.png" alt="Crampous Mad" className="h-20 w-auto mx-auto" />
        </div>
        
        <h2 className="text-white text-4xl md:text-6xl font-normal py-4 px-6 inline-block" style={{fontFamily: 'Berkshire Swash, Georgia, serif'}}>
          {current.title}
        </h2>
        {current.ctaHref && current.ctaLabel ? (
          <Link
            href={current.ctaHref}
            className="mt-8 inline-block text-white bg-black/75 hover:bg-white hover:text-black transition-colors px-6 py-3 text-base font-medium"
          >
            {current.ctaLabel}
          </Link>
        ) : null}
      </div>

      {slides.length > 1 ? (
        <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Aller au slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            />)
          )}
        </div>
      ) : null}
    </section>
  );
}


