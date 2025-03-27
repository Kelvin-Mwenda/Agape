import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Kelvin Mwenda',
      role: 'Computer Science Student & Software Dev',
      image: '/Kelvin.jpg',
      social: {
        twitter: 'https://x.com/jinx_vinke',
        linkedin: 'https://www.linkedin.com/in/kelvin-mwenda-b4a632262/',
        github: '#'
      }
    },
    {
      name: 'Charles Mwangi',
      role: 'Computer Tech Student',
      image: '/Charles.jpeg',
      social: {
        twitter: '#',
        linkedin: 'https://www.linkedin.com/in/charles-mwangi-83a54524b/',
        github: '#'
      }
    },
    {
      name: 'David Macharia',
      role: 'Neurosurgery Student',
      image: '/David.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'James Karanja',
      role: 'Electrical & ElectronicsEngineering Student',
      image: '/James.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Victor Mwangi',
      role: 'Electrical & Electronics Engineer',
      image: '/Victor.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Moses Muiruri',
      role: 'Computer Science Student & Software Developer',
      image: '/Moses.jpeg',
      social: {
        twitter: '#',
        linkedin: 'https://www.linkedin.com/in/moses-njau/',
        github: '#'
      }
    },
    {
      name: 'Milka Mwende',
      role: 'Corporate Association Student',
      image: '/Milka.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Ann Kariuki',
      role: 'Medical Labs Student',
      image: '/Ann.png',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  return (
    <div id="team" className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h6 className="inline-block text-cosmic-accent border-b-2 border-cosmic-accent pb-1 mb-4 uppercase tracking-widest text-sm font-medium">
            Meet Our Team
          </h6>
          <h2 className="text-4xl md:text-6xl font-bold text-white opacity-80">
            <span className="text-cosmic-accent">OUR</span> EXPERTS
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden group opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-cosmic-accent mb-4 text-sm">{member.role}</p>
                
                <div className="flex space-x-4">
                  <a 
                    href={member.social.twitter} 
                    className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 
                    transition-all duration-300 hover:border-cosmic-accent hover:bg-cosmic-accent/20
                    hover:text-cosmic-accent"
                  >
                    <Twitter size={14} />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 
                    transition-all duration-300 hover:border-cosmic-accent hover:bg-cosmic-accent/20
                    hover:text-cosmic-accent"
                  >
                    <Linkedin size={14} />
                  </a>
                  <a 
                    href={member.social.github} 
                    className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 
                    transition-all duration-300 hover:border-cosmic-accent hover:bg-cosmic-accent/20
                    hover:text-cosmic-accent"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
