import styles from '@/app/page.module.css';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Tours | 5 Star Oxford',
};

export default function Page() {
  return (
    <main className={styles.main} style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <section className="section">
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            <h1 className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>Tours</h1>
            <ReadMore mobileOnly={true} maxHeight={250}>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Chauffeur Driven Tours in Oxfordshire from 5 Star Oxford</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Luxury Tours throughout Oxfordshire, Cotswolds & Beyond</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>As Oxfordshire’s premier chauffeur provider, at 5 Star Oxford we excel in providing guided tours throughout the region and beyond. Whether you’re looking to have a sightseeing tour of Oxford, an in-depth tour of the Cotswolds or even want to have a chauffeur driven journey to London, we can design a tour travel package that’s perfect for your requirements.</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Whilst our dedicated team of chauffeurs are experts at navigating the local area, each chauffeur also has over 15 years of experience in touring around major UK landmarks, ensuring that we can take you to wherever you want to go or whatever you want to experience in a luxurious and special manner.</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>After discussing your requirements with a dedicated member of our team, we will then provide you with an itemised quote for every section of your journey. Once agreed, our expert chauffeurs will then take care of the rest, allowing you to sit-back, relax and enjoy some of the many sites that we will guide you through along the way.</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>To find out how you can book the perfect chauffeur driven tour for your requirements, please booking your next journey below.</p>
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
