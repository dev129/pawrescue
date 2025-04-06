'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


const Eye = ({ position }) => (
  <div className="eye relative w-24 h-24 md:w-32 md:h-32 bg-[#BB0D01] dark:bg-yellow-500 rounded-full inline-block">
    <div 
      className="absolute w-12 h-12 md:w-16 md:h-16 bg-[#E2C9B7] dark:bg-blue-950 rounded-full"
      style={{
        top: '50%',
        left: '50%',
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`
      }}
    >
      <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  </div>
);

const NotFound = () => {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePositions, setEyePositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const calculateEyePosition = (eyeRect) => {
      if (!eyeRect) return { x: 0, y: 0 };

      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      // Calculate angle between mouse and eye center
      const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX);

      // Limit movement radius
      const radius = 10;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      return { x, y };
    };

    const eyes = document.querySelectorAll('.eye');
    const newPositions = Array.from(eyes).map(eye => 
      calculateEyePosition(eye.getBoundingClientRect())
    );

    setEyePositions(newPositions);
  }, [mousePosition]);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-pink-500 flex flex-col items-center justify-between relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 z-0" />
        
        <div className="text-center relative z-10 flex-grow flex flex-col items-center justify-center dark:text-white">
          <h1 className="text-8xl md:text-9xl font-bold text-black dark:text-white tracking-wider mb-4 relative">
            W
            <span className="inline-block relative mx-1">
              <Eye position={eyePositions[0]} />
            </span>
            <span className="inline-block relative mx-1">
              <Eye position={eyePositions[1]} />
            </span>
            FS!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 ">
            Are you lost mate?
          </p>

          <div className="flex space-x-4">
            <button
              onClick={handleGoBack}
              className="px-8 py-3 bg-gray-800 text-white rounded-full text-lg font-semibold
              transform transition-all duration-200 hover:scale-105 hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Go Back
            </button>
            <button
              onClick={() => router.push('/')}
              className="px-8 py-3 bg-gray-800 text-white rounded-full text-lg font-semibold
              transform transition-all duration-200 hover:scale-105 hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;