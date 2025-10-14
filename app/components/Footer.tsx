import Link from "next/link";

export default function Footer() {
  return (
    <footer id="colophon" className="site-footer bg-primary text-white" role="contentinfo">
      <div className="footer-widgets">
        <div className="footer-widgets_in max-w-6xl mx-auto px-6 py-10">
          <div className="footer-widgets_area grid md:grid-cols-3 gap-8">
            <aside id="stm_contact-2" className="widget widget_stm_contact">
              <h1 className="widget-title text-xl mb-4 font-body">Nous contacter</h1>
              <ul className="stm_contact_list space-y-2 text-sm">
                <li className="contact-list_item __address">14, rue des Tondeurs 68100 MULHOUSE</li>
                <li className="contact-list_item __telephone">03 89 45 79 43</li>
                <li className="contact-list_item __email">
                  <a href="mailto:contact@crampous-mad.fr" className="hover:underline">contact@crampous-mad.fr</a>
                </li>
              </ul>
            </aside>
            
            <aside id="stm_facebook-2" className="widget widget_stm_facebook">
              <h1 className="widget-title text-xl mb-4 font-body">Facebook</h1>
              <div className="fb-page-container">
                <div className="bg-white/10 p-4 rounded text-center">
                  <p className="text-sm mb-2">Suivez-nous sur Facebook</p>
                  <a 
                    href="https://www.facebook.com/LaCreperieCrampousMad/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block bg-[#1877f2] hover:bg-[#166fe5] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Suivre sur Facebook
                  </a>
                </div>
              </div>
            </aside>
            
            <aside id="stm_schedule-2" className="widget widget_stm_schedule">
              <h1 className="widget-title text-xl mb-4 font-body">Service en continu</h1>
              <ul className="stm_schedule_list space-y-2 text-sm">
                <li className="schedule-list_item flex items-center gap-2">
                  <span className="schedule_day">Mardi au Jeudi</span>
                  <span className="schedule_separator flex-1 h-px bg-white/30"></span>
                  <span className="schedule_time">11h30 - 21h00</span>
                </li>
                <li className="schedule-list_item flex items-center gap-2">
                  <span className="schedule_day">Vendredi et Samedi</span>
                  <span className="schedule_separator flex-1 h-px bg-white/30"></span>
                  <span className="schedule_time">11h30 - 21h30</span>
                </li>
                <li className="schedule-list_item flex items-center gap-2">
                  <span className="schedule_day">Dimanche et Lundi</span>
                  <span className="schedule_separator flex-1 h-px bg-white/30"></span>
                  <span className="schedule_time">Fermé</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
      
      <div className="site-info bg-primary border-t border-white/20">
        <div className="site-info_in max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="copyright text-sm">
              <a 
                target="_blank" 
                rel="noreferrer"
                href="https://cyberexperts.io" 
                className="text-white hover:underline"
              >
                © Cyber Experts 2023
              </a>
              {" - "}
              <a 
                target="_blank" 
                rel="noreferrer"
                href="http://crampous-mad.fr/mentions-legales" 
                className="text-white hover:underline"
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
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98zm-7.83 1.297c-1.297 0-2.448.49-3.323 1.297-.807.875-1.297 2.026-1.297 3.323s.49 2.448 1.297 3.323c.875.807 2.026 1.297 3.323 1.297s2.448-.49 3.323-1.297c.807-.875 1.297-2.026 1.297-3.323s-.49-2.448-1.297-3.323c-.875-.807-2.026-1.297-3.323-1.297z"/>
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
