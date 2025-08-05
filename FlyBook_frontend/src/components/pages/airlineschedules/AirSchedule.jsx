import styles from './AirSchedule.module.css';
import Header from '../../header/Header';
import { Link } from 'react-router-dom';
import Footer from '../../footer/Footer';

const AirSchedule = () => {
  const schedules = [
    { flight: 'EK 215', from: 'Dubai', to: 'Los Angeles', time: '10:00 AM', airline: 'Emirates' },
    { flight: 'QR 701', from: 'Doha', to: 'New York', time: '12:30 PM', airline: 'Qatar Airways' },
    { flight: 'TK 17', from: 'Istanbul', to: 'Toronto', time: '9:45 AM', airline: 'Turkish Airlines' },
    { flight: 'EY 101', from: 'Abu Dhabi', to: 'London', time: '2:00 PM', airline: 'Etihad' },
    { flight: 'SQ 325', from: 'Singapore', to: 'Frankfurt', time: '8:15 AM', airline: 'Singapore Airlines' },
    { flight: 'BA 150', from: 'London', to: 'Dubai', time: '5:45 PM', airline: 'British Airways' },
  ];

  return (
    <>
    <div className={styles.container}>
      <Header text="✈ Explore Flight Schedules" />

      <h2 className={styles.heading}>Plan your journey with live airline schedules</h2>

      <div className={styles.cardsWrapper}>
        {schedules.map((flight, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.flightInfo}>
              <h3 className={styles.flightCode}>{flight.flight}</h3>
              <p className={styles.airline}>{flight.airline}</p>
            </div>
            <div className={styles.route}>
              <span>{flight.from}</span>
              <span className={styles.arrow}>→</span>
              <span>{flight.to}</span>
            </div>
            <p className={styles.time}>Departure: {flight.time}</p>
            <Link to="/book-flight" className={styles.bookButton}>Book Now</Link>
          </div>
        ))}
      </div>
       </div>
      <Footer />
   </>
  );
};

export default AirSchedule;
