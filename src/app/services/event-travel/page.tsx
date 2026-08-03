import pageStyles from '@/app/page.module.css';
import styles from '../services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Event Travel | 5 Star Oxford',
};

export default function Page() {
  return (
    <main className={`${pageStyles.main} ${styles.subpageMain}`}>
      <section className="section">
        <div className="container">
          <div className={`glass-panel ${styles.subpagePanel}`}>
            {/* Premium Hero Image Header */}
            <div className={styles.subpageHero}>
              <Image src="/images/service-event.jpg" alt="Event Travel" fill priority className={styles.subpageHeroImage} />
              <div className={styles.subpageHeroOverlay}></div>
            </div>
            
            {/* Text Content */}
            <div className={styles.subpageContent} data-scroll-animate="true">
              <h1 className={pageStyles.sectionTitle} style={{ marginBottom: '2rem' }}>Event Travel</h1>
              <ReadMore mobileOnly={true} maxHeight={250}>
                <p className={styles.subpageParagraph}>Event Travel & Chaffeur Transport Oxfordshire from 5 Star Oxford</p>
                <p className={styles.subpageParagraph}>Event Travel to the Nations Top Events</p>
                <p className={styles.subpageParagraph}>Travelling to the next major sporting event can now be easier, more relaxing and luxurious than ever before with our dedicated range of event travel services. Designed to provide a VIP service for clients throughout Oxfordshire and beyond, we will take all the stress out of travelling to your favourite event, wherever it may be.</p>
                <p className={styles.subpageParagraph}>Whether you’re heading down to Wimbledon for a day packed full of tennis or are having a day at the races with a few friends, we can provide tailored event travel packages to make sure that you arrive on-time, completely relaxed and ready for the days events that lay ahead.</p>
                <p className={styles.subpageParagraph}>In addition to this, at 5 Star Oxford we can also provide a dedicated travel service for you and your clients should you be heading to corporate hospitality for the day. This can include several location pickups as well as any additional requirements you may have to guarantee we leave a lasting impression.</p>
                <p className={styles.subpageParagraph}>To discover more about our range of event chauffeur services or to get a free no obligation instant quote to your next event, please book your journey by clicking below.</p>
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
