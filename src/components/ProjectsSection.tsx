import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { ProjectCategory } from '../types';

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  
  const categories: { value: ProjectCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'הכל' },
    { value: 'website', label: 'אתרים' },
    { value: 'landing-page', label: 'דפי נחיתה' },
    { value: 'ecommerce', label: 'חנויות אונליין' },
    { value: 'app', label: 'אפליקציות' },
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="פרויקטים" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="section-heading inline-block mx-auto">הפרויקטים שלי</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            בחר מהקטגוריות כדי לראות את הפרויקטים הרלוונטיים או צפה בכל העבודות שלי.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 space-x-2 rtl:space-x-reverse">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 m-2 ${
                activeCategory === category.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
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