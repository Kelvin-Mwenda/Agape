import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Github } from 'lucide-react';

const Hero = () => {
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'We are an interdisciplinary team of medical students, software engineers, and corporate management specialists. Together, we transform healthcare challenges into innovative solutions.';

  useEffect(() => {
    const nameTimer = setTimeout(() => setShowName(true), 500);
    const roleTimer = setTimeout(() => setShowRole(true), 1000);
    
    return () => {
      clearTimeout(nameTimer);
      clearTimeout(roleTimer);
    };
  }, []);

  useEffect(() => {
    if (showRole) {
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typeTimer);
        }
      }, 30);
      
      return () => clearInterval(typeTimer);
    }
  }, [showRole]);

  return (
    <div id="home" className="min-h-screen flex items-center justify-center pt-32 px-4">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Welcome to <span className="text-cosmic-accent">Agapez</span>
        </h1>
        
        <div className="relative h-24 md:h-16 mb-8">
          <p className="text-base md:text-lg text-gray-300 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            {typedText}
            <span className="inline-block w-0.5 h-5 bg-cosmic-accent ml-1 animate-pulse"></span>
          </p>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '1.3s' }}>
          <span className="text-cosmic-accent">Bridging Minds, Building Tomorrow</span>
        </h2>
        
        <div className="flex justify-center space-x-5 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <a href="#" className="social-icon">
            <Facebook size={18} />
          </a>
          <a href="#" className="social-icon">
            <Twitter size={18} />
          </a>
          <a href="#" className="social-icon">
            <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
