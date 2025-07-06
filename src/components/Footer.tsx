import React from 'react';
import { Github, Linkedin, Instagram, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { key: 'nav.home', href: '#ראשי' },
    { key: 'nav.projects', href: '#פרויקטים' },
    { key: 'nav.services', href: '#שירותים' },
    { key: 'nav.testimonials', href: '#המלצות' },
    { key: 'nav.contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('nav.portfolio')}</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickNav')}</h3>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.hours')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>{t('footer.hours.weekdays')}</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.hours.friday')}</span>
                <span>9:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.hours.saturday')}</span>
                <span>{t('footer.hours.closed')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
            aria-label={t('footer.backToTop')}
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;