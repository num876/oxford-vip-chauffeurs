import styles from './fleet.module.css';
import StarRating from '../../components/StarRating';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Fleet | 5 Star Oxford',
};

const vehicles = [
  {
    id: 'rolls-royce-ghost',
    name: 'Rolls Royce Ghost',
    desc: 'The pinnacle of luxury. Crafted to offer maximum comfort and an exquisitely refined, connected journey.',
    image: '/images/rolls-royce-ghost.jpg',
    specs: [
      { icon: '👥', text: '4 Pax' },
      { icon: '💼', text: '3 Bags' },
      { icon: '📶', text: 'Free Wi-Fi' },
      { icon: '✨', text: 'Ultra-Luxury' },
    ]
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 Series',
    desc: 'Our prestigious BMW 7 Series is the perfect vehicle for those seeking a modern executive presence and dynamic comfort.',
    image: '/images/bmw-7-series.jpg',
    specs: [
      { icon: '👥', text: '4 Pax' },
      { icon: '💼', text: '3 Bags' },
      { icon: '📶', text: 'Free Wi-Fi' },
      { icon: '✨', text: 'Executive Sedan' },
    ]
  },
  {
    id: 's-class',
    name: 'Mercedes-Benz S-Class',
    desc: 'The gold standard of chauffeur-driven elegance. Unmatched refinement, legroom, and a whisper-quiet cabin perfect for business and pleasure.',
    image: '/images/s-class2.jpg',
    specs: [
      { icon: '👥', text: '3 Pax' },
      { icon: '💼', text: '2 Bags' },
      { icon: '📶', text: 'Free Wi-Fi' },
      { icon: '✨', text: 'Executive Class' },
    ]
  },
  {
    id: 'e-class',
    name: 'Mercedes-Benz E-Class',
    desc: 'Engineered to deliver a deeply connected and supremely comfortable journey. Ideal for sophisticated city transfers.',
    image: '/images/mercedes-e-class.jpg',
    specs: [
      { icon: '👥', text: '4 Pax' },
      { icon: '💼', text: '2 Bags' },
      { icon: '📶', text: 'Free Wi-Fi' },
      { icon: '✨', text: 'Business Class' },
    ]
  },
  {
    id: 'v-class',
    name: 'Mercedes-Benz V-Class',
    desc: 'Spacious luxury for group travel. Uncompromising comfort for up to 7 passengers, ideal for event travel, weddings, and executive roadshows.',
    image: '/images/v-class2.jpg',
    specs: [
      { icon: '👥', text: '7 Pax' },
      { icon: '💼', text: '7 Bags' },
      { icon: '📶', text: 'Free Wi-Fi' },
      { icon: '✨', text: 'Luxury MPV' },
    ]
  }
];

export default function FleetPage() {
  return (
    <main className={`${styles.main} animate-fade-in`}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/images/oxford-heritage-bg.jpg" 
          alt="The 5 Star Oxford Fleet" 
          fill 
          priority
          className={styles.heroBackground} 
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The VIP Fleet</h1>
          <p className={styles.heroSubtitle}>
            Luxurious & Dynamic Chauffeur Vehicles for Travel throughout Oxfordshire and Beyond
          </p>
        </div>
      </section>

      {/* Showroom Section */}
      <section className={styles.showroomSection}>
        <div className={styles.container}>
          
          {/* Introductory Text Panel */}
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto 5rem auto', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--accent-gold)', fontWeight: 300, marginBottom: '1.5rem' }}>Hand-Selected For Perfection</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
              In order to provide each of our customers with the perfect and most luxurious service possible, we have sourced a fine selection of luxury vehicles that have been hand-selected to fulfil your every need.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Whether you’re looking to travel alone, as part of a pair, or even in a group, our immaculate fleet will facilitate your every need, ensuring you can sit back, relax and enjoy the journey.
            </p>
          </div>

          {/* Alternating Vehicle Rows */}
          {vehicles.map((vehicle, index) => (
            <div 
              key={vehicle.id} 
              className={`${styles.showroomRow} ${index % 2 !== 0 ? styles.showroomRowReverse : ''} `}
            >
              <div className={styles.imageColumn}>
                <Image 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.carImage}
                />
              </div>
              
              <div className={styles.textColumn}>
                <h3 className={styles.carTitle}>{vehicle.name}</h3>
                <p className={styles.carDesc}>{vehicle.desc}</p>
                
                <div className={styles.carSpecs}>
                  {vehicle.specs.map((spec, i) => (
                    <div key={i} className={styles.specItem}>
                      <span className={styles.specIcon}>{spec.icon}</span> {spec.text}
                    </div>
                  ))}
                </div>
                
                <div className={styles.ctaContainer}>
                  <Link href={`/booking?vehicle=${vehicle.id}`} className="btn btn-outline">
                    Book This Vehicle
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
