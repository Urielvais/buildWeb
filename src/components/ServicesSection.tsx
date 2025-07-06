import React from 'react';
import { GlobeIcon, FileText, ShoppingCart, Settings, Smartphone, Bot, Target, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: 'services.websites',
      descKey: 'services.websites.desc',
      icon: <GlobeIcon size={32} />,
    },
    {
      titleKey: 'services.landing',
      descKey: 'services.landing.desc',
      icon: <FileText size={32} />,
    },
    {
      titleKey: 'services.ecommerce',
      descKey: 'services.ecommerce.desc',
      icon: <ShoppingCart size={32} />,
    },
    {
      titleKey: 'services.ai',
      descKey: 'services.ai.desc',
      icon: <Bot size={32} />,
    },
    {
      titleKey: 'services.leads',
      descKey: 'services.leads.desc',
      icon: <Target size={32} />,
    },
    {
      titleKey: 'services.automation',
      descKey: 'services.automation.desc',
      icon: <Zap size={32} />,
    },
    {
      titleKey: 'services.repairs',
      descKey: 'services.repairs.desc',
      icon: <Settings size={32} />,
    },
    {
      titleKey: 'services.apps',
      descKey: 'services.apps.desc',
      icon: <Smartphone size={32} />,
    },
  ];

  return (
    <section id="שירותים" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto">{t('services.title')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:scale-105"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{t(service.titleKey)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t(service.descKey)}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            {t('services.unsure')}
          </p>
          <a href="#contact" className="btn-primary">
            {t('services.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;