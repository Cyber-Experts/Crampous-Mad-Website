"use client";

import { useState } from "react";
import ContactInfo from "../components/ContactInfo";

export default function ContactezNousPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Formulaire soumis:", formData);
    alert("Message envoyé avec succès !");
  };

  return (
    <main>
      {/* Header avec image de fond */}
      <header className="relative h-[400px] w-full">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('/images/Slider-construction.jpg')` }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <h1 className="text-[#076993] text-4xl md:text-5xl font-display mb-6" style={{ fontFamily: 'Berkshire Swash, serif' }}>
            Contactez nous
          </h1>
          
          {/* Barre avec losange */}
          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-[#076993]"></div>
            <div className="w-2 h-2 bg-[#076993] transform rotate-45 mx-4"></div>
            <div className="w-16 h-0.5 bg-[#076993]"></div>
          </div>
        </div>
      </header>

      {/* Section principale */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Titre avec icône */}
          <div className="text-center mb-16">
            <h2 className="text-[#076993] text-4xl md:text-5xl font-display mb-8" style={{ fontFamily: 'Berkshire Swash, serif' }}>
              Dites bonjour
            </h2>
            
            {/* Icône avec barres */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-0.5 bg-[#262559]"></div>
              <div className="mx-4">
                <img src="/images/picto1.png" alt="Picto" className="h-12 w-auto inline-block" />
              </div>
              <div className="w-16 h-0.5 bg-[#262559]"></div>
            </div>
          </div>

          {/* Contenu en 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="space-y-6">
                  {/* Nom */}
                  <div className="form-field text-field_wrapper">
                    <label htmlFor="contact-name" className="block mb-2">
                      <span className="ic-pen text-[#262559] mr-2">
                        <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                        </svg>
                      </span>
                      Votre nom
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#262559] focus:outline-none focus:ring-2 focus:ring-[#262559]/20"
                    />
                  </div>

                  {/* Prénom */}
                  <div className="form-field text-field_wrapper">
                    <label htmlFor="contact-firstname" className="block mb-2">
                      <span className="text-[#262559] mr-2">
                        <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                        </svg>
                      </span>
                      Votre prénom
                    </label>
                    <input
                      type="text"
                      id="contact-firstname"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      placeholder="Votre prénom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#262559] focus:outline-none focus:ring-2 focus:ring-[#262559]/20"
                    />
                  </div>

                  {/* Email */}
                  <div className="form-field text-field_wrapper">
                    <label htmlFor="contact-email" className="block mb-2">
                      <span className="ic-envelope text-[#262559] mr-2">
                        <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                      </span>
                      Votre e-mail
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre e-mail"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#262559] focus:outline-none focus:ring-2 focus:ring-[#262559]/20"
                    />
                  </div>

                  {/* Téléphone */}
                  <div className="form-field text-field_wrapper">
                    <label htmlFor="contact-phone" className="block mb-2">
                      <span className="ic-phone text-[#262559] mr-2">
                        <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                      </span>
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      placeholder="Téléphone"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#262559] focus:outline-none focus:ring-2 focus:ring-[#262559]/20"
                    />
                  </div>

                  {/* Sujet */}
                  <div className="form-field text-field_wrapper">
                    <label htmlFor="contact-city" className="block mb-2">
                      <span className="ic-bug text-[#262559] mr-2">
                        <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      </span>
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="contact-city"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleInputChange}
                      placeholder="Sujet"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#262559] focus:outline-none focus:ring-2 focus:ring-[#262559]/20"
                    />
                  </div>

                  {/* Message */}
                  <div className="form-field big-text-field_wrapper">
                    <label htmlFor="contact-message" className="block mb-2">
                      <span className="text-[#262559] mr-2">
                        <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                        </svg>
                      </span>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#262559] focus:outline-none focus:ring-2 focus:ring-[#262559]/20 resize-vertical"
                    />
                  </div>
                </div>

                {/* Bouton d'envoi */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-[#262559] hover:bg-[#232323] text-white px-8 py-4 text-lg font-medium transition-colors duration-300 border-2 border-[#262559] hover:border-[#232323]"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>

            {/* Carte Google Maps */}
            <div className="flex items-center justify-center">
              <div className="w-full h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.1234567890!2d7.33797!3d47.74895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQ0JzU2LjIiTiA3wrAyMCcxNi43IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Crampous Mad - 14 Rue des Tondeurs, 68100 Mulhouse"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactInfo />
    </main>
  );
}