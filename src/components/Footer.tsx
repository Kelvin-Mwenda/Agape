import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cosmic-navy/30 py-8 border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Agapez. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">Made by chocs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
