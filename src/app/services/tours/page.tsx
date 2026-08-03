import pageStyles from '@/app/page.module.css';
import styles from '../services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Tours | 5 Star Oxford',
};

export default function Page() {
  return (
    <main className={`${pageStyles.main} ${styles.subpageMain}`}>
      <section className="section">
        <div className="container">
          <div className={`glass-panel ${styles.subpagePanel}`}>
            {/* Premium Hero Image Header */}
            <div className={styles.subpageHero}>
              <Image src="/images/service-tours-oxford.jpg" alt="Bespoke Tours" fill priority className={styles.subpageHeroImage} />
              <div className={styles.subpageHeroOverlay}></div>
            </div>
            
            {/* Text Content */}
            <div className={styles.subpageContent} data-scroll-animate="true">
              <h1 className={pageStyles.sectionTitle} style={{ marginBottom: '2rem' }}>Bespoke Tours</h1>
              <ReadMore mobileOnly={true} maxHeight={250}>
                <p className={styles.subpageParagraph}>Chauffeur Driven Tours in Oxfordshire from 5 Star Oxford</p>
                <p className={styles.subpageParagraph}>Luxury Tours throughout Oxfordshire, Cotswolds & Beyond</p>
                <p className={styles.subpageParagraph}>As Oxfordshire’s premier chauffeur provider, at 5 Star Oxford we excel in providing guided tours throughout the region and beyond. Whether you’re looking to have a sightseeing tour of Oxford, an in-depth tour of the Cotswolds or even want to have a chauffeur driven journey to London, we can design a tour travel package that’s perfect for your requirements.</p>
                <p className={styles.subpageParagraph}>Whilst our dedicated team of chauffeurs are experts at navigating the local area, each chauffeur also has over 15 years of experience in touring around major UK landmarks, ensuring that we can take you to wherever you want to go or whatever you want to experience in a luxurious and special manner.</p>
                <p className={styles.subpageParagraph}>After discussing your requirements with a dedicated member of our team, we will then provide you with an itemised quote for every section of your journey. Once agreed, our expert chauffeurs will then take care of the rest, allowing you to sit-back, relax and enjoy some of the many sites that we will guide you through along the way.</p>
                <p className={styles.subpageParagraph}>To find out how you can book the perfect chauffeur driven tour for your requirements, please booking your next journey below.</p>
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
