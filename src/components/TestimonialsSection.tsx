import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      name: language === 'he' ? 'דני' : 'Danny',
      role: language === 'he' ? 'מנהל חנות אונליין' : 'Online Store Manager',
      company: 'Fashion Store',
      content: language === 'he' 
        ? 'העבודה הייתה מקצועית ומדויקת. האתר עובד מעולה והמכירות עלו ב-40% מאז השקתו. השירות היה מעולה ותמיכה מלאה לאורך כל הדרך. אני ממליץ בחום על השירותים המקצועיים.'
        : 'The work was professional and precise. The website works excellently and sales increased by 40% since launch. The service was excellent with full support throughout. I highly recommend the professional services.',
      rating: 5
    },
    {
      name: language === 'he' ? 'רחל' : 'Rachel',
      role: language === 'he' ? 'מנכ"לית סטארטאפ' : 'Startup CEO',
      company: 'Tech Innovation',
      content: language === 'he'
        ? 'דף הנחיתה שבנה עבורנו הביא תוצאות מעולות. שיעור ההמרה עלה משמעותית ואנחנו מאוד מרוצים מהתוצאה הסופית. הפתרון היה מותאם בדיוק לצרכים שלנו והתמיכה הייתה זמינה תמיד.'
        : 'The landing page built for us brought excellent results. Conversion rate increased significantly and we are very satisfied with the final result. The solution was perfectly tailored to our needs and support was always available.',
      rating: 5
    },
    {
      name: language === 'he' ? 'אבי' : 'Avi',
      role: language === 'he' ? 'בעל עסק' : 'Business Owner',
      company: 'Local Business',
      content: language === 'he'
        ? 'שירות מעולה ותמיכה מלאה. האתר נראה מקצועי ומביא לקוחות חדשים כל הזמן. ההשקעה החזירה את עצמה תוך חודשיים. הייתי מרוצה מכל שלב בתהליך והתוצאה עלתה על הציפיות.'
        : 'Excellent service and full support. The website looks professional and brings new customers all the time. The investment paid for itself within two months. I was satisfied with every step of the process and the result exceeded expectations.',
      rating: 5
    },
    {
      name: language === 'he' ? 'מיכל' : 'Michal',
      role: language === 'he' ? 'מנהלת שיווק' : 'Marketing Manager',
      company: 'Digital Agency',
      content: language === 'he'
        ? 'הצ\'אט AI שפיתח עבורנו חסך לנו שעות עבודה ושיפר את שירות הלקוחות באופן דרמטי. הלקוחות מקבלים מענה מיידי 24/7. המערכת פשוטה לתפעול והתוצאות מדברות בעד עצמן.'
        : 'The AI chat developed for us saved us hours of work and dramatically improved customer service. Customers receive immediate response 24/7. The system is simple to operate and the results speak for themselves.',
      rating: 5
    },
    {
      name: language === 'he' ? 'לירון' : 'Liron',
      role: language === 'he' ? 'יועץ עסקי' : 'Business Consultant',
      company: 'Consulting Firm',
      content: language === 'he'
        ? 'מערכת יצירת הלידים שבנה הגדילה את מספר הפניות שלנו פי 3. תוצאות מדהימות! הפתרון מותאם בדיוק לצרכים שלנו והתמיכה הטכנית מעולה. השירות היה מקצועי ואמין לאורך כל הדרך.'
        : 'The lead generation system built increased our inquiries by 3x. Amazing results! The solution is perfectly tailored to our needs and technical support is excellent. The service was professional and reliable throughout.',
      rating: 5
    },
    {
      name: language === 'he' ? 'חיים' : 'Chaim',
      role: language === 'he' ? 'מנהל מכירות' : 'Sales Manager',
      company: 'B2B Solutions',
      content: language === 'he'
        ? 'האוטומציה שיצר עבורנו חסכה לנו זמן רב וגרמה לתהליכים להיות הרבה יותר יעילים. עכשיו אנחנו יכולים להתמקד במה שחשוב באמת. המערכת פועלת בצורה מושלמת ללא תקלות.'
        : 'The automation created for us saved us a lot of time and made processes much more efficient. Now we can focus on what really matters. The system works perfectly without any issues.',
      rating: 5
    },
    {
      name: language === 'he' ? 'שרה' : 'Sarah',
      role: language === 'he' ? 'מנהלת פרויקטים' : 'Project Manager',
      company: 'Construction Company',
      content: language === 'he'
        ? 'האתר החדש שלנו מקצועי ומרשים. הלקוחות מתרשמים מהמראה והפונקציונליות. קיבלנו הרבה פניות חדשות מאז השקתו. העבודה הייתה מקצועית והתוצאה עלתה על הציפיות שלנו.'
        : 'Our new website is professional and impressive. Clients are impressed by the look and functionality. We received many new inquiries since launch. The work was professional and the result exceeded our expectations.',
      rating: 5
    },
    {
      name: language === 'he' ? 'יוסי' : 'Yossi',
      role: language === 'he' ? 'מנהל רשת חנויות' : 'Chain Store Manager',
      company: 'Retail Chain',
      content: language === 'he'
        ? 'החנות האונליין שבנה עבורנו פועלת בצורה מושלמת. המערכת קלה לתפעול והלקוחות אוהבים את חוויית הקנייה החדשה. המכירות האונליין עלו באופן משמעותי והכל עובד חלק.'
        : 'The online store built for us works perfectly. The system is easy to operate and customers love the new shopping experience. Online sales increased significantly and everything works smoothly.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToTestimonial = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Auto-advance testimonials every 6 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextTestimonial, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

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
          <div 
            className="testimonial-card rounded-xl shadow-2xl p-6 md:p-12 text-center min-h-[400px] md:min-h-[350px] flex flex-col justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center justify-center mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={28} className="text-yellow-400 fill-current mx-1" />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10 italic leading-relaxed font-medium px-2">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="text-center sm:text-right">
                <h4 className="font-bold text-gray-800 text-lg md:text-xl mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600 text-base md:text-lg">{testimonials[currentIndex].role}</p>
                <p className="text-sm md:text-base text-blue-600 font-medium">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-blue-50 border border-gray-200 z-10"
            aria-label={t('testimonials.prev')}
          >
            <ChevronLeft size={20} className="md:w-7 md:h-7 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-blue-50 border border-gray-200 z-10"
            aria-label={t('testimonials.next')}
          >
            <ChevronRight size={20} className="md:w-7 md:h-7 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center items-center mt-8 md:mt-10 px-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                disabled={isTransitioning}
                className={`h-3 md:h-4 rounded-full transition-all duration-500 dot-indicator transform hover:scale-110 mx-1 md:mx-1.5 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8 md:w-12 shadow-lg active scale-110 z-10' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3 md:w-4 hover:bg-blue-300 z-0'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                style={{
                  pointerEvents: isTransitioning ? 'none' : 'auto'
                }}
              />
            ))}
          </div>

          {/* Testimonial counter */}
          <div className="text-center mt-4 md:mt-6">
            <span className="text-gray-500 text-sm">
              {currentIndex + 1} / {testimonials.length}
            </span>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center px-4">
          <a href="#contact" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 inline-block">
            {language === 'he' ? 'בואו נתחיל לעבוד יחד' : 'Let\'s Start Working Together'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;