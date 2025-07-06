import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{project.title}</h2>
            
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={16} className="ml-2" />
              <span>{project.date}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-8">{project.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">תכונות ופונקציונליות</h3>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 ml-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">טכנולוגיות</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a href="#contact" className="btn-primary text-center" onClick={onClose}>
              רוצה פרויקט דומה? צור קשר
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;