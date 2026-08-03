import styles from '@/app/our-fleet/fleet.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Self Drive Hire | 5 Star Oxford',
};

const vehicles = [
  {
    id: 'bentley-continental',
    name: 'Bentley Continental',
    desc: 'The Bentley Continental epitomizes automotive excellence, combining unparalleled luxury with exceptional performance and timeless design.',
    image: '/images/self-drive-bentley-continental.jpg',
    specs: [
      { icon: '👥', text: '4 Seats' },
      { icon: '💺', text: 'Luxury Leather' },
      { icon: '⚡', text: 'V8 Performance' },
      { icon: '✨', text: 'Grand Tourer' },
    ]
  },
  {
    id: 'rolls-royce-phantom',
    name: 'Rolls Royce Phantom',
    desc: 'The Rolls Royce Phantom stands unrivaled in the realm of luxury vehicles, delivering an extraordinary experience with its exquisite craftsmanship, unmatched elegance, and supreme comfort.',
    image: '/images/self-drive-rolls-royce-phantom.jpg',
    specs: [
      { icon: '👥', text: '4 Seats' },
      { icon: '💺', text: 'Bespoke Interior' },
      { icon: '🌟', text: 'Starlight Headliner' },
      { icon: '✨', text: 'Ultra Luxury' },
    ]
  },
  {
    id: 'bentley-bentayga',
    name: 'Bentley Bentayga',
    desc: 'The Bentley Bentayga sets the standard for luxury SUVs, offering a perfect blend of opulent comfort, cutting-edge technology, and remarkable off-road capability.',
    image: '/images/self-drive-bentley-bentayga.jpg',
    specs: [
      { icon: '👥', text: '5 Seats' },
      { icon: '💺', text: 'Luxury Leather' },
      { icon: '🧳', text: 'Spacious Luggage' },
      { icon: '✨', text: 'Luxury SUV' },
    ]
  },
  {
    id: 'lamborghini-urus',
    name: 'Lamborghini Urus',
    desc: 'The Lamborghini Urus is a masterpiece of engineering, seamlessly combining blistering speed, dynamic handling, and luxurious comfort in an SUV like no other.',
    image: '/images/self-drive-lamborghini-urus.jpg',
    specs: [
      { icon: '👥', text: '5 Seats' },
      { icon: '💺', text: 'Sport Seats' },
      { icon: '⚡', text: 'Super SUV' },
      { icon: '✨', text: 'High Performance' },
    ]
  },
  {
    id: 'range-rover-svr',
    name: 'Range Rover SVR',
    desc: 'The Range Rover SVR combines breathtaking performance, robust off-road capability, and opulent luxury, setting a new standard for high-performance SUVs.',
    image: '/images/self-drive-range-rover-svr.jpg',
    specs: [
      { icon: '👥', text: '5 Seats' },
      { icon: '💺', text: 'Sport Leather' },
      { icon: '🧳', text: 'Spacious Luggage' },
      { icon: '✨', text: 'Performance SUV' },
    ]
  },
  {
    id: 'bmw-m4',
    name: 'BMW M4',
    desc: 'The BMW M4 delivers an exhilarating driving experience with its powerful performance, precision handling, and luxurious interior, making it a standout choice for enthusiasts and everyday drivers alike.',
    image: '/images/self-drive-bmw-m4.jpg',
    specs: [
      { icon: '👥', text: '4 Seats' },
      { icon: '💺', text: 'M Sport Seats' },
      { icon: '⚡', text: 'M Performance' },
      { icon: '✨', text: 'Sports Coupe' },
    ]
  }
];

export default function Page() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img 
          src="/images/self-drive-hero.jpg" 
          alt="Self Drive Hire" 
          className={styles.heroBackground}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Self Drive Hire</h1>
          <p className={styles.heroSubtitle}>
            We offer an exquisite fleet of the world's most prestigious supercars, ensuring an unforgettable driving experience for every occasion. Our commitment to exceptional customer service guarantees a seamless and exhilarating journey from booking to return.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/booking" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', display: 'inline-block' }}>
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className={styles.showroomSection}>
        <div className={styles.container}>
          {vehicles.map((car, index) => (
            <div 
              key={car.id} 
              id={car.id}
              className={`${styles.showroomRow} ${index % 2 !== 0 ? styles.showroomRowReverse : ''}`}
            >
              <div className={styles.imageColumn}>
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className={styles.carImage}
                  loading="lazy"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className={styles.textColumn}>
                <h2 className={styles.carTitle}>{car.name}</h2>
                <div className={styles.carSpecs}>
                  {car.specs.map((spec, i) => (
                    <div key={i} className={styles.specItem}>
                      <span className={styles.specIcon}>{spec.icon}</span>
                      <span>{spec.text}</span>
                    </div>
                  ))}
                </div>
                <p className={styles.carDesc}>
                  {car.desc}
                </p>
                <div className={styles.ctaContainer}>
                  <Link href={`/booking?vehicle=${car.id}`} className={`btn btn-primary ${styles.ctaButton}`}>
                    Reserve Vehicle <span>&rarr;</span>
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
