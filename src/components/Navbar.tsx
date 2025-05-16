import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="/" 
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-blue-500'
              }`}
            >
              פורטפוליו
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-1 rtl:space-x-reverse">
            {['ראשי', 'פרויקטים', 'שירותים', 'המלצות', 'צור קשר'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`mx-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-500 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-700'
                }`}
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="btn-primary mr-3">
              הצעת מחיר
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
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-4">
            {['ראשי', 'פרויקטים', 'שירותים', 'המלצות', 'צור קשר'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-800 font-medium hover:text-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block w-full text-center btn-primary mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              הצעת מחיר
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;