'use client';

import { useState, useEffect } from 'react';
import styles from './ReadMore.module.css';

export default function ReadMore({ 
  children, 
  mobileOnly = true,
  maxHeight = 250
}: { 
  children: React.ReactNode, 
  mobileOnly?: boolean,
  maxHeight?: number
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldClamp = (mobileOnly ? isMobile : true) && !isExpanded;

  return (
    <div className={`${styles.wrapper} ${shouldClamp ? styles.isClamped : ''}`}>
      <div 
        className={`${styles.content} ${shouldClamp ? styles.collapsed : ''}`}
        style={{ maxHeight: shouldClamp ? `${maxHeight}px` : '5000px' }}
      >
        {children}
      </div>
      
      {shouldClamp && (
        <div className={styles.fadeOverlay}></div>
      )}
      
      {(mobileOnly ? isMobile : true) && (
        <button 
          className={styles.toggleButton} 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'See Less' : 'See More...'}
        </button>
      )}
    </div>
  );
}
