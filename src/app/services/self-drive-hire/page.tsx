import styles from '@/app/page.module.css';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Self Drive Hire | 5 Star Oxford',
};

export default function Page() {
  return (
    <main className={styles.main} style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <section className="section">
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            <h1 className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>Self Drive Hire</h1>
            
            <ReadMore mobileOnly={true} maxHeight={250}>
              <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>We offer an exquisite fleet of the world's most prestigious supercars, ensuring an unforgettable driving experience for every occasion. Our commitment to exceptional customer service guarantees a seamless and exhilarating journey from booking to return.</p>
              
              <h3 style={{ color: 'var(--accent-gold)', marginTop: '2rem', marginBottom: '1rem', fontWeight: 500 }}>Bentley Continental</h3>
              <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>The Bentley Continental epitomizes automotive excellence, combining unparalleled luxury with exceptional performance and timeless design.</p>
              
              <h3 style={{ color: 'var(--accent-gold)', marginTop: '2rem', marginBottom: '1rem', fontWeight: 500 }}>Rolls Royce Phantom</h3>
              <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>The Rolls Royce Phantom stands unrivaled in the realm of luxury vehicles, delivering an extraordinary experience with its exquisite craftsmanship, unmatched elegance, and supreme comfort.</p>
              
              <h3 style={{ color: 'var(--accent-gold)', marginTop: '2rem', marginBottom: '1rem', fontWeight: 500 }}>Bentley Bentayga</h3>
              <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>The Bentley Bentayga sets the standard for luxury SUVs, offering a perfect blend of opulent comfort, cutting-edge technology, and remarkable off-road capability.</p>
              
              <h3 style={{ color: 'var(--accent-gold)', marginTop: '2rem', marginBottom: '1rem', fontWeight: 500 }}>Lamborghini Urus</h3>
              <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>The Lamborghini Urus is a masterpiece of engineering, seamlessly combining blistering speed, dynamic handling, and luxurious comfort in an SUV like no other.</p>
              
              <h3 style={{ color: 'var(--accent-gold)', marginTop: '2rem', marginBottom: '1rem', fontWeight: 500 }}>Range Rover SVR</h3>
              <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>The Range Rover SVR combines breathtaking performance, robust off-road capability, and opulent luxury, setting a new standard for high-performance SUVs.</p>
              
              <h3 style={{ color: 'var(--accent-gold)', marginTop: '2rem', marginBottom: '1rem', fontWeight: 500 }}>BMW M4</h3>
              <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>The BMW M4 delivers an exhilarating driving experience with its powerful performance, precision handling, and luxurious interior, making it a standout choice for enthusiasts and everyday drivers alike.</p>
            </ReadMore>
            
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link href="/booking" className="btn btn-primary" style={{ padding: '1rem 3rem', display: 'inline-block', fontSize: '1.1rem' }}>
                Book Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
