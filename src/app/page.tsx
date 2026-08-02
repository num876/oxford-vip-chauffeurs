import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import StarRating from '../components/StarRating';

export default function Home() {
  return (
    <main className={`${styles.main} animate-fade-in`}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.heroBackground} ${styles.kenBurns || 'kenBurns'}`}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroGlow}></div>
        
        {/* Floating Badges */}
        <div className={`${styles.floatingBadge} ${styles.badgeTopLeft}`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <StarRating />
            <div className={styles.badgeText} style={{ marginTop: '0.2rem' }}>
              <span className={styles.badgeTitle}>Rated 5 Stars</span>
              <span className={styles.badgeSub}>By Our Clients</span>
            </div>
          </div>
        </div>
        
        <div className={`${styles.floatingBadge} ${styles.badgeBottomRight}`}>
          <span className={styles.badgeIcon}>⌚</span>
          <div className={styles.badgeText}>
            <span className={styles.badgeTitle}>Always Ready</span>
            <span className={styles.badgeSub}>24/7 Availability</span>
          </div>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <h1 className={`${styles.heroTitle} ${styles.animate2}`}>
            EXCELLENCE <span>IN MOTION</span>
          </h1>
          <p className={`${styles.heroDescription} ${styles.animate3}`}>
            5 Star Oxford has cemented its reputation as Oxford’s finest luxury chauffeur company and takes pride in being the market leader in executive transport. Throughout the South East and Oxfordshire in particular, our name is synonymous with quality, comfort, reliability and punctuality.
          </p>
          <div className={`${styles.heroButtons} ${styles.animate4}`}>
            <Link href="/services" className="btn btn-primary">Our Services</Link>
            <Link href="/our-fleet" className="btn btn-outline">Explore Fleet</Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className={`section ${styles.fleet}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Our Collection</span>
            <h2 className={styles.sectionTitle}>The VIP Fleet</h2>
          </div>
          
          <div className={styles.fleetGridAsymmetric}>
            
            {/* Featured Flagship Vehicle */}
            <div className={`${styles.fleetCard} ${styles.fleetCardFeatured}`}>
              <div className={styles.carImageContainer}>
                <Image src="/images/rolls-royce-ghost.jpg" alt="Rolls Royce Ghost" fill className={styles.carImage} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className={styles.carInfo}>
                <h3 className={styles.carName}>Rolls Royce Ghost</h3>
                <p className={styles.carDesc}>The pinnacle of luxury. Experience maximum comfort and an exquisitely refined, connected journey.</p>
                <div className={styles.carSpecs}>
                  <div className={styles.specItem}><span className={styles.specIcon}>👥</span> 4 Pax</div>
                  <div className={styles.specItem}><span className={styles.specIcon}>💼</span> 3 Bags</div>
                  <div className={styles.specItem}><span className={styles.specIcon}>📶</span> Wi-Fi</div>
                </div>
                <div className={styles.fleetCTA}>
                  <Link href="/booking?vehicle=rolls-royce-ghost" className="btn btn-primary">Book This Vehicle</Link>
                </div>
              </div>
            </div>
            
            {/* Secondary Vehicles */}
            <div className={styles.fleetCard}>
              <div className={styles.carImageContainer}>
                <Image src="/images/s-class2.jpg" alt="Mercedes S-Class" fill className={styles.carImage} sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className={styles.carInfo}>
                <h3 className={styles.carName}>Mercedes S-Class</h3>
                <p className={styles.carDesc}>The gold standard of chauffeur-driven elegance. Unmatched refinement for business and pleasure.</p>
                <div className={styles.carSpecs}>
                  <div className={styles.specItem}><span className={styles.specIcon}>👤</span> 3 Pax</div>
                  <div className={styles.specItem}><span className={styles.specIcon}>🧳</span> 2 Bags</div>
                </div>
                <div className={styles.fleetCTA}>
                  <Link href="/booking?vehicle=s-class" className="btn btn-outline">Book This Vehicle</Link>
                </div>
              </div>
            </div>
            
            <div className={styles.fleetCard}>
              <div className={styles.carImageContainer}>
                <Image src="/images/v-class2.jpg" alt="Mercedes V-Class" fill className={styles.carImage} sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className={styles.carInfo}>
                <h3 className={styles.carName}>Mercedes V-Class</h3>
                <p className={styles.carDesc}>Spacious luxury for group travel. Uncompromising comfort for up to 7 passengers.</p>
                <div className={styles.carSpecs}>
                  <div className={styles.specItem}><span className={styles.specIcon}>👤</span> 7 Pax</div>
                  <div className={styles.specItem}><span className={styles.specIcon}>🧳</span> 7 Bags</div>
                </div>
                <div className={styles.fleetCTA}>
                  <Link href="/booking?vehicle=v-class" className="btn btn-outline">Book This Vehicle</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`section ${styles.contact}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h3>Reserve Your Journey</h3>
              <p>Contact our concierge team to discuss your bespoke travel requirements. We are at your service 24/7.</p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span>TEL:</span> +44 (0) 1865 422 222
                </div>
                <div className={styles.contactItem}>
                  <span>EMAIL:</span> info@5staroxford.com
                </div>
              </div>
            </div>
            
            <div className="glass-panel" style={{ padding: '3rem' }}>
              <h4 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 300 }}>Send an Enquiry</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '1rem',
                    borderRadius: '4px',
                    color: 'white',
                    fontFamily: 'inherit'
                  }} 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '1rem',
                    borderRadius: '4px',
                    color: 'white',
                    fontFamily: 'inherit'
                  }} 
                />
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Submit Request</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
