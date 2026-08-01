'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from '../app/page.module.css';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname?.startsWith(path);
  };

  const linkStyle = (path: string) => 
    `${styles.navLink} ${isActive(path) ? styles.active : ''}`;

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} onClick={() => setIsMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: '1.8rem',
            fontWeight: 700,
            letterSpacing: '2px',
            background: 'linear-gradient(135deg, #FFD700 0%, #FDB931 50%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ 
              fontSize: '2.5rem', 
              lineHeight: 1, 
              fontWeight: 400,
              fontStyle: 'italic',
              marginRight: '0.2rem'
            }}>OV</span>
            <span style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              lineHeight: 1.1
            }}>
              <span style={{ fontSize: '1.3rem' }}>Oxford VIP</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '6px', fontWeight: 400 }}>CHAUFFEURS</span>
            </span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className={`${styles.navLinks} ${styles.desktopNav}`}>
          <Link href="/" className={linkStyle('/')}>Home</Link>
          <Link href="/services" className={linkStyle('/services')}>Services</Link>
          <Link href="/our-fleet" className={linkStyle('/our-fleet')}>Our Fleet</Link>
          <Link href="/about-us" className={linkStyle('/about-us')}>About</Link>
          <Link href="/contact" className={linkStyle('/contact')}>Contact</Link>
          <Link href="/booking" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', marginLeft: '1rem' }}>
            Book Online
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNavOverlay}>
          <nav className={styles.mobileNavLinks}>
            <Link href="/" className={linkStyle('/')} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" className={linkStyle('/services')} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/our-fleet" className={linkStyle('/our-fleet')} onClick={() => setIsMobileMenuOpen(false)}>Our Fleet</Link>
            <Link href="/about-us" className={linkStyle('/about-us')} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" className={linkStyle('/contact')} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link href="/booking" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Book Online
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
