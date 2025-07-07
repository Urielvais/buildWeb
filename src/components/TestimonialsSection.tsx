import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: language === 'he' ? 'דני מרקוביץ' : 'Danny Markowitz',
      role: language === 'he' ? 'מנהל חנות אונליין' : 'Online Store Manager',
      company: 'Fashion Store',
      content: language === 'he' 
        ? 'העבודה הייתה מקצועית ומדויקת. האתר עובד מעולה והמכירות עלו ב-40% מאז השקתו. השירות היה מעולה ותמיכה מלאה לאורך כל הדרך.'
        : 'The work was professional and precise. The website works excellently and sales increased by 40% since launch. The service was excellent with full support throughout.',
      rating: 5
    },
    {
      name: language === 'he' ? 'רחל כהן' : 'Rachel Cohen',
      role: language === 'he' ? 'מנכ"לית סטארטאפ' : 'Startup CEO',
      company: 'Tech Innovation',
      content: language === 'he'
        ? 'דף הנחיתה שבנה עבורנו הביא תוצאות מעולות. שיעור ההמרה עלה משמעותית ואנחנו מאוד מרוצים מהתוצאה הסופית.'
        : 'The landing page built for us brought excellent results. Conversion rate increased significantly and we are very satisfied with the final result.',
      rating: 5
    },
    {
      name: language === 'he' ? 'אבי לוי' : 'Avi Levy',
      role: language === 'he' ? 'בעל עסק' : 'Business Owner',
      company: 'Local Business',
      content: language === 'he'
        ? 'שירות מעולה ותמיכה מלאה. האתר נראה מקצועי ומביא לקוחות חדשים כל הזמן. ההשקעה החזירה את עצמה תוך חודשיים.'
        : 'Excellent service and full support. The website looks professional and brings new customers all the time. The investment paid for itself within two months.',
      rating: 5
    },
    {
      name: language === 'he' ? 'מיכל שמואלי' : 'Michal Shmueli',
      role: language === 'he' ? 'מנהלת שיווק' : 'Marketing Manager',
      company: 'Digital Agency',
      content: language === 'he'
        ? 'הצ\'אט AI שפיתח עבורנו חסך לנו שעות עבודה ושיפר את שירות הלקוחות באופן דרמטי. הלקוחות מקבלים מענה מיידי 24/7.'
        : 'The AI chat developed for us saved us hours of work and dramatically improved customer service. Customers receive immediate response 24/7.',
      rating: 5
    },
    {
      name: language === 'he' ? 'לירון גולדברג' : 'Liron Goldberg',
      role: language === 'he' ? 'יועץ עסקי' : 'Business Consultant',
      company: 'Consulting Firm',
      content: language === 'he'
        ? 'מערכת יצירת הלידים שבנה הגדילה את מספר הפניות שלנו פי 3. תוצאות מדהימות! הפתרון מותאם בדיוק לצרכים שלנו.'
        : 'The lead generation system built increased our inquiries by 3x. Amazing results! The solution is perfectly tailored to our needs.',
      rating: 5
    },
    {
      name: language === 'he' ? 'חיים רוזנברג' : 'Chaim Rosenberg',
      role: language === 'he' ? 'מנהל מכירות' : 'Sales Manager',
      company: 'B2B Solutions',
      content: language === 'he'
        ? 'האוטומציה שיצר עבורנו חסכה לנו זמן רב וגרמה לתהליכים להיות הרבה יותר יעילים. עכשיו אנחנו יכולים להתמקד במה שחשוב באמת.'
        : 'The automation created for us saved us a lot of time and made processes much more efficient. Now we can focus on what really matters.',
      rating: 5
    },
    {
      name: language === 'he' ? 'שרה אברהם' : 'Sarah Abraham',
      role: language === 'he' ? 'מנהלת פרויקטים' : 'Project Manager',
      company: 'Construction Company',
      content: language === 'he'
        ? 'האתר החדש שלנו מקצועי ומרשים. הלקוחות מתרשמים מהמראה והפונקציונליות. קיבלנו הרבה פניות חדשות מאז השקתו.'
        : 'Our new website is professional and impressive. Clients are impressed by the look and functionality. We received many new inquiries since launch.',
      rating: 5
    },
    {
      name: language === 'he' ? 'יוסי פרידמן' : 'Yossi Friedman',
      role: language === 'he' ? 'מנהל רשת חנויות' : 'Chain Store Manager',
      company: 'Retail Chain',
      content: language === 'he'
        ? 'החנות האונליין שבנה עבורנו פועלת בצורה מושלמת. המערכת קלה לתפעול והלקוחות אוהבים את חוויית הקנייה החדשה.'
        : 'The online store built for us works perfectly. The system is easy to operate and customers love the new shopping experience.',
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

  // Auto-advance testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
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

        <div className="max-w-5xl mx-auto relative">
          {/* Main testimonial display */}
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center min-h-[350px] flex flex-col justify-center border border-gray-100">
            <div className="flex items-center justify-center mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={28} className="text-yellow-400 fill-current mx-1" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-10 italic leading-relaxed font-medium">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="text-right">
                <h4 className="font-bold text-gray-800 text-xl mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600 text-lg">{testimonials[currentIndex].role}</p>
                <p className="text-sm text-blue-600 font-medium">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-blue-50 border border-gray-200"
            aria-label={t('testimonials.prev')}
          >
            <ChevronLeft size={28} className="text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-blue-50 border border-gray-200"
            aria-label={t('testimonials.next')}
          >
            <ChevronRight size={28} className="text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-12 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400 w-4'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Testimonial counter */}
          <div className="text-center mt-6">
            <span className="text-gray-500 text-sm">
              {currentIndex + 1} / {testimonials.length}
            </span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary text-lg px-8 py-4">
            {language === 'he' ? 'בואו נתחיל לעבוד יחד' : 'Let\'s Start Working Together'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;