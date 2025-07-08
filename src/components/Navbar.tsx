import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#ראשי' },
    { key: 'nav.projects', href: '#פרויקטים' },
    { key: 'nav.services', href: '#שירותים' },
    { key: 'nav.testimonials', href: '#המלצות' },
    { key: 'nav.contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img 
                src="/favicon.svg" 
                alt="LevelUp Logo" 
                className="w-10 h-10"
              />
              <div className="logo-container">
                <span className={`logo-main transition-colors duration-300 ${
                  isScrolled ? 'text-blue-600' : 'text-blue-500'
                }`}>
                  {t('nav.portfolio')}
                </span>
                <span className="logo-slogan">
                  {t('nav.slogan')}
                </span>
              </div>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`mx-4 py-2 px-3 text-sm font-medium transition-all duration-300 hover:text-blue-500 hover:bg-blue-50 rounded-lg ${
                  isScrolled ? 'text-gray-700' : 'text-gray-600'
                }`}
              >
                {t(item.key)}
              </a>
            ))}
            <LanguageToggle />
            <a href="#contact" className="btn-primary mr-4">
              {t('nav.quote')}
            </a>
          </nav>
          
          <button
            type="button"
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="px-4 py-3 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-gray-800 font-medium hover:text-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2 border-t">
              <LanguageToggle />
              <a 
                href="#contact" 
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.quote')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;