import React from 'react';
import { Code, HeartPulse, Zap, Database, Users, Microscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={36} />,
      title: 'Software Development',
      description: 'Our development team builds healthcare software solutions, mobile applications, and innovative platforms for healthcare providers and patients.'
    },
    {
      icon: <HeartPulse size={36} />,
      title: 'Medical Research',
      description: 'Our medical students conduct research on healthcare challenges and work with our engineers to develop technological solutions.'
    },
    {
      icon: <Zap size={36} />,
      title: 'Electrical Engineering',
      description: 'Our engineers design and develop medical devices, sensors, and other electrical solutions to address healthcare needs.'
    },
    {
      icon: <Database size={36} />,
      title: 'Health Data Analysis',
      description: 'We develop systems for collecting, analyzing, and visualizing health data to support medical decision-making and research.'
    },
    {
      icon: <Users size={36} />,
      title: 'Healthcare Consulting',
      description: 'Our team provides strategic guidance to healthcare organizations looking to implement technological solutions.'
    },
    {
      icon: <Microscope size={36} />,
      title: 'Laboratory Innovations',
      description: 'We create tools and systems to improve laboratory processes and enhance diagnostic capabilities.'
    }
  ];

  return (
    <div id="services" className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h6 className="inline-block text-cosmic-accent border-b-2 border-cosmic-accent pb-1 mb-4 uppercase tracking-widest text-sm font-medium">
            Our Expertise
          </h6>
          <h2 className="text-4xl md:text-6xl font-bold text-white opacity-80">
            <span className="text-cosmic-accent">SERV</span>ICES
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 flex flex-col items-center text-center group overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-cosmic-accent/10 flex items-center justify-center mb-6 text-cosmic-accent group-hover:bg-cosmic-accent group-hover:text-cosmic-navy transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
