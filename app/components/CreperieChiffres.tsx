"use client";

import { useEffect, useState } from "react";
import TopSeparator from "./SectionSeparator";
import BottomSeparator from "./BottomSeparator";

interface StatItem {
  icon: string;
  value: number;
  label: string;
  suffix?: string;
}

export default function CreperieChiffres() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    covers: 0,
    fans: 0
  });

  const stats: StatItem[] = [
    {
      icon: "Defaults-dashboard",
      value: 35,
      label: "années d'existence"
    },
    {
      icon: "Defaults-cutlery",
      value: 115,
      label: "Couverts"
    },
    {
      icon: "Defaults-thumbs-o-up",
      value: 1000,
      label: "Fans sur Facebook"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('creperie-chiffres');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 secondes
      const steps = 60; // 60 étapes pour une animation fluide
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        const targetValue = stat.value;
        const increment = targetValue / steps;
        let currentValue = 0;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }

          setCounters(prev => ({
            ...prev,
            years: stat.label.includes('années') ? Math.floor(currentValue) : prev.years,
            covers: stat.label.includes('Couverts') ? Math.floor(currentValue) : prev.covers,
            fans: stat.label.includes('Fans') ? Math.floor(currentValue) : prev.fans
          }));
        }, stepDuration);
      });
    }
  }, [isVisible]);

  return (
    <section id="creperie-chiffres" className="bg-[#076993] text-white py-0 relative overflow-hidden">
      {/* Séparateur en haut de la section */}
      <TopSeparator color="#ffffff" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-berkshire mb-4 px-4">
            <span className="block sm:hidden">La crêperie</span>
            <span className="block sm:hidden">en chiffres</span>
            <span className="hidden sm:block">La crêperie en chiffres</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
              <div className="mb-4">
                <div className="text-3xl sm:text-4xl mb-4">
                  <i className={stat.icon}></i>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-white">
                  {stat.label.includes('années') && counters.years}
                  {stat.label.includes('Couverts') && counters.covers}
                  {stat.label.includes('Fans') && counters.fans}
                </div>
                <div className="text-base sm:text-lg text-white/90 font-open-sans">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Séparateur en bas de la section */}
      <BottomSeparator color="#ffffff" />
    </section>
  );
}
