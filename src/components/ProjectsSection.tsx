import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { ProjectCategory } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const { t } = useLanguage();
  
  const categories: { value: ProjectCategory | 'all'; labelKey: string }[] = [
    { value: 'all', labelKey: 'projects.all' },
    { value: 'website', labelKey: 'projects.websites' },
    { value: 'landing-page', labelKey: 'projects.landing' },
    { value: 'ecommerce', labelKey: 'projects.ecommerce' },
    { value: 'app', labelKey: 'projects.apps' },
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="פרויקטים" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="section-heading inline-block mx-auto">{t('projects.title')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 space-x-2 rtl:space-x-reverse">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 m-2 ${
                activeCategory === category.value
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t(category.labelKey)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;