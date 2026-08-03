import styles from '@/app/page.module.css';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Business Travel | 5 Star Oxford',
};

export default function Page() {
  return (
    <main className={styles.main} style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <section className="section">
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            <h1 className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>Business Travel</h1>
            <ReadMore mobileOnly={true} maxHeight={250}>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Business Travel & Corporate Chauffeur by 5 Star Oxford</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Luxury Business Travel throughout the Oxfordshire region</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Finding a chauffeur that offers luxury and reliability can often prove to be a trickier task than you might first think, but with 5 Star Oxford you can be rest assured that you’ll receive the finest service every time.</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>As Oxford’s premier provider of chauffeur driven transport for businesses throughout the region and beyond, we have over 15 years of experience in making sure that you and your colleagues get to your location in the maximum levels of comfort and relaxation.</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>By using the finest vehicles and chauffeurs that are dedicated to providing a luxury service that is tailored to your requirements, we will guarantee that you arrive at your destination on time and perfectly prepared for the meeting ahead.</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Whether you’d like to travel to your meeting in a state-of-the-art Range Rover or an elegant and comfortable S-Class Mercedes, we can provide a business travel service that is ideally suited to your needs.</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>To find out more about our range of business travel services or to book your next journey, please discover more below.</p>
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
