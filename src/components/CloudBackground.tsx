'use client';

import { useEffect, useState } from 'react';

const cloudColors = [
  '#A7C7E7', // Light blue
  '#E0BBE4', // Light purple
  '#F3E5AB', // Light yellow
  '#D3E4CD', // Light green
  '#FFD8B1', // Light orange
];

const Cloud = ({ style }: { style: React.CSSProperties }) => {
  return <div className="cloud" style={style} />;
};

export function CloudBackground() {
  const [clouds, setClouds] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    const generateClouds = () => {
      const newClouds = [];
      const numClouds = 5;
      for (let i = 0; i < numClouds; i++) {
        const size = Math.random() * 400 + 200; // 200px to 600px
        const duration = Math.random() * 40 + 30; // 30s to 70s
        const delay = Math.random() * -duration; // Start at a random point in the animation
        
        newClouds.push({
          id: i,
          style: {
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: cloudColors[i % cloudColors.length],
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          },
        });
      }
      setClouds(newClouds);
    };

    generateClouds();
  }, []);

  return (
    <div className="cloud-bg" aria-hidden="true">
      {clouds.map(cloud => (
        <Cloud key={cloud.id} style={cloud.style} />
      ))}
    </div>
  );
}
