import Link from "next/link";

export default function Footer() {
  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
      {/* Zigzag border with transparent pattern */}
      <div className="stm-row_separator-top">
        <svg x="0px" y="0px" width="100%" height="15px">
          <defs>
            <pattern id="row-top-separator_499" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <path fillRule="evenodd" clipRule="evenodd" fill="rgba(255,255,255,0.8)" d="M7.504-0.008l7.504,7.504L7.504,15L0,7.496L7.504-0.008z"></path>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="15" fill="url(#row-top-separator_499)"></rect>
        </svg>
      </div>
      
      {/* Main footer content - WHITE background */}
      <div className="footer-widgets bg-white text-gray-800">
        <div className="footer-widgets_in max-w-6xl mx-auto px-6 py-8">
          <div className="footer-widgets_area grid md:grid-cols-3 gap-6">
            {/* Contact */}
            <aside id="stm_contact-2" className="widget widget_stm_contact">
              <h1 className="widget-title text-lg mb-4 font-body font-bold text-[#076993]" style={{ fontSize: '16px', lineHeight: '35px' }}>Nous contacter</h1>
              <ul className="stm_contact_list space-y-2 text-gray-800 font-sans" style={{ fontSize: '13px' }}>
                <li className="contact-list_item __address flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#076993] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  14, rue des Tondeurs 68100 MULHOUSE
                </li>
                <li className="contact-list_item __telephone flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#076993] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  03 89 45 79 43
                </li>
                <li className="contact-list_item __email flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#076993] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:contact@crampous-mad.fr" className="hover:underline text-gray-800">contact@crampous-mad.fr</a>
                </li>
              </ul>
            </aside>
            
            {/* Facebook */}
            <aside id="stm_facebook-2" className="widget widget_stm_facebook">
              <h1 className="widget-title text-lg mb-4 font-body font-bold text-[#076993]" style={{ fontSize: '16px', lineHeight: '35px' }}>Facebook</h1>
              <div className="fb-page-container">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#076993] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">LC</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 font-sans">La Crêperie Cra...</p>
                      <p className="text-xs text-gray-600 font-sans">1.7K followers</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.facebook.com/LaCreperieCrampousMad/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm font-medium transition-colors border border-gray-300 font-sans"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Follow Page
                  </a>
                </div>
              </div>
            </aside>
            
            {/* Schedule */}
            <aside id="stm_schedule-2" className="widget widget_stm_schedule">
              <h1 className="widget-title text-lg mb-4 font-body font-bold text-[#076993]" style={{ fontSize: '16px', lineHeight: '35px' }}>Service en continu</h1>
              <ul className="stm_schedule_list space-y-2 text-gray-800 font-sans" style={{ fontSize: '13px' }}>
                <li className="schedule-list_item flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#076993] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="schedule_day font-sans font-bold" style={{ fontSize: '13px' }}>Mardi au Jeudi</span>
                  <span className="schedule_separator flex-1 h-px bg-gray-300"></span>
                  <span className="schedule_time font-sans font-normal" style={{ fontSize: '13px' }}>11h30 - 21h00</span>
                </li>
                <li className="schedule-list_item flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#076993] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="schedule_day font-sans font-bold" style={{ fontSize: '13px' }}>Vendredi et Samedi</span>
                  <span className="schedule_separator flex-1 h-px bg-gray-300"></span>
                  <span className="schedule_time font-sans font-normal" style={{ fontSize: '13px' }}>11h30 - 21h30</span>
                </li>
                <li className="schedule-list_item flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#076993] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="schedule_day font-sans font-bold" style={{ fontSize: '13px' }}>Dimanche et Lundi</span>
                  <span className="schedule_separator flex-1 h-px bg-gray-300"></span>
                  <span className="schedule_time font-sans font-normal" style={{ fontSize: '13px' }}>Fermé</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
      
      {/* Bottom blue bar */}
      <div className="site-info bg-[#076993]">
        <div className="site-info_in max-w-6xl mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="copyright text-white font-sans" style={{ fontSize: '13px' }}>
              <a 
                target="_blank" 
                rel="noreferrer"
                href="https://cyberexperts.io" 
                className="hover:underline"
              >
                © Cyber Experts 2025
              </a>
              {" - "}
              <a 
                href="/mentions-legales" 
                className="hover:underline"
              >
                Mentions légales
              </a>
            </p>
            
            <div className="social-networks">
              <ul className="social-networks_list flex gap-4">
                <li>
                  <a 
                    href="https://www.facebook.com/LaCreperieCrampousMad/?ref=ts&fref=ts" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white hover:text-white/80 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/crampousmad/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white hover:text-white/80 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
