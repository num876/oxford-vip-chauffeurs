import styles from '@/app/page.module.css';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Airport Transfers | 5 Star Oxford',
};

export default function Page() {
  return (
    <main className={styles.main} style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <section className="section">
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            <h1 className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>Airport Transfers</h1>
            <ReadMore mobileOnly={true} maxHeight={250}>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Airport Transfers & Airport Chauffeur Oxfordshire by 5 Star Oxford</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Tailored Airport Transfers throughout the UK</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Whether you’re looking to travel in elegance to the airport for an important international meeting or are looking for a special chauffeur as part of luxury getaway, here at 5 Star Oxford we can offer an exclusive range of Airport Transfers from Oxfordshire and beyond.</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Tailored around our unique fleet of  Range Rover and Mercedes vehicles, our dedicated chauffeurs can provide bespoke airport transfer packages that will ensure you arrive in style for your next flight, whatever the reason may be.</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>All of our chauffeurs have over 15 years experience in providing airport travel to and from many of the UK’s leading airports, working with a wide range of both commercial and private clients from across the Oxfordshire region.</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>As part of this process we can provide additional waiting times pre or post your flight time and can provide a wide selection of optional extras to ensure your journey is perfect for your requirements.</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>If you’d like to discover how 5 Star Oxford can provide the perfect airport transfer for your next journey then please get in touch below to receive a</p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>no obligation airport transfer quotation.</p>
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
