import styles from './terms.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'Terms & Conditions | 5 Star Oxford',
};

export default function TermsPage() {
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
          <h1 className={styles.heroTitle}>Terms & Conditions</h1>
          <span className={styles.heroSubtitle}>Legal Information</span>
        </div>
      </section>

      {/* Document Section */}
      <section className={styles.documentSection}>
        <div className={styles.container}>
          <div className={styles.documentContainer}>
            
            <div className={styles.documentHeader}>
              <h2>Terms of Service</h2>
              <p className={styles.lastUpdated}>Last Updated: August 2026</p>
            </div>

            <article>
              <section className={styles.legalSection}>
                <h3>1. Booking &amp; Charges</h3>
                <p className={styles.legalText}>
                  All bookings are calculated as starting and finishing from an Oxford central point.
                </p>
                <p className={styles.legalText}>
                  Bank and other Public Holiday bookings carry an excess charge, please ask what rate applies if you are considering booking on any of these days. Car parking, tolls and portage are charged at cost.
                </p>
                <p className={styles.legalText}>
                  Any parking tickets gained by the request of the client asking the chauffeur to &apos;wait here&apos; shall also be charged at cost.
                </p>
                <p className={styles.legalText}>
                  Any job quoted for a set fee for a specific journey including hours and miles to be travelled is calculated on the information received at the time, and any excess hours or miles travelled over and above that quoted rate will be charged at the standard rate.
                </p>
              </section>

              <section className={styles.legalSection}>
                <h3>2. Payment</h3>
                <p className={styles.legalText}>
                  100% payment is required at the time of booking.
                </p>
              </section>

              <section className={styles.legalSection}>
                <h3>3. Cancellations</h3>
                <p className={styles.legalText}>
                  Any booking cancelled with less than 24 hours notice will be charged at full rate.
                </p>
                <p className={styles.legalText}>
                  Any bookings cancelled within 24 hours of the time of hire will forfeit 50% of the cost. There will be no charge for cancellations over 24 hours. However, if a specific vehicle and chauffeur has been requested and a deposit has been paid to secure their request (or additional items or services have been purchased on behalf of our clients), then we reserve the right to retain the deposit and charge in full for the services/items lost.
                </p>
                <p className={styles.legalText}>
                  No-shows: If the client fails to appear at the agreed pickup point, the booking is 100% non-refundable.
                </p>
              </section>

              <section className={styles.legalSection}>
                <h3>4. Airport Transfers</h3>
                <p className={styles.legalText}>
                  Airport transfer bookings include 30 minutes of parking and waiting time after the flight has landed. Additional car park charges and waiting time will apply after the initial 30-minute period.
                </p>
              </section>

              <section className={styles.legalSection}>
                <h3>5. Luggage &amp; Belongings</h3>
                <p className={styles.legalText}>
                  When carrying luggage, all hard cases or boxes must be placed in the boot. Only a reasonable amount of hand luggage may, with the chauffeurs approval, be carried inside the car.
                </p>
                <p className={styles.legalText}>
                  5 Star Oxford do not accept any responsibility for personal goods left in the vehicle. Items left behind will be stored at our office; chauffeur return delivery will incur an additional booking fee.
                </p>
              </section>

              <section className={styles.legalSection}>
                <h3>6. Route &amp; Chauffeur Discretion</h3>
                <p className={styles.legalText}>
                  The chauffeur will choose what is in his opinion the best route to a particular destination according to traffic conditions and will always drive at a reasonable speed accordingly. If traffic conditions including road closures, accidents, unforeseen heavy traffic etc prevents the chauffeur from arriving on time, and this results in missed appointments or forwarding travel plans etc, 5 Star Oxford cannot be held responsible for any loss incurred, although every effort will be made to ensure the car arrives on time.
                </p>
              </section>

              <section className={styles.legalSection}>
                <h3>7. Vehicle Care &amp; Liability</h3>
                <p className={styles.legalText}>
                  The company expressly prohibits any person other than the chauffeurs from driving their cars. We recommend that you allow the chauffeur to open the car door, as any damage incurred to the door you open (onto a post/other vehicle/passing motorbike/pushbike etc) shall be paid for.
                </p>
                <p className={styles.legalText}>
                  Any damage to the vehicle inside or out caused by the client or the clients guests shall be paid for in full, together with loss of earnings if the vehicle has to be removed from the fleet for repair at the current daily hire rate for that vehicle.
                </p>
                <p className={styles.legalText}>
                  Smoking is not permitted in any of our vehicles. No food or drink is allowed to be consumed in the vehicles unless you have the chauffeurs approval.
                </p>
                <p className={styles.legalText}>
                  We reserve the right to refuse transport to intoxicated, disruptive, or dangerous passengers. We also reserve the right to use sub-contractors or substitute vehicles and chauffeurs as necessary.
                </p>
              </section>

              <section className={styles.legalSection}>
                <h3>8. Acceptance of Terms</h3>
                <p className={styles.legalText}>
                  Any work we undertake shall be subject to these conditions with no exception, so please ensure you have read and fully agree to these terms and conditions before booking.
                </p>
                <p className={styles.legalText}>
                  Gratuity is left to the clients discretion but may be added to the bill if requested.
                </p>
              </section>

              <section className={styles.legalSection}>
                <h3>9. Privacy Policy</h3>
                <p className={styles.legalText}>
                  Email addresses provided to 5 Star Oxford will not be shared with any third parties. By emailing us you consent to being contacted by 5 Star Oxford regarding our services.
                </p>
              </section>
            </article>

          </div>
        </div>
      </section>
    </main>
  );
}
