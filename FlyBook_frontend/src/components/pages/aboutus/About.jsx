import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import styles from './AboutUS.module.css';

export default function AboutUs() {
  return (
    <>
      <Header text='know about us more! '/>
      <main className={styles.mainContent}>
        <section className={styles.introduction}>
          <h2>About Us</h2>
          <p>
            We are a passionate team dedicated to delivering exceptional services and creating meaningful experiences for our clients.
          </p>
        </section>
        <section className={styles.mission}>
          <h3>Our Mission</h3>
          <p>
            To innovate and provide solutions that empower businesses and enrich lives.
          </p>
        </section>
        <section className={styles.values}>
          <h3>Our Values</h3>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer-Centricity</li>
            <li>Collaboration</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
