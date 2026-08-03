import styles from '@/app/page.module.css';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Event Travel | 5 Star Oxford',
};

export default function Page() {
  return (
    <main className={styles.main} style={{ paddingTop: '100px', minHeight: '80vh', paddingBottom: '4rem' }}>
      <section className="section">
        <div className="container">
          <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Premium Hero Image Header */}
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              <img 
                src="/images/service-event.jpg" 
                alt="Event Travel" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,12,20,0.95) 0%, transparent 100%)' }}></div>
            </div>
            
            {/* Text Content */}
            <div style={{ padding: '3rem', marginTop: '-120px', position: 'relative', zIndex: 1 }}>
              <h1 className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>Event Travel</h1>
              <ReadMore mobileOnly={true} maxHeight={250}>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Event Travel & Chaffeur Transport Oxfordshire from 5 Star Oxford</p>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Event Travel to the Nations Top Events</p>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Travelling to the next major sporting event can now be easier, more relaxing and luxurious than ever before with our dedicated range of event travel services. Designed to provide a VIP service for clients throughout Oxfordshire and beyond, we will take all the stress out of travelling to your favourite event, wherever it may be.</p>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Whether you’re heading down to Wimbledon for a day packed full of tennis or are having a day at the races with a few friends, we can provide tailored event travel packages to make sure that you arrive on-time, completely relaxed and ready for the days events that lay ahead.</p>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>In addition to this, at 5 Star Oxford we can also provide a dedicated travel service for you and your clients should you be heading to corporate hospitality for the day. This can include several location pickups as well as any additional requirements you may have to guarantee we leave a lasting impression.</p>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>To discover more about our range of event chauffeur services or to get a free no obligation instant quote to your next event, please book your journey by clicking below.</p>
              </ReadMore>
              <div style={{ marginTop: '3rem' }}>
                <Link href="/booking" className="btn btn-primary" style={{ padding: '1rem 3rem', display: 'inline-flex', fontSize: '1.1rem' }}>
                  Book Your Transfer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
