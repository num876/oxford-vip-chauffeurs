'use client';
import styles from './contact.module.css';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate network request
    setTimeout(() => {
      setStatus('Message sent successfully! We will get back to you soon.');
    }, 1000);
  };

  return (
    <main className={`${styles.main} animate-fade-in`}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/images/oxford-heritage-bg.jpg" 
          alt="5 Star Oxford Concierge" 
          fill 
          priority
          className={styles.heroBackground} 
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Our dedicated concierge team is at your service 24 hours a day, 365 days a year.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            
            {/* Left Column - Contact Details */}
            <div className={styles.contactDetails}>
              <div className={styles.detailsHeader}>
                <span className={styles.sectionSubtitle}>Get In Touch</span>
                <h2 className={styles.sectionTitle}>We are here to assist you.</h2>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📍</div>
                <div className={styles.infoContent}>
                  <h3>Headquarters</h3>
                  <p>
                    5 Star Oxford<br />
                    54 Westbury Crescent<br />
                    Oxford, OX4 3SA
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>✉️</div>
                <div className={styles.infoContent}>
                  <h3>Email Enquiries</h3>
                  <p>
                    <a href="mailto:info@5staroxford.com">info@5staroxford.com</a>
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📞</div>
                <div className={styles.infoContent}>
                  <h3>Direct Lines</h3>
                  <p>
                    Office: <a href="tel:+4401865422222">+44 (0)1865 422 222</a><br />
                    Mobile: <a href="tel:+4401865422222">+44 (0)1865 422 222</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className={styles.contactFormContainer}>
              <div className={styles.formHeader}>
                <h2>Send a Message</h2>
                <p>Provide us with your bespoke travel requirements below.</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name</label>
                  <input type="text" className={styles.input} required placeholder="John Doe" />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input type="tel" className={styles.input} required placeholder="+44 (0)7000..." />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.label}>Subject</label>
                  <input type="text" className={styles.input} required placeholder="Airport Transfer Enquiry" />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Requirements</label>
                  <textarea className={styles.textarea} required placeholder="Please provide dates, times, and vehicle preferences..."></textarea>
                </div>
                
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                  Submit Enquiry
                </button>
                
                {status && (
                  <div className={`${styles.statusMessage} ${status.includes('success') ? styles.statusSuccess : styles.statusSending}`}>
                    {status}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
