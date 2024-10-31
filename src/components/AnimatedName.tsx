'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedName() {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const name = nameRef.current;
    if (!name) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = name.getBoundingClientRect();
      
      // Calculate distance from mouse to center
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Normalize distance for glow effect (0 to 1)
      const maxDistance = 300; // Adjust this value to change glow radius
      const normalizedDistance = Math.max(0, 1 - distance / maxDistance);
      
      // Apply glow effect based on distance
      name.style.textShadow = `0 0 ${normalizedDistance * 30}px rgba(96, 165, 250, ${normalizedDistance})`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <span 
      ref={nameRef}
      className="text-blue-400 inline-block font-bold"
      style={{
        transition: 'text-shadow 0.2s ease-out'
      }}
    >
      Nahom D. Negash
    </span>
  );
} 