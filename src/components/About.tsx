import React from 'react';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface AutoTableOptions {
  startY: number;
  head: string[][];
  body: string[][];
  theme: 'grid' | 'striped' | 'plain';
  headStyles: {
    fillColor: number[];
    textColor: number[];
    fontStyle: string;
  };
  alternateRowStyles: {
    fillColor: number[];
  };
  margin: {
    left: number;
    right: number;
  };
}

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: AutoTableOptions) => void;
  }
}

const About = () => {
  const handleDownloadBrochure = () => {
    try {
      // Create a new PDF document
      const doc = new jsPDF();
      
      // Set document properties
      doc.setProperties({
        title: 'Agapez Team Brochure',
        subject: 'Information about Agapez Team',
        author: 'Agapez',
        creator: 'Agapez Website'
      });
      
      // Add logo/header
      doc.setFillColor(41, 47, 94); // Dark blue color
      doc.rect(0, 0, 210, 40, 'F');
      
      // Add title
      doc.setTextColor(249, 195, 73); // Gold color for title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(24);
      doc.text('AGAPEZ', 105, 20, { align: 'center' });
      
      doc.setTextColor(255, 255, 255); // White color for subtitle
      doc.setFontSize(12);
      doc.text('Interdisciplinary Innovation Team', 105, 30, { align: 'center' });
      
      // Add team description
      doc.setTextColor(0, 0, 0); // Black text
      doc.setFontSize(14);
      doc.text('OUR STORY', 20, 50);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      
      // Format the text with proper line breaks
      const description1 = 'Founded in 2023, Agapez brings together experts from medicine, software engineering, electrical engineering, and corporate management. Our diverse team shares a passion for creating innovative solutions at the intersection of healthcare and technology.';
      const description2 = 'We believe in the power of interdisciplinary collaboration to solve complex problems. Our approach combines medical expertise with technological innovation, resulting in solutions that improve healthcare delivery and patient outcomes.';
      
      const splitDesc1 = doc.splitTextToSize(description1, 170);
      const splitDesc2 = doc.splitTextToSize(description2, 170);
      
      doc.text(splitDesc1, 20, 60);
      doc.text(splitDesc2, 20, 85);
      
      // Add team information in a table
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('TEAM INFORMATION', 20, 115);
      
      // Define the table data
      const tableData = [
        ['Founded', '2023'],
        ['Team Size', '8 Members'],
        ['Email', 'team@agapez.org'],
        ['Location', 'Nairobi & Remote'],
        ['Specialties', 'Healthcare, Tech, Engineering'],
        ['Availability', 'Taking New Projects']
      ];
      
      // Add the table using the imported autoTable
      doc.autoTable({
        startY: 120,
        head: [['Category', 'Details']],
        body: tableData,
        theme: 'grid' as const,
        headStyles: { 
          fillColor: [41, 47, 94],
          textColor: [249, 195, 73],
          fontStyle: 'bold' 
        },
        alternateRowStyles: { 
          fillColor: [240, 240, 240] 
        },
        margin: { left: 20, right: 20 }
      });
      
      // Use a fixed position for the contact section
      const finalY = 180;
      
      // Add contact section
      doc.setFillColor(41, 47, 94); // Dark blue color
      doc.rect(0, finalY, 210, 25, 'F');
      
      doc.setTextColor(255, 255, 255); // White text
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Contact Us', 105, finalY + 10, { align: 'center' });
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('Email: team@agapez.org | Website: www.agapez.org', 105, finalY + 18, { align: 'center' });
      
      // Save the PDF
      doc.save('agapez-brochure.pdf');
      
      console.log('PDF successfully generated and downloaded!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error creating the brochure. Please try again.');
    }
  };

  return (
    <div id="about" className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h6 className="inline-block text-cosmic-accent border-b-2 border-cosmic-accent pb-1 mb-4 uppercase tracking-widest text-sm font-medium">
            About Us
          </h6>
          <h2 className="text-4xl md:text-6xl font-bold text-white opacity-80">
            <span className="text-cosmic-accent">OUR</span> STORY
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-3xl font-bold mb-4">
                Team Agapez
              </h3>
              <h5 className="text-cosmic-accent text-xl mb-6">Interdisciplinary Innovation Team</h5>
              
              <p className="text-gray-300 mb-8">
                Founded in 2023, Agapez brings together experts from medicine, software engineering, 
                electrical engineering, and corporate management. Our diverse team shares a passion 
                for creating innovative solutions at the intersection of healthcare and technology.
              </p>
              
              <p className="text-gray-300 mb-8">
                We believe in the power of interdisciplinary collaboration to solve complex problems. 
                Our approach combines medical expertise with technological innovation, resulting in 
                solutions that improve healthcare delivery and patient outcomes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Founded</span>
                  <span className="text-gray-200">:</span>
                  <span className="ml-2">2023</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Team Size</span>
                  <span className="text-gray-200">:</span>
                  <span className="ml-2">8 Members</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Email</span>
                  <span className="text-gray-200">:</span>
                  <span className="ml-2">team@agapez.org</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Location</span>
                  <span className="text-gray-200">:</span>
                  <span className="ml-2">Nairobi & Remote</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Specialties</span>
                  <span className="text-gray-200">:</span>
                  <span className="ml-2">Healthcare, Tech, Engineering</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Availability</span>
                  <span className="text-gray-200">:</span>
                  <span className="ml-2">Taking New Projects</span>
                </div>
              </div>
              
              <button 
                className="btn-primary flex items-center" 
                onClick={handleDownloadBrochure}
              >
                <Download size={16} className="mr-2" />
                Download Our Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
