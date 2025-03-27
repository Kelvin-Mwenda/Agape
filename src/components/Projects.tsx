import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'technology', name: 'Technology' },
    { id: 'research', name: 'Research' },
    { id: 'portfolio', name: 'Portfolios' }
  ];
  
  const projects = [
    {
      title: 'Dairy Harbor',
      category: 'technology',
      image: '/dairy.jpg',
      description: 'Dairy Harbor is a web-based system for managing dairy farms, tracking milk production, cow health, feeding, and finances. It streamlines operations with inventory management, automated reports, and real-time insights for better decision-making.',
      link: 'https://dairyharbor.netlify.app/'
    },
    {
      title: 'Kelvin Mwenda',
      category: 'portfolio',
      image: '/Kelvin.jpg',
      description: "I'm a web developer and designer focused on building visually appealing, high-performing websites and applications with seamless user experiences.",
      link: 'https://kelvinmwenda.netlify.app/'
    },
    {
      title: 'Mobile Health Monitoring',
      category: 'healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'A mobile application that allows patients to monitor vital signs and share data with healthcare providers.',
      link: '#'
    },
    {
      title: 'Medical Imaging AI',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
      description: 'AI-powered analysis of medical images to assist in diagnosis and treatment planning.',
      link: '#'
    },
    {
      title: 'Remote Patient Care',
      category: 'healthcare',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      description: 'A platform for remote consultation and patient monitoring for rural communities.',
      link: '#'
    },
    {
      title: 'Medical Supply Chain',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
      description: 'Blockchain-based supply chain management for medical supplies and equipment.',
      link: '#'
    },
    {
      title: 'Neurological Disorders Research',
      category: 'research',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2129&q=80',
      description: 'Research on neurological disorders and development of assistive technologies.',
      link: '#'
    },
    {
      title: 'Healthcare Data Analytics',
      category: 'research',
      image: '/Health.jpg',
      description: 'Advanced analytics platform for healthcare data to identify patterns and trends.',
      link: '#'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  return (
    <div id="projects" className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h6 className="inline-block text-cosmic-accent border-b-2 border-cosmic-accent pb-1 mb-4 uppercase tracking-widest text-sm font-medium">
            Our Work
          </h6>
          <h2 className="text-4xl md:text-6xl font-bold text-white opacity-80">
            <span className="text-cosmic-accent">PROJ</span>ECTS
          </h2>
        </div>
        
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {categories.map((category) => (
            <button 
              key={category.id} 
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-cosmic-accent text-cosmic-navy font-medium' 
                  : 'bg-white/5 hover:bg-white/10'
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden group opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-cosmic-accent/90 text-cosmic-navy">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cosmic-accent hover:underline"
                >
                  View Project <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
