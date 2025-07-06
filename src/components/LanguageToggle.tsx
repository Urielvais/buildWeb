import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'he' ? 'en' : 'he';
    setLanguage(newLanguage);
    
    // Update document direction and language
    document.documentElement.dir = newLanguage === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
      aria-label={`Switch to ${language === 'he' ? 'English' : 'Hebrew'}`}
    >
      <Globe size={18} />
      <span>{language === 'he' ? 'english' : 'עברית'}</span>
    </button>
  );
};

export default LanguageToggle;