import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import CosmicBackground from '../components/CosmicBackground';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TourGuide from '../components/TourGuide';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    document.title = "Agapez | Interdisciplinary Innovation Team";
  }, []);

  return (
    <TourGuide>
      <div className="relative">
        <CosmicBackground />
        <Navbar />
        <ScrollToTop />
        
        <main className="relative">
          <section id="home">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="services">
            <Services />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="team">
            <Team />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </TourGuide>
  );
};

export default Index;
