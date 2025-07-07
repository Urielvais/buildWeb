import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'ד. מ.',
      role: language === 'he' ? 'מנהל חנות אונליין' : 'Online Store Manager',
      company: 'Fashion Store',
      content: language === 'he' 
        ? 'העבודה הייתה מקצועית ומדויקת. האתר עובד מעולה והמכירות עלו ב-40% מאז השקתו.'
        : 'The work was professional and precise. The website works excellently and sales increased by 40% since launch.',
      rating: 5
    },
    {
      name: 'ר. כ.',
      role: language === 'he' ? 'מנכ"ל סטארטאפ' : 'Startup CEO',
      company: 'Tech Company',
      content: language === 'he'
        ? 'דף הנחיתה שבנה עבורנו הביא תוצאות מעולות. שיעור ההמרה עלה משמעותית.'
        : 'The landing page built for us brought excellent results. Conversion rate increased significantly.',
      rating: 5
    },
    {
      name: 'א. ל.',
      role: language === 'he' ? 'בעלת עסק' : 'Business Owner',
      company: 'Local Business',
      content: language === 'he'
        ? 'שירות מעולה ותמיכה מלאה. האתר נראה מקצועי ומביא לקוחות חדשים כל הזמן.'
        : 'Excellent service and full support. The website looks professional and brings new customers all the time.',
      rating: 5
    },
    {
      name: 'מ. ש.',
      role: language === 'he' ? 'מנהל שיווק' : 'Marketing Manager',
      company: 'Digital Agency',
      content: language === 'he'
        ? 'הצ\'אט AI שפיתח עבורנו חסך לנו שעות עבודה ושיפר את שירות הלקוחות באופן דרמטי.'
        : 'The AI chat developed for us saved us hours of work and dramatically improved customer service.',
      rating: 5
    },
    {
      name: 'ל. ג.',
      role: language === 'he' ? 'יועץ עסקי' : 'Business Consultant',
      company: 'Consulting Firm',
      content: language === 'he'
        ? 'מערכת יצירת הלידים שבנה הגדילה את מספר הפניות שלנו פי 3. תוצאות מדהימות!'
        : 'The lead generation system built increased our inquiries by 3x. Amazing results!',
      rating: 5
    },
    {
      name: 'ח. ר.',
      role: language === 'he' ? 'מנהל מכירות' : 'Sales Manager',
      company: 'B2B Company',
      content: language === 'he'
        ? 'האוטומציה שיצר עבורנו חסכה לנו זמן רב וגרמה לתהליכים להיות הרבה יותר יעילים.'
        : 'The automation created for us saved us a lot of time and made processes much more efficient.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="המלצות" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto">{t('testimonials.title')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial display */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center min-h-[300px] flex flex-col justify-center">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current mx-1" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="text-right">
                <h4 className="font-bold text-gray-800 text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
            aria-label={t('testimonials.prev')}
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
            aria-label={t('testimonials.next')}
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            {language === 'he' ? 'בואו נתחיל לעבוד יחד' : 'Let\'s Start Working Together'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;