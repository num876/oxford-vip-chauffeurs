'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, 
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      // Automatically target main structural elements to fade in
      const selectors = [
        '.sectionHeader',
        '.fleetCard',
        '.contactInfo',
        '.glass-panel',
        '.service-card', // if it exists
        '[data-scroll-animate]'
      ].join(', ');

      const elements = document.querySelectorAll(selectors);
      
      elements.forEach((el) => {
        if (!el.classList.contains('scroll-animate') && !el.classList.contains('scroll-visible')) {
          el.classList.add('scroll-animate');
          observer.observe(el);
        }
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
