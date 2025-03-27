
import React, { useEffect, useState } from 'react';

const CosmicBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number, size: number, top: string, left: string, opacity: number, delay: number }>>([]);
  const [orbs, setOrbs] = useState<Array<{ id: number, size: number, top: string, left: string, delay: string }>>([]);

  useEffect(() => {
    // Create stars - increased count from 150 to 250
    const generatedStars = Array.from({ length: 250 }, (_, i) => ({
      id: i,
      size: Math.random() * 3, // Increased max size from 2 to 3
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 3 // Decreased max delay from 5 to 3 for faster animation
    }));
    setStars(generatedStars);

    // Create orbs - increased count from 8 to 12
    const generatedOrbs = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 120 + 100, // Slightly increased size
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 1.5}s` // Decreased from 2s to 1.5s for faster animation
    }));
    setOrbs(generatedOrbs);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 cosmic-bg">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            animation: `pulse-slow ${2 + star.delay}s ease-in-out infinite`, // Decreased base time from 3s to 2s
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
      
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="floating-orb animate-float-delay"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            top: orb.top,
            left: orb.left,
            animationDelay: orb.delay,
            animationDuration: '5s' // Down from default 7s to increase motion speed
          }}
        />
      ))}
    </div>
  );
};

export default CosmicBackground;
