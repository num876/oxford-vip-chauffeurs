import styles from '../app/page.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Oxford VIP Chauffeurs. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
