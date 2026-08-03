import pageStyles from '@/app/page.module.css';
import styles from '../services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Airport Transfers | 5 Star Oxford',
};

export default function Page() {
  return (
    <main className={`${pageStyles.main} ${styles.subpageMain}`}>
      <section className="section">
        <div className="container">
          <div className={`glass-panel ${styles.subpagePanel}`}>
            {/* Premium Hero Image Header */}
            <div className={styles.subpageHero}>
              <Image src="/images/service-airport.jpg" alt="Airport Transfers" fill priority className={styles.subpageHeroImage} />
              <div className={styles.subpageHeroOverlay}></div>
            </div>
            
            {/* Text Content */}
            <div className={styles.subpageContent} data-scroll-animate="true">
              <h1 className={pageStyles.sectionTitle} style={{ marginBottom: '2rem' }}>Airport Transfers</h1>
              <ReadMore mobileOnly={true} maxHeight={250}>
                <p className={styles.subpageParagraph}>Airport Transfers & Airport Chauffeur Oxfordshire by 5 Star Oxford</p>
                <p className={styles.subpageParagraph}>Tailored Airport Transfers throughout the UK</p>
                <p className={styles.subpageParagraph}>Whether you’re looking to travel in elegance to the airport for an important international meeting or are looking for a special chauffeur as part of luxury getaway, here at 5 Star Oxford we can offer an exclusive range of Airport Transfers from Oxfordshire and beyond.</p>
                <p className={styles.subpageParagraph}>Tailored around our unique fleet of Range Rover and Mercedes vehicles, our dedicated chauffeurs can provide bespoke airport transfer packages that will ensure you arrive in style for your next flight, whatever the reason may be.</p>
                <p className={styles.subpageParagraph}>All of our chauffeurs have over 15 years experience in providing airport travel to and from many of the UK’s leading airports, working with a wide range of both commercial and private clients from across the Oxfordshire region.</p>
                <p className={styles.subpageParagraph}>As part of this process we can provide additional waiting times pre or post your flight time and can provide a wide selection of optional extras to ensure your journey is perfect for your requirements.</p>
                <p className={styles.subpageParagraph}>If you’d like to discover how 5 Star Oxford can provide the perfect airport transfer for your next journey then please get in touch below to receive a no obligation airport transfer quotation.</p>
              </ReadMore>
              <div className={styles.subpageCTA}>
                <Link href="/booking" className={`btn btn-primary ${styles.subpageBtn}`}>
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
