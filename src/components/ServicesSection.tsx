import React from 'react';
import { GlobeIcon, FileText, ShoppingCart, Settings, Smartphone } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'אתרי תדמית',
      description: 'אתרים מקצועיים המציגים את העסק שלך בצורה הטובה ביותר ומייצרים אמון בקרב לקוחות פוטנציאליים.',
      icon: <GlobeIcon size={32} />,
    },
    {
      title: 'דפי נחיתה',
      description: 'דפי נחיתה ממוקדים המירה (Conversion) המותאמים לקמפיינים ספציפיים ומניעים ללקוחות לפעולה.',
      icon: <FileText size={32} />,
    },
    {
      title: 'חנויות אונליין',
      description: 'חנויות מקוונות מלאות עם ניהול מלאי, תשלומים מאובטחים, וחוויית קנייה אופטימלית ללקוחות.',
      icon: <ShoppingCart size={32} />,
    },
    {
      title: 'תיקונים ושדרוגים',
      description: 'תיקון תקלות, עדכון עיצוב, או שדרוג פונקציונליות לאתרים ודפי נחיתה קיימים.',
      icon: <Settings size={32} />,
    },
    {
      title: 'אפליקציות ווב',
      description: 'אפליקציות ווב מותאמות אישית המספקות ללקוחות שלך פתרונות מתקדמים וחוויית משתמש מעולה.',
      icon: <Smartphone size={32} />,
    },
  ];

  return (
    <section id="שירותים" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto">השירותים שלי</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            אני מציע מגוון שירותים בתחום פיתוח האתרים ודפי הנחיתה, מותאמים לצרכים הספציפיים של העסק שלך.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            לא בטוח איזה שירות מתאים לך? אני אשמח לייעץ לך ולהתאים את הפתרון האידיאלי לצרכים שלך.
          </p>
          <a href="#contact" className="btn-primary">
            בואו נדבר על הפרויקט שלך
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;