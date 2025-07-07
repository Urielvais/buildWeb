import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'he' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  he: {
    // Navigation
    'nav.home': 'ראשי',
    'nav.projects': 'פרויקטים',
    'nav.services': 'שירותים',
    'nav.testimonials': 'המלצות',
    'nav.contact': 'צור קשר',
    'nav.quote': 'הצעת מחיר',
    'nav.portfolio': 'LevelUp',
    'nav.slogan': 'Your Business',
    
    // Hero Section
    'hero.title': 'אתרים ודפי נחיתה',
    'hero.highlight': 'שממריאים',
    'hero.subtitle': 'אני מתמחה בבניית אתרים ודפי נחיתה שלא רק נראים מעולה, אלא גם מביאים תוצאות עסקיות אמיתיות.',
    'hero.viewProjects': 'צפה בפרויקטים',
    'hero.contactNow': 'דבר איתי עכשיו',
    'hero.scrollDown': 'גלול למטה',
    
    // Services
    'services.title': 'השירותים שלי',
    'services.subtitle': 'אני מציע מגוון שירותים בתחום פיתוח האתרים ודפי הנחיתה, מותאמים לצרכים הספציפיים של העסק שלך.',
    'services.websites': 'אתרי תדמית',
    'services.websites.desc': 'אתרים מקצועיים המציגים את העסק שלך בצורה הטובה ביותר ומייצרים אמון בקרב לקוחות פוטנציאליים.',
    'services.landing': 'דפי נחיתה',
    'services.landing.desc': 'דפי נחיתה ממוקדים המירה (Conversion) המותאמים לקמפיינים ספציפיים ומניעים ללקוחות לפעולה.',
    'services.ecommerce': 'חנויות אונליין',
    'services.ecommerce.desc': 'חנויות מקוונות מלאות עם ניהול מלאי, תשלומים מאובטחים, וחוויית קנייה אופטימלית ללקוחות.',
    'services.repairs': 'תיקונים ושדרוגים',
    'services.repairs.desc': 'תיקון תקלות, עדכון עיצוב, או שדרוג פונקציונליות לאתרים ודפי נחיתה קיימים.',
    'services.apps': 'אפליקציות ווב',
    'services.apps.desc': 'אפליקציות ווב מותאמות אישית המספקות ללקוחות שלך פתרונות מתקדמים וחוויית משתמש מעולה.',
    'services.ai': 'צ\'אט מבוסס AI',
    'services.ai.desc': 'פיתוח מערכות צ\'אט חכמות המשלבות בינה מלאכותית לשיפור שירות הלקוחות והמכירות.',
    'services.leads': 'יצירת לידים',
    'services.leads.desc': 'מערכות מתקדמות לזיהוי, איסוף וניהול לידים פוטנציאליים להגדלת המכירות.',
    'services.automation': 'אוטומציה',
    'services.automation.desc': 'פתרונות אוטומציה לייעול תהליכים עסקיים, חיסכון בזמן והגדלת היעילות.',
    'services.cta': 'בואו נדבר על הפרויקט שלך',
    'services.unsure': 'לא בטוח איזה שירות מתאים לך? אני אשמח לייעץ לך ולהתאים את הפתרון האידיאלי לצרכים שלך.',
    
    // Projects
    'projects.title': 'הפרויקטים שלי',
    'projects.subtitle': 'בחר מהקטגוריות כדי לראות את הפרויקטים הרלוונטיים או צפה בכל העבודות שלי.',
    'projects.all': 'הכל',
    'projects.websites': 'אתרים',
    'projects.landing': 'דפי נחיתה',
    'projects.ecommerce': 'חנויות אונליין',
    'projects.apps': 'אפליקציות',
    
    // Testimonials
    'testimonials.title': 'מה אומרים עליי',
    'testimonials.subtitle': 'לקוחות מרוצים שקיבלו תוצאות מעולות',
    'testimonials.prev': 'הקודם',
    'testimonials.next': 'הבא',
    
    // Contact
    'contact.title': 'צור קשר',
    'contact.subtitle': 'מעוניין בהצעת מחיר? יש לך שאלה? אני כאן בשבילך. מלא את הטופס ואחזור אליך בהקדם.',
    'contact.details': 'פרטי התקשרות',
    'contact.phone': 'טלפון',
    'contact.email': 'אימייל',
    'contact.hours': 'זמני מענה',
    'contact.hours.value': 'תוך 24 שעות בימי חול',
    'contact.why': 'למה לבחור בי?',
    'contact.why.text1': 'אני לא רק בונה אתרים - אני עוזר לעסק שלך להצליח ברשת! אני מתמקד בפתרונות שמביאים תוצאות עסקיות ממשיות.',
    'contact.why.text2': 'כל פרויקט מקבל את תשומת הלב המלאה שלי, עם דגש על עיצוב מקצועי, חוויית משתמש מעולה, וביצועים אופטימליים.',
    
    // Footer
    'footer.description': 'מספק שירותי פיתוח אתרים ודפי נחיתה באיכות גבוהה לעסקים קטנים ובינוניים.',
    'footer.quickNav': 'ניווט מהיר',
    'footer.hours': 'שעות פעילות',
    'footer.hours.weekdays': 'ראשון - חמישי:',
    'footer.hours.friday': 'שישי:',
    'footer.hours.saturday': 'שבת:',
    'footer.hours.closed': 'סגור',
    'footer.copyright': 'LevelUp. כל הזכויות שמורות.',
    'footer.backToTop': 'לראש העמוד',
    
    // Accessibility
    'accessibility.increaseFont': 'הגדל גופן',
    'accessibility.decreaseFont': 'הקטן גופן',
    'accessibility.resetFont': 'איפוס גופן',
    'accessibility.highContrast': 'ניגודיות גבוהה',
    'accessibility.normalContrast': 'ניגודיות רגילה',
    'accessibility.menu': 'תפריט נגישות'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.quote': 'Get Quote',
    'nav.portfolio': 'LevelUp',
    'nav.slogan': 'Your Business',
    
    // Hero Section
    'hero.title': 'Websites & Landing Pages',
    'hero.highlight': 'That Convert',
    'hero.subtitle': 'I specialize in building websites and landing pages that not only look great, but also deliver real business results.',
    'hero.viewProjects': 'View Projects',
    'hero.contactNow': 'Contact Me Now',
    'hero.scrollDown': 'Scroll Down',
    
    // Services
    'services.title': 'My Services',
    'services.subtitle': 'I offer a wide range of web development and landing page services, tailored to your business specific needs.',
    'services.websites': 'Corporate Websites',
    'services.websites.desc': 'Professional websites that showcase your business in the best way and build trust among potential customers.',
    'services.landing': 'Landing Pages',
    'services.landing.desc': 'Conversion-focused landing pages tailored to specific campaigns that drive customers to action.',
    'services.ecommerce': 'Online Stores',
    'services.ecommerce.desc': 'Complete online stores with inventory management, secure payments, and optimal shopping experience for customers.',
    'services.repairs': 'Repairs & Upgrades',
    'services.repairs.desc': 'Bug fixes, design updates, or functionality upgrades for existing websites and landing pages.',
    'services.apps': 'Web Applications',
    'services.apps.desc': 'Custom web applications that provide your customers with advanced solutions and excellent user experience.',
    'services.ai': 'AI-Powered Chat',
    'services.ai.desc': 'Development of smart chat systems that integrate artificial intelligence to improve customer service and sales.',
    'services.leads': 'Lead Generation',
    'services.leads.desc': 'Advanced systems for identifying, collecting and managing potential leads to increase sales.',
    'services.automation': 'Automation',
    'services.automation.desc': 'Automation solutions to streamline business processes, save time and increase efficiency.',
    'services.cta': 'Let\'s Talk About Your Project',
    'services.unsure': 'Not sure which service is right for you? I\'d be happy to advise you and tailor the ideal solution to your needs.',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Select from categories to see relevant projects or view all my work.',
    'projects.all': 'All',
    'projects.websites': 'Websites',
    'projects.landing': 'Landing Pages',
    'projects.ecommerce': 'Online Stores',
    'projects.apps': 'Applications',
    
    // Testimonials
    'testimonials.title': 'What Clients Say',
    'testimonials.subtitle': 'Satisfied clients who received excellent results',
    'testimonials.prev': 'Previous',
    'testimonials.next': 'Next',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Interested in a quote? Have a question? I\'m here for you. Fill out the form and I\'ll get back to you soon.',
    'contact.details': 'Contact Details',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Response Time',
    'contact.hours.value': 'Within 24 hours on weekdays',
    'contact.why': 'Why Choose Me?',
    'contact.why.text1': 'I don\'t just build websites - I help your business succeed online! I focus on solutions that bring real business results.',
    'contact.why.text2': 'Every project gets my full attention, with emphasis on professional design, excellent user experience, and optimal performance.',
    
    // Footer
    'footer.description': 'Providing high-quality website and landing page development services for small and medium businesses.',
    'footer.quickNav': 'Quick Navigation',
    'footer.hours': 'Business Hours',
    'footer.hours.weekdays': 'Sunday - Thursday:',
    'footer.hours.friday': 'Friday:',
    'footer.hours.saturday': 'Saturday:',
    'footer.hours.closed': 'Closed',
    'footer.copyright': 'LevelUp. All rights reserved.',
    'footer.backToTop': 'Back to Top',
    
    // Accessibility
    'accessibility.increaseFont': 'Increase Font',
    'accessibility.decreaseFont': 'Decrease Font',
    'accessibility.resetFont': 'Reset Font',
    'accessibility.highContrast': 'High Contrast',
    'accessibility.normalContrast': 'Normal Contrast',
    'accessibility.menu': 'Accessibility Menu'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('he');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};