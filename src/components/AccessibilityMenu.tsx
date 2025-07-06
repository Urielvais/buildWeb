import React, { useState } from 'react';
import { Accessibility, Plus, Minus, RotateCcw, Eye, EyeOff } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useLanguage } from '../contexts/LanguageContext';

const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { increaseFontSize, decreaseFontSize, resetFontSize, toggleHighContrast, highContrast } = useAccessibility();
  const { t } = useLanguage();

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label={t('accessibility.menu')}
      >
        <Accessibility size={24} />
      </button>
      
      {isOpen && (
        <div className="mt-2 bg-white rounded-lg shadow-xl p-4 min-w-[200px] border">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">{t('accessibility.menu')}</h3>
          
          <div className="space-y-2">
            <button
              onClick={increaseFontSize}
              className="w-full flex items-center justify-between p-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
            >
              <span>{t('accessibility.increaseFont')}</span>
              <Plus size={16} />
            </button>
            
            <button
              onClick={decreaseFontSize}
              className="w-full flex items-center justify-between p-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
            >
              <span>{t('accessibility.decreaseFont')}</span>
              <Minus size={16} />
            </button>
            
            <button
              onClick={resetFontSize}
              className="w-full flex items-center justify-between p-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
            >
              <span>{t('accessibility.resetFont')}</span>
              <RotateCcw size={16} />
            </button>
            
            <button
              onClick={toggleHighContrast}
              className="w-full flex items-center justify-between p-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
            >
              <span>{highContrast ? t('accessibility.normalContrast') : t('accessibility.highContrast')}</span>
              {highContrast ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;