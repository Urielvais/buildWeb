import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = projects
    .filter(project => project.testimonial)
    .map(project => ({
      ...project.testimonial!,
      projectTitle: project.title,
      projectCategory: project.category,
    }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="המלצות" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto">מה אומרים עליי</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            הנה מה שלקוחות שעבדו איתי אומרים על השירות והתוצאות שהשגנו יחד.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-20 h-20 text-blue-100">
            <Quote size={80} />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="mb-6 md:mb-8">
                  <p className="text-lg md:text-xl text-gray-700 italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center">
                  {testimonial.imageUrl && (
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ml-4"
                    />
                  )}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-sm text-blue-500 mt-1">
                      פרויקט: {testimonial.projectTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white text-gray-600 hover:bg-blue-500 hover:text-white transition-all shadow-md"
              aria-label="המלצה קודמת"
            >
              <ChevronRight size={24} />
            </button>
            <div className="flex items-center px-4">
              <span className="text-gray-600">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white text-gray-600 hover:bg-blue-500 hover:text-white transition-all shadow-md"
              aria-label="המלצה הבאה"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;