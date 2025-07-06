import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="המלצות" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto">מה אומרים עליי</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            אני עובד עם לקוחות מרוצים שמקבלים תוצאות מעולות. ההמלצות יתווספו כאן לאחר השלמת הפרויקט.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">בקרוב - המלצות לקוחות</h3>
              <p className="text-lg text-gray-600 mb-6">
                אני עובד עם לקוחות מרוצים ומספק תוצאות מעולות. ההמלצות יתווספו כאן לאחר השלמת הפרויקט.
              </p>
              <p className="text-gray-500">
                   צור קשר עכשיו!
              </p>
            </div>
            
            <a href="#contact" className="btn-primary">
              בואו נתחיל לעבוד יחד
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;