'use client';
import styles from '@/app/page.module.css';
import { useState } from 'react';

export default function BookingPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Processing...');
    // Simulate network request
    setTimeout(() => {
      setStatus('Booking request received successfully! Our team will contact you shortly to confirm your luxury vehicle.');
    }, 1500);
  };

  return (
    <main className={styles.main} style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <section className="section">
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>Book Your Journey</h1>
            <p style={{ marginBottom: "3rem", color: "var(--text-secondary)", textAlign: 'center' }}>
              Complete the form below to request a bespoke chauffeur service.
            </p>

            <form onSubmit={handleSubmit}>
              <div className={styles.contactGrid} style={{ gap: '2rem', marginBottom: '1.5rem' }}>
                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>Name (required)</label>
                  <input type="text" className={styles.input} required placeholder="Full Name" />
                </div>
                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>Email (required)</label>
                  <input type="email" className={styles.input} required placeholder="Email Address" />
                </div>
              </div>

              <div className={styles.contactGrid} style={{ gap: '2rem', marginBottom: '1.5rem' }}>
                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>Telephone Number (required)</label>
                  <input type="tel" className={styles.input} required placeholder="Phone Number" />
                </div>
                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>Journey Type (required)</label>
                  <select className={styles.select} required defaultValue="">
                    <option value="" disabled>Select Journey Type</option>
                    <option value="business">Business Booking</option>
                    <option value="airport">Airport Transfer</option>
                    <option value="group">Group Booking</option>
                    <option value="event">Event Booking</option>
                    <option value="tour">Chauffeur Tour</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Vehicle Preference (required)</label>
                <select className={styles.select} required defaultValue="">
                  <option value="" disabled>Select Vehicle</option>
                  <option value="range_rover_vogue">Range Rover Vogue</option>
                  <option value="range_rover_sport">Range Rover Sport</option>
                  <option value="s_class">Mercedes S-Class</option>
                  <option value="v_class">Mercedes V-Class (V220)</option>
                  <option value="e_class">Mercedes E-Class</option>
                </select>
              </div>

              <div className={styles.contactGrid} style={{ gap: '2rem', marginBottom: '1.5rem' }}>
                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>Pickup Location (required)</label>
                  <input type="text" className={styles.input} required placeholder="Full Address or Airport" />
                </div>
                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>Destination (required)</label>
                  <input type="text" className={styles.input} required placeholder="Full Address or Airport" />
                </div>
              </div>

              <div className={styles.contactGrid} style={{ gap: '2rem', marginBottom: '1.5rem' }}>
                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>Pickup Date (required)</label>
                  <input type="date" className={styles.input} required />
                </div>
                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>Pickup Time (required)</label>
                  <input type="time" className={styles.input} required />
                </div>
              </div>

              <div className={styles.contactGrid} style={{ gap: '2rem', marginBottom: '1.5rem' }}>
                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>No of Passengers (required)</label>
                  <input type="number" min="1" max="8" className={styles.input} required placeholder="1-8" />
                </div>
                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>No of Bags</label>
                  <input type="number" min="0" max="10" className={styles.input} placeholder="0" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Additional Requirements</label>
                <textarea className={styles.textarea} style={{ minHeight: '100px' }} placeholder="Flight numbers, child seats, specific requests..."></textarea>
              </div>

              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <button type="submit" className="btn btn-primary" style={{ padding: '1rem 4rem', fontSize: '1.1rem' }}>Submit Booking Request</button>
              </div>
              
              {status && (
                <p style={{ marginTop: '1.5rem', color: status.includes('success') ? '#4ade80' : 'var(--text-secondary)', textAlign: 'center', fontSize: '1.1rem' }}>
                  {status}
                </p>
              )}
            </form>

          </div>
        </div>
      </section>
    </main>
  );
}
