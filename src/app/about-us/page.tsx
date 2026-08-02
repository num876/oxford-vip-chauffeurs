import styles from './about.module.css';
import StarRating from '../../components/StarRating';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | 5 Star Oxford',
};

const objectives = [
  { icon: '⭐', text: 'To provide our clients with the service they need, when they need it and foster repeat business.' },
  { icon: '🛡️', text: 'To offer a luxury class service in terms of refinement, assistance, reliability, discretion and above all safety.' },
  { icon: '🤝', text: 'To strive to provide our clients with tailor-made service at competitive rates which stands out above the competition.' },
  { icon: '⏱️', text: 'To constantly strive to improve the efficiency, effectiveness and responsiveness of our services.' },
  { icon: '📈', text: 'To seek continuous improvement year on year with the levels of service offered to all our clients.' },
  { icon: '🌍', text: 'To market and promote 5 Star Oxford to a wider public nationally, and work in partnership with other agencies.' }
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
              
              <p className={styles.storyText}>
                Here at 5 Star Oxford we provide a luxury chauffeur service that’s tailored for each of our clients and delivered bespoke to your individual needs.
              </p>
              <p className={styles.storyText}>
                As a family-run business, 5 Star Oxford has fast become the chauffeur company of choice throughout the Oxfordshire region and beyond. This is due to our commitment to providing our clientele with a very high level of service at competitive rates, generating continued business through customers and referrals.
              </p>
              <p className={styles.storyText}>
                All our chauffeurs are licensed, DBS checked through Oxford City Council and have a wealth of expertise, ensuring we provide professionalism at all times when interacting with VIP clients and their associates. This experience has been built upon service and trust over the past 15 years.
              </p>
              <p className={styles.storyText}>
                All our luxury vehicles are fitted with modern GPS and Wi-Fi as standard, ensuring the vehicles are at their destination when required in the utmost style and safety to give you peace of mind with every journey.
              </p>
              <p className={styles.storyText}>
                5 Star Oxford operate 24 hours a day, 365 days a year and throughout the UK mainland. So whatever your requirements may be, regardless of day, time or place, get in touch with us and we will accommodate any requests or specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className={styles.objectivesSection}>
        <div className={styles.container}>
          <div className={styles.objectivesHeader}>
            <span className={styles.sectionSubtitle}>Core Values</span>
            <h2 className={styles.sectionTitle}>Our Chauffeur Objectives</h2>
          </div>
          
          <div className={styles.objectivesGrid}>
            {objectives.map((objective, index) => (
              <div key={index} className={styles.objectiveCard}>
                <div className={styles.objectiveIcon}>{objective.icon}</div>
                <p className={styles.objectiveText}>{objective.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
