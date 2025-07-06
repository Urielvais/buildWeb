import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="ראשי" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 fade-in">
            {t('hero.title')} <span className="text-blue-600">{t('hero.highlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 slide-up">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="#פרויקטים" className="btn-primary order-2 sm:order-1">
              {t('hero.viewProjects')}
            </a>
            <a href="#contact" className="btn-outline order-1 sm:order-2">
              {t('hero.contactNow')}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-600 mb-2">{t('hero.scrollDown')}</p>
        <div className="animate-bounce">
          <ChevronDown className="mx-auto" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;