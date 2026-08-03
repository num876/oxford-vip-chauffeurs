import styles from './about.module.css';
import StarRating from '../../components/StarRating';
import Image from 'next/image';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'About Us | 5 Star Oxford',
};

const chauffeurStandards = [
  { icon: '👔', title: 'Attire', text: 'To ensure the highest possible standards, all of our Oxford based Chauffeurs dress in a dark suit, tie, white or blue shirt and black shoes. We insist that no other jewellery be worn other than watches, wedding rings and cufflinks.' },
  { icon: '🤫', title: 'Confidentiality', text: 'A vital part of our agreement with our chauffeurs is the need for total confidentiality and discretion of the client. We insist they may not divulge or discuss any information they have become party to during the journey.' },
  { icon: '🚗', title: 'Driving Standards', text: 'Our chauffeurs must at all times follow the speed limit and must always adhere to traffic laws at all times. Our clients must always have a smooth ride without discernable acceleration or deceleration as they may be trying to work or sleep.' },
  { icon: '🗺️', title: 'Route Knowledge', text: 'Before employment all chauffeurs have to go through a test of, arterial routes, all major airports and terminal layout, locations of major hotels, restaurants and other points of interests around Oxford and London.' }
];

export default function AboutPage() {
  return (
    <main className={`${styles.main} animate-fade-in`}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/images/oxford-heritage-bg.jpg" 
          alt="5 Star Oxford" 
          fill 
          priority
          className={styles.heroBackground} 
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Us</h1>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/about-chauffeur.jpg" 
                alt="Professional Chauffeur" 
                fill 
                className={styles.storyImage}
                sizes="(max-width: 992px) 100vw, 50vw"
              />
            </div>
            
            <div className={styles.textContent}>
              <span className={styles.sectionSubtitle}>Our Heritage</span>
              <h2 className={styles.sectionTitle}>A Legacy of Excellence in Chauffeur Travel</h2>
              
              <ReadMore mobileOnly={true} maxHeight={250}>
              <p className={styles.storyText}>
                5 Star Oxford has cemented its reputation as Oxford’s finest luxury chauffeur company and takes pride in being the market leader in executive transport. Throughout the South East and Oxfordshire in particular, our name is synonymous with quality, comfort, reliability and punctuality.
              </p>
              <p className={styles.storyText}>
                Providing the most prestigious luxury vehicles and professionally trained chauffeurs, we are the company of choice for the most discerning of clients. At Five Star we have a simple company ethos and philosophy, to provide a luxury transport service that’s unparalleled in terms of performance but at a very competitive price.
              </p>
              <p className={styles.storyText}>
                Customer care and satisfaction are our primary objectives and it is this commitment that has enabled us to have continued growth over the years. Our professional team of chauffeurs have been hired by clients to drive them throughout the UK and indeed major European cities including Paris, Brussels, Madrid and Budapest.
              </p>
              <p className={styles.storyText}>
                Our aspiration is not to be the biggest, but certainly to be the best.
              </p>
              </ReadMore>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section (Now Chauffeur Standards) */}
      <section className={styles.objectivesSection}>
        <div className={styles.container}>
          <div className={styles.objectivesHeader}>
            <span className={styles.sectionSubtitle}>Our Chauffeurs</span>
            <h2 className={styles.sectionTitle}>Professionalism is Paramount</h2>
            <p className={styles.storyText} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
              We have a strict selection and employment policy for our drivers as we believe the chauffeur’s appearance, personality, professionalism and knowledge go hand in hand with an impeccable vehicle. Adhering to correct Etiquette, being friendly but never intrusive and always trying to anticipate your needs is where our chauffeurs excel.
            </p>
          </div>
          
          <div className={styles.objectivesGrid} style={{ marginTop: '3rem' }}>
            {chauffeurStandards.map((standard, index) => (
              <div key={index} className={styles.objectiveCard}>
                <div className={styles.objectiveIcon}>{standard.icon}</div>
                <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '500' }}>{standard.title}</h3>
                <p className={styles.objectiveText} style={{ textAlign: 'left', lineHeight: '1.6' }}>{standard.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
