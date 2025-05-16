import React from 'react';
import { Github, Linkedin, Instagram, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">פורטפוליו</h3>
            <p className="text-gray-300 mb-4">
              מספק שירותי פיתוח אתרים ודפי נחיתה באיכות גבוהה לעסקים קטנים ובינוניים.
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
            <h3 className="text-xl font-bold mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              {['ראשי', 'פרויקטים', 'שירותים', 'המלצות', 'צור קשר'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">שעות פעילות</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>ראשון - חמישי:</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>שישי:</span>
                <span>9:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>שבת:</span>
                <span>סגור</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} פורטפוליו אתרים. כל הזכויות שמורות.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
            aria-label="לראש העמוד"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;