import pageStyles from '@/app/page.module.css';
import styles from '../services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Group Travel | 5 Star Oxford',
};

export default function Page() {
  return (
    <main className={`${pageStyles.main} ${styles.subpageMain}`}>
      <section className="section">
        <div className="container">
          <div className={`glass-panel ${styles.subpagePanel}`}>
            {/* Premium Hero Image Header */}
            <div className={styles.subpageHero}>
              <Image src="/images/service-group.jpg" alt="Group Travel" fill priority className={styles.subpageHeroImage} />
              <div className={styles.subpageHeroOverlay}></div>
            </div>
            
            {/* Text Content */}
            <div className={styles.subpageContent} data-scroll-animate="true">
              <h1 className={pageStyles.sectionTitle} style={{ marginBottom: '2rem' }}>Group Travel</h1>
              <ReadMore mobileOnly={true} maxHeight={250}>
                <p className={styles.subpageParagraph}>Group Travel & Executive Chauffeur Oxfordshire by 5 Star Oxford</p>
                <p className={styles.subpageParagraph}>Bespoke Group Travel for Oxford Executives</p>
                <p className={styles.subpageParagraph}>Here at 5 Star Oxford we know that as a business you often have to travel to meetings with a number of your colleagues so it’s essential to find travel that’s perfect for a group as well as on your own.</p>
                <p className={styles.subpageParagraph}>With this in mind we’ve developed a luxurious range of group travel services to ensure that you and your team can travel to your meeting in Oxfordshire or beyond in style and comfort. After discussing your requirements in full, we’ll create a tailored plan that’s designed around your schedule and business meetings to guarantee that every detail is adhered to.</p>
                <p className={styles.subpageParagraph}>Whether you’re travelling throughout the Oxfordshire region, or need to travel further in the UK to discuss business with a new client, at 5 Star Oxford we’ll make sure that your Group Travel is expertly delivered, is completely stress-free and allows you to discuss your meeting pre and post your arrival.</p>
                <p className={styles.subpageParagraph}>To discover more about our range of Group Travel services for business or private clients throughout the Oxfordshire region, please click below to discuss your journey with our team.</p>
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
