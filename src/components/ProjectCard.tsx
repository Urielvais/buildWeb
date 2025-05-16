import React, { useState } from 'react';
import { ExternalLink, Code, Calendar } from 'lucide-react';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryLabel: Record<string, string> = {
    'website': 'אתר',
    'landing-page': 'דף נחיתה',
    'ecommerce': 'חנות אונליין',
    'app': 'אפליקציה',
    'other': 'אחר'
  };

  return (
    <>
      <div 
        className="project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="relative overflow-hidden h-56">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
            {categoryLabel[project.category]}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{project.summary}</p>
          
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <Calendar size={16} className="ml-2" />
            <span>{project.date}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="bg-gray-50 text-gray-500 text-xs px-2 py-1 rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-500 font-medium text-sm hover:text-blue-700 transition-colors"
            >
              למידע נוסף
            </button>
            
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-500 transition-colors text-sm"
              >
                <span className="mr-2">צפה באתר</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <ProjectModal 
          project={project} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default ProjectCard;