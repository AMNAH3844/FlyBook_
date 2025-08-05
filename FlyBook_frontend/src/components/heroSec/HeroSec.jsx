import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSec.module.css"; 

// Using external image URLs instead of local imports
const cardData = [
  { 
    img: "https://i.postimg.cc/WzCxffhv/tickets.jpg",
    title: "Book Flights",
    text: "Book your flight now",
    link: "/book-flight",
    btnText: "Book Now"
  },
  { 
    img: "https://i.postimg.cc/wvWCDBz3/packages.jpg",
    title: "Holiday Packages",
    text: "Explore amazing vacation packages worldwide.",
    link: "/special-offers",
    btnText: "View Deals"
  },
  { 
    img: "https://i.postimg.cc/nL1bckw4/planebackgroung.jpg",
    title: "Departure & Arrival",
    text: "Check flight schedules and plan your trip.",
    link: "/airsch",
    btnText: "Check Dates"
  },
  { 
    img: "https://i.postimg.cc/L5nrDM4D/baggage.jpg",
    title: "Baggage Information",
    text: "Know baggage rules and restrictions before you fly.",
    link: "/baggage",
    btnText: "Learn More",
    wide: true
  },
  { 
    img: "https://i.postimg.cc/G2h0ByZZ/support.jpg",
    title: "Customer Support",
    text: "Get assistance for bookings, cancellations, and more.",
    link: "/contact",
    btnText: "Contact Us",
    wide: true
  }
];

const HeroSec = () => {
  return (
    <div className={styles.cards}>
      {cardData.map((card, index) => (
        <div 
          key={index} 
          className={`${styles["card-item"]} ${card.wide ? styles.wide : ""}`}
        >
          <img src={card.img} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          <Link to={card.link}>{card.btnText}</Link>
        </div>
      ))}
    </div>
  );
};

export default HeroSec;
