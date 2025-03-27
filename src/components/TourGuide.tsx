
import React from 'react';

// Simple container component that just renders its children
const TourGuide: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default TourGuide;
