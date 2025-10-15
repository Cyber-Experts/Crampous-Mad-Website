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
    <section className="hero-slider relative h-[70vh] min-h-[420px] w-full overflow-hidden">
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


