import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { t, language } = useLanguage();

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
    }
  ];

  return (
    <section id="המלצות" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto">{t('testimonials.title')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute top-4 right-4 text-blue-500">
                <Quote size={24} />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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