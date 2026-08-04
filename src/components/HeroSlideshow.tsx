'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  '/images/oxford-heritage-bg.jpg',
  '/images/s-class2.jpg',
  '/images/range-rover2.jpg',
  '/images/rolls-royce-ghost.jpg',
  '/images/v-class2.jpg',
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {heroImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="5 Star Oxford Luxury Fleet"
          fill
          priority={index === 0}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: -3,
          }}
        />
      ))}
    </>
  );
}
