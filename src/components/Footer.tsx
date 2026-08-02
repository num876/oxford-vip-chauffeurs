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
        <p>&copy; {new Date().getFullYear()} 5 Star Oxford. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
