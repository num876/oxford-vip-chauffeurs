import styles from './services.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Services | 5 Star Oxford',
};

const services = [
  { 
    path: '/services/airport-transfers', 
    title: 'Airport Transfers', 
    desc: 'Seamless, punctual connections to all major UK airports, including Heathrow, Gatwick, and private aviation terminals.', 
    icon: '✈️',
    image: '/images/service-airport.jpg'
  },
  { 
    path: '/services/business-travel', 
    title: 'Business Travel', 
    desc: 'Discreet, reliable, and sophisticated transport solutions tailored for corporate executives and roadshows.', 
    icon: '👔',
    image: '/images/service-business.jpg'
  },
  { 
    path: '/services/event-travel', 
    title: 'Event Travel', 
    desc: 'Make a grand entrance at galas, red carpet events, and weddings with our impeccable fleet.', 
    icon: '🥂',
    image: '/images/service-event.jpg'
  },
  { 
    path: '/services/group-travel', 
    title: 'Group Travel', 
    desc: 'Uncompromising luxury and space for groups. Travel together in absolute comfort with our premium V-Class fleet.', 
    icon: '👥',
    image: '/images/service-group.jpg'
  },
  { 
    path: '/services/tours', 
    title: 'Bespoke Tours', 
    desc: 'Discover the historic spires of Oxford or the rolling hills of the Cotswolds with your own private chauffeur-guide.', 
    icon: '🏰',
    image: '/images/service-tours-oxford.jpg'
  },
];

export default function ServicesPage() {
  return (
    <main className={`${styles.main} animate-fade-in`}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/images/services-hero.jpg" 
          alt="5 Star Oxford Chauffeur Service" 
          fill 
          priority
          className={styles.heroBackground} 
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Luxury Services</h1>
          <p className={styles.heroSubtitle}>
            5 Star Oxford provides an extensive range of bespoke transportation solutions. Explore our offerings below.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Link 
                key={service.path} 
                href={service.path} 
                className={`${styles.serviceCard} ${styles[`delay${index}`]}`}
              >
                <div className={styles.cardImageContainer}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className={styles.cardImage} 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.cardImageOverlay}></div>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <div className={styles.serviceCTA}>
                    Discover More <span style={{ fontSize: '1.2rem' }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
