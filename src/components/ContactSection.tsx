import React, { useState } from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';
import { ContactFormData } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'website',
    urgency: 'standard',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'שם הוא שדה חובה';
    if (!formData.email.trim()) {
      newErrors.email = 'אימייל הוא שדה חובה';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }
    if (!formData.message.trim()) newErrors.message = 'הודעה היא שדה חובה';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'website',
        urgency: 'standard',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto">{t('contact.title')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-blue-50 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.details')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="ml-4 mt-1 bg-blue-100 rounded-full p-2 text-blue-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">{t('contact.phone')}</h4>
                    <p className="text-gray-600">055-2257468</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="ml-4 mt-1 bg-blue-100 rounded-full p-2 text-blue-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">{t('contact.email')}</h4>
                    <p className="text-gray-600">urielvaisfish@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="ml-4 mt-1 bg-blue-100 rounded-full p-2 text-blue-500">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">{t('contact.hours')}</h4>
                    <p className="text-gray-600">{t('contact.hours.value')}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium text-gray-800 mb-4">{t('contact.why')}</h4>
                <p className="text-gray-600 mb-4">
                  {t('contact.why.text1')}
                </p>
                <p className="text-gray-600">
                  {t('contact.why.text2')}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              {submitSuccess ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">ההודעה נשלחה בהצלחה!</h3>
                  <p className="text-gray-600">אחזור אליך בהקדם האפשרי.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        שם מלא <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="הכנס את שמך המלא"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        אימייל <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="אימייל ליצירת קשר"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        טלפון
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="מספר טלפון"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">
                        סוג השירות
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="website">אתר אינטרנט</option>
                        <option value="landing-page">דף נחיתה</option>
                        <option value="ai-chat">צ'אט מבוסס AI</option>
                        <option value="leads">יצירת לידים</option>
                        <option value="automation">אוטומציה</option>
                        <option value="repair">תיקון או שדרוג אתר קיים</option>
                        <option value="other">אחר</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      דחיפות הפרויקט
                    </label>
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="urgency"
                          value="urgent"
                          checked={formData.urgency === 'urgent'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-blue-500"
                        />
                        <span className="mr-2">דחוף (1-2 שבועות)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="urgency"
                          value="standard"
                          checked={formData.urgency === 'standard'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-blue-500"
                        />
                        <span className="mr-2">רגיל (3-4 שבועות)</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      פרטי הפרויקט <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="תאר את הפרויקט שלך ואת הצרכים שלך..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-primary px-8 py-3 text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 ml-3" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          שולח...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send size={18} className="ml-2" />
                          שלח פנייה
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;