import React, { useState } from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';
import { ContactFormData } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
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
    
    if (!formData.name.trim()) {
      newErrors.name = language === 'he' ? 'שם הוא שדה חובה' : 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'he' ? 'אימייל הוא שדה חובה' : 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = language === 'he' ? 'כתובת אימייל לא תקינה' : 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = language === 'he' ? 'הודעה היא שדה חובה' : 'Message is required';
    }
    
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      // Create email content
      const emailContent = `
שם: ${formData.name}
אימייל: ${formData.email}
טלפון: ${formData.phone}
סוג שירות: ${formData.serviceType}
דחיפות: ${formData.urgency}
הודעה: ${formData.message}
      `;

      // Send email using mailto (this will open the user's email client)
      const subject = encodeURIComponent('פנייה חדשה מהאתר - ' + formData.name);
      const body = encodeURIComponent(emailContent);
      const mailtoLink = `mailto:urielvaisfish@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
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
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {language === 'he' ? 'ההודעה נשלחה בהצלחה!' : 'Message sent successfully!'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'he' ? 'אחזור אליך בהקדם האפשרי.' : 'I\'ll get back to you as soon as possible.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        {language === 'he' ? 'שם מלא' : 'Full Name'} <span className="text-red-500">*</span>
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
                        placeholder={language === 'he' ? 'הכנס את שמך המלא' : 'Enter your full name'}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        {language === 'he' ? 'אימייל' : 'Email'} <span className="text-red-500">*</span>
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
                        placeholder={language === 'he' ? 'אימייל ליצירת קשר' : 'Contact email'}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        {language === 'he' ? 'טלפון' : 'Phone'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={language === 'he' ? 'מספר טלפון' : 'Phone number'}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">
                        {language === 'he' ? 'סוג השירות' : 'Service Type'}
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="website">{language === 'he' ? 'אתר אינטרנט' : 'Website'}</option>
                        <option value="landing-page">{language === 'he' ? 'דף נחיתה' : 'Landing Page'}</option>
                        <option value="ai-chat">{language === 'he' ? 'צ\'אט מבוסס AI' : 'AI Chat'}</option>
                        <option value="leads">{language === 'he' ? 'יצירת לידים' : 'Lead Generation'}</option>
                        <option value="automation">{language === 'he' ? 'אוטומציה' : 'Automation'}</option>
                        <option value="repair">{language === 'he' ? 'תיקון או שדרוג אתר קיים' : 'Repair or upgrade existing site'}</option>
                        <option value="other">{language === 'he' ? 'אחר' : 'Other'}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      {language === 'he' ? 'דחיפות הפרויקט' : 'Project Urgency'}
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
                        <span className="mr-2">
                          {language === 'he' ? 'דחוף (1-2 שבועות)' : 'Urgent (1-2 weeks)'}
                        </span>
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
                        <span className="mr-2">
                          {language === 'he' ? 'רגיל (3-4 שבועות)' : 'Standard (3-4 weeks)'}
                        </span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      {language === 'he' ? 'פרטי הפרויקט' : 'Project Details'} <span className="text-red-500">*</span>
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
                      placeholder={language === 'he' ? 'תאר את הפרויקט שלך ואת הצרכים שלך...' : 'Describe your project and your needs...'}
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
                          {language === 'he' ? 'שולח...' : 'Sending...'}
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send size={18} className="ml-2" />
                          {language === 'he' ? 'שלח פנייה' : 'Send Message'}
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