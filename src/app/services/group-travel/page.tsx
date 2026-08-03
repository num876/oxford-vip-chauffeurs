import styles from '@/app/page.module.css';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Group Travel | 5 Star Oxford',
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
                src="/images/service-group.jpg" 
                alt="Group Travel" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,12,20,0.95) 0%, transparent 100%)' }}></div>
            </div>
            
            {/* Text Content */}
            <div style={{ padding: '3rem', marginTop: '-120px', position: 'relative', zIndex: 1 }}>
              <h1 className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>Group Travel</h1>
              <ReadMore mobileOnly={true} maxHeight={250}>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Group Travel & Executive Chauffeur Oxfordshire by 5 Star Oxford</p>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Bespoke Group Travel for Oxford Executives</p>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Here at 5 Star Oxford we know that as a business you often have to travel to meetings with a number of your colleagues so it’s essential to find travel that’s perfect for a group as well as on your own.</p>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>With this in mind we’ve developed a luxurious range of group travel services to ensure that you and your team can travel to your meeting in Oxfordshire or beyond in style and comfort. After discussing your requirements in full, we’ll create a tailored plan that’s designed around your schedule and business meetings to guarantee that every detail is adhered to.</p>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>Whether you’re travelling throughout the Oxfordshire region, or need to travel further in the UK to discuss business with a new client, at 5 Star Oxford we’ll make sure that your Group Travel is expertly delivered, is completely stress-free and allows you to discuss your meeting pre and post your arrival.</p>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>To discover more about our range of Group Travel services for business or private clients throughout the Oxfordshire region, please click below to discuss your journey with our team.</p>
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
