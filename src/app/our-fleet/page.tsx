import styles from './fleet.module.css';
import StarRating from '../../components/StarRating';
import Image from 'next/image';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';

export const metadata = {
  title: 'Our Fleet | 5 Star Oxford',
};

const vehicles = [
  {
    id: 'rolls-royce-ghost',
    name: 'Rolls Royce Ghost',
    desc: [
      "Spacious and luxurious, the Ghost is crafted to offer maximum comfort and style during your travels, allowing you to relax, unwind, and stay productive. Whether you're heading to a local meeting or the airport and wish to arrive in style, our prestigious Rolls Royce is the ideal vehicle for your journey.",
      "Our specially selected Ghost comes with a variety of premium features designed to make your ride as relaxing and comfortable as possible. With tailored interiors, seat-back displays, and surround sound audio, our Rolls Royce is fully equipped to ensure your chauffeured travel is exceptionally smooth and enjoyable."
    ],
    image: '/images/rolls-royce-ghost.jpg',
    specs: [
      { icon: '👥', text: '4 Passengers' },
      { icon: '💺', text: 'Black Leather' },
      { icon: '📶', text: 'On Board Wi-Fi' },
      { icon: '📱', text: 'iPhone Charger' },
    ]
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 Series',
    desc: [
      "Similar to the S-Class, the 7 Series is designed to provide additional comfort and style on your journey to ensure that you can relax, unwind and catch up on your work. Whether you are travelling to a nearby meeting or are going the the airport and want to arrive in style, our prestigious BMW 7 Series is the perfect vehicle to travel in.",
      "Within our specially selected 7 Series, we’ve selected a range of additional extras that will ensure your journey is the most relaxing and comfortable yet. From tailored interiors to back of seat displays and surround sound audio, our BMW is beautifully equipped to guarantee that your chauffeur travel is wonderfully relaxed."
    ],
    image: '/images/bmw-7-series.jpg',
    specs: [
      { icon: '👥', text: '4 Passengers' },
      { icon: '💺', text: 'Black Leather' },
      { icon: '📶', text: 'On Board Wi-Fi' },
      { icon: '✨', text: 'Executive Sedan' },
    ]
  },
  {
    id: 's-class',
    name: 'Mercedes-Benz S-Class',
    desc: [
      "Slightly larger and roomier, the S-Class is designed to provide additional comfort and style on your journey to ensure that you can relax, unwind and catch up on your work. Whether you are travelling to a nearby meeting or are going the the airport and want to arrive in style, our prestigious S-Class Mercedes is the perfect vehicle to travel in.",
      "Within our specially selected S-Class, we’ve selected a range of additional extras that will ensure your journey is the most relaxing and comfortable yet. From tailored interiors to back of seat displays and surround sound audio, our Mercedes is beautifully equipped to guarantee that your chauffeur travel is wonderfully relaxed."
    ],
    image: '/images/s-class2.jpg',
    specs: [
      { icon: '👥', text: '3 Passengers' },
      { icon: '💺', text: 'Black Leather' },
      { icon: '📶', text: 'On Board Wi-Fi' },
      { icon: '✨', text: 'Executive Class' },
    ]
  },
  {
    id: 'e-class',
    name: 'Mercedes-Benz E-Class',
    desc: [
      "The E-Class Saloon is engineered to deliver more comfort, more class and a more connected journey for you on your next journey. Whether you are travelling to a local client or are going further afield for an important event or business meeting, our prestigious E-Class Mercedes is the perfect vehicle to travel in.",
      "Within our specially selected E-Class, we’ve selected a range of additional extras that will ensure your journey is the most relaxing and comfortable yet. From special black leather interiors to back of seat displays and surround sound audio, our Mercedes is beautifully equipped to guarantee that your chauffeur travel is wonderfully relaxed."
    ],
    image: '/images/mercedes-e-class.jpg',
    specs: [
      { icon: '👥', text: '4 Passengers' },
      { icon: '💺', text: 'Black Leather' },
      { icon: '📶', text: 'On Board Wi-Fi' },
      { icon: '✨', text: 'Business Class' },
    ]
  },
  {
    id: 'v-class',
    name: 'Mercedes-Benz V-Class',
    desc: [
      "As one of the special cars within our multi-person vehicle fleet, our Mercedes V-Class offers the upmost comfort and room for group travel. Whether you’re travelling together to an important business meeting or need to travel as a group to your next flight, our Mercedes V-Class is the perfect choice.",
      "Within our specially selected V-Class, we’ve selected a range of additional extras that will ensure your journey is the most relaxing and comfortable yet. From detailed leather interiors to surround sound audio and tailored drink options, our Mercedes is beautifully equipped to guarantee that your chauffeur driven group travel is wonderfully relaxed."
    ],
    image: '/images/v-class2.jpg',
    specs: [
      { icon: '👥', text: '7 Passengers' },
      { icon: '💺', text: 'Detailed Leather' },
      { icon: '🥂', text: 'Tailored Drinks' },
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
          <h1 className={styles.heroTitle}>Our Fleet</h1>
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
            <ReadMore mobileOnly={true} maxHeight={150}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
              In order to provide each of our customers with the perfect and most luxurious service possible, we have sourced a fine selection of luxury vehicles that have been hand-selected to fulfil your every need. Discover more about our wide selection of vehicles and get more information on the range of journey types and services they can help to provide to you and your clients.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Whether you’re looking to travel alone, as part of a pair, or even in a group, our immaculate fleet will facilitate your every need, ensuring you can sit back, relax and enjoy the journey.
            </p>
            </ReadMore>
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
                                <ReadMore mobileOnly={true} maxHeight={120}>
                  {Array.isArray(vehicle.desc) ? (
                  vehicle.desc.map((paragraph, i) => (
                    <p key={i} className={styles.carDesc} style={{ marginBottom: '1rem' }}>{paragraph}</p>
                  ))
                ) : (
                  <p className={styles.carDesc}>{vehicle.desc}</p>
                )}
                </ReadMore>
                
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
