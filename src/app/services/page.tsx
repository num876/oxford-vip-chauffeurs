import styles from './services.module.css';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';
import Image from 'next/image';
import { PlaneIcon, BriefcaseIcon, StarIcon, UsersIcon, CompassIcon, SteeringWheelIcon } from '@/components/ServiceIcons';

export const metadata = {
  title: 'Our Services | 5 Star Oxford',
};

const services = [
  { 
    path: '/services/airport-transfers', 
    title: 'Airport Transfers', 
    desc: 'Whether you’re traveling abroad for an important business meeting or looking for a luxurious journey to the airport as part of a special holiday, 5 Star’s exclusive range of Airport Transfers from Oxfordshire will provide the perfect travel.', 
    icon: <PlaneIcon />,
    image: '/images/service-airport.jpg'
  },
  { 
    path: '/services/business-travel', 
    title: 'Business Travel', 
    desc: 'As one of Oxfordshire’s leading providers of chauffeur driven business travel, we excel in making sure that you and your colleagues get to important business meetings in the maximum of comfort and relaxation.', 
    icon: <BriefcaseIcon />,
    image: '/images/service-business.jpg'
  },
  { 
    path: '/services/event-travel', 
    title: 'Event Travel', 
    desc: 'Finding your way to a special event can often come with unwanted and unnecessary stress. It’s important that you arrive calm, stress free, ready to enjoy your day ahead.', 
    icon: <StarIcon />,
    image: '/images/service-event.jpg'
  },
  { 
    path: '/services/group-travel', 
    title: 'Group Travel', 
    desc: 'At Five Star we realise that complex itineraries and tight business travel schedules are often liable to last minute changes. Travel together in absolute comfort with our group travel services.', 
    icon: <UsersIcon />,
    image: '/images/service-group.jpg'
  },
  { 
    path: '/services/tours', 
    title: 'Bespoke Tours', 
    desc: 'Whether you’re looking to have a quick local tour around Oxfordshire, want to explore a range of different cities, or even want to discover the Cotswolds with your own private chauffeur.', 
    icon: <CompassIcon />,
    image: '/images/service-tours-oxford.jpg'
  },
  { 
    path: '/services/self-drive-hire', 
    title: 'Self Drive Hire', 
    desc: 'We offer an exquisite fleet of the world\'s most prestigious supercars, ensuring an unforgettable driving experience for every occasion. Experience blistering speed and luxurious comfort.', 
    icon: <SteeringWheelIcon />,
    image: '/images/self-drive-hero.jpg'
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
                className={`${styles.serviceCard} `}
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
