import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id));
    
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.4, // when 40% of the section is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'team', label: 'TEAM' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Approximate height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveLink(id);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 py-4 px-6 ${
        scrolled ? 'bg-cosmic-navy/90 backdrop-blur-md' : 'bg-transparent'
      } transition-all duration-300 z-50 hidden lg:block`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cosmic-accent/50">
              <img 
                src="/Agapez .jpg" 
                alt="Agapez Logo" 
                className="w-full h-full object-cover filter grayscale hover:filter-none transition-all duration-500"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-cosmic-accent">Agapez</h2>
              <p className="text-xs text-gray-300">Bridging Minds, Building Tomorrow</p>
            </div>
          </div>
          
          <div className="flex-grow mx-8">
            <ul className="flex space-x-8 justify-center">
              {navItems.map((item) => (
                <li key={item.id} className="overflow-hidden">
                  <a
                    href={`#${item.id}`}
                    className={`nav-item text-sm tracking-wider block py-1 ${
                      activeLink === item.id ? 'active-nav-item' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <a 
              href="#contact" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 lg:hidden block ${
        scrolled ? 'bg-cosmic-navy/90 backdrop-blur-md' : 'bg-transparent'
      } transition-all duration-300`}>
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-cosmic-accent/50">
              <img 
                src="/Agapez .jpg" 
                alt="Agapez Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg font-bold text-cosmic-accent">Agapez</h2>
          </div>
          
          <button 
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <ul className="p-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.id} className="border-b border-white/10 pb-2">
                <a
                  href={`#${item.id}`}
                  className={`block py-2 ${
                    activeLink === item.id ? 'text-cosmic-accent' : 'text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-4">
            <a 
              href="#contact" 
              className="btn-primary block text-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
                setMobileMenuOpen(false);
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
