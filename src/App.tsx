import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AccessibilityMenu from './components/AccessibilityMenu';

const AppContent: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update document direction and language when language changes
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Update page title
    document.title = language === 'he' 
      ? 'פורטפוליו אתרים ודפי נחיתה' 
      : 'Portfolio - Websites & Landing Pages';
  }, [language]);

  return (
    <div className="font-heebo">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <AccessibilityMenu />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AccessibilityProvider>
        <AppContent />
      </AccessibilityProvider>
    </LanguageProvider>
  );
}

export default App;