import React from 'react';

interface StarRatingProps {
  className?: string;
  size?: string;
  gap?: string;
}

export default function StarRating({ className = '', size = '1.2rem', gap = '0.15rem' }: StarRatingProps) {
  return (
    <div 
      className={`star-rating-container ${className}`} 
      style={{ 
        display: 'flex', 
        gap, 
        color: 'var(--accent-gold)', 
        fontSize: size,
        filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))',
        lineHeight: 1
      }}
    >
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  );
}
