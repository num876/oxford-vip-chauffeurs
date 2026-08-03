import pageStyles from '@/app/page.module.css';
import styles from '../services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Business Travel | 5 Star Oxford',
};

export default function Page() {
  return (
    <main className={`${pageStyles.main} ${styles.subpageMain}`}>
      <section className="section">
        <div className="container">
          <div className={`glass-panel ${styles.subpagePanel}`}>
            {/* Premium Hero Image Header */}
            <div className={styles.subpageHero}>
              <Image src="/images/service-business.jpg" alt="Business Travel" fill priority className={styles.subpageHeroImage} />
              <div className={styles.subpageHeroOverlay}></div>
            </div>
            
            {/* Text Content */}
            <div className={styles.subpageContent} data-scroll-animate="true">
              <h1 className={pageStyles.sectionTitle} style={{ marginBottom: '2rem' }}>Business Travel</h1>
              <ReadMore mobileOnly={true} maxHeight={250}>
                <p className={styles.subpageParagraph}>Business Travel & Corporate Chauffeur by 5 Star Oxford</p>
                <p className={styles.subpageParagraph}>Luxury Business Travel throughout the Oxfordshire region</p>
                <p className={styles.subpageParagraph}>Finding a chauffeur that offers luxury and reliability can often prove to be a trickier task than you might first think, but with 5 Star Oxford you can be rest assured that you’ll receive the finest service every time.</p>
                <p className={styles.subpageParagraph}>As Oxford’s premier provider of chauffeur driven transport for businesses throughout the region and beyond, we have over 15 years of experience in making sure that you and your colleagues get to your location in the maximum levels of comfort and relaxation.</p>
                <p className={styles.subpageParagraph}>By using the finest vehicles and chauffeurs that are dedicated to providing a luxury service that is tailored to your requirements, we will guarantee that you arrive at your destination on time and perfectly prepared for the meeting ahead.</p>
                <p className={styles.subpageParagraph}>Whether you’d like to travel to your meeting in a state-of-the-art Range Rover or an elegant and comfortable S-Class Mercedes, we can provide a business travel service that is ideally suited to your needs.</p>
                <p className={styles.subpageParagraph}>To find out more about our range of business travel services or to book your next journey, please discover more below.</p>
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
