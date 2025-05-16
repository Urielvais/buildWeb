export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  imageUrl: string;
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  testimonial?: Testimonial;
  date: string;
}

export type ProjectCategory = 'website' | 'landing-page' | 'app' | 'ecommerce' | 'other';

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: 'website' | 'landing-page' | 'repair' | 'other';
  urgency: 'urgent' | 'standard';
  message: string;
}