import styles from '../app/page.module.css';
import Link from 'next/link';
import StarRating from './StarRating';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <StarRating size="1.5rem" />
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Premium Service</span>
        </div>
        <p style={{ textAlign: 'center', maxWidth: '600px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>
          As Oxfordshire's leading provider of Chauffeur Travel Services, we can tailor your journey around your exact requirements to ensure you arrive in style.
        </p>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: '1.4', marginBottom: '0.5rem', opacity: 0.7 }}>
          5 Star Oxford operating as Oxford Prestige Chauffeurs<br />
          Company Registration No: 13176037
        </p>
        <p>&copy; {new Date().getFullYear()} 5 Star Oxford (UK) Ltd. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

