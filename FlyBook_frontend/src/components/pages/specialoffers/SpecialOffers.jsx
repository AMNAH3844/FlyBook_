import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import styles from "./SpecialOffers.module.css";

export default function SpecialOffers() {
  const navigate = useNavigate();
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offers = [
    {
      title: "Family Getaway to Bali",
      image: "https://i.postimg.cc/5NfPfJWR/bali.png",
      shortDescription:
        "Enjoy a serene family vacation in Bali with discounted flights and accommodations.",
      code: "BALI2025",
      details: {
        price: "$899 per person",
        duration: "7 Days / 6 Nights",
        hotel: "4-Star Beach Resort",
        transport: "Airport transfer included",
      },
    },
    {
      title: "Paris Escape",
      image: "https://i.postimg.cc/Bn6M1C65/paris.png",
      shortDescription:
        "Experience the charm of Paris with special packages and flight deals.",
      code: "PARIS2025",
      details: {
        price: "$1199 per person",
        duration: "5 Days / 4 Nights",
        hotel: "Luxury City Hotel",
        transport: "Metro pass included",
      },
    },
    {
      title: "Adventure in Tokyo",
      image: "https://i.postimg.cc/6Q4cM5Cy/tokoyo.png",
      shortDescription:
        "Discover Tokyo's vibrant culture with our exclusive adventure packages.",
      code: "TOKYO2025",
      details: {
        price: "$1299 per person",
        duration: "6 Days / 5 Nights",
        hotel: "3-Star City Hotel",
        transport: "Public transport card included",
      },
    },
    {
      title: "Beach Holiday in Maldives",
      image: "https://i.postimg.cc/MpFt0jMC/maldives.png",
      shortDescription:
        "Relax on the pristine beaches of Maldives with our all-inclusive flight and stay deals.",
      code: "MALDIVES2025",
      details: {
        price: "$1499 per person",
        duration: "5 Days / 4 Nights",
        hotel: "Overwater Villa",
        transport: "Speedboat transfer included",
      },
    },
    {
      title: "Explore New York City",
      image: "https://i.postimg.cc/NG6JhMSX/nyc.png",
      shortDescription:
        "Dive into the hustle and bustle of NYC with our special urban adventure packages.",
      code: "NYC2025",
      details: {
        price: "$1099 per person",
        duration: "4 Days / 3 Nights",
        hotel: "Downtown Apartment",
        transport: "Subway pass included",
      },
    },
    {
      title: "Safari Adventure in Kenya",
      image: "https://i.postimg.cc/yYnLdGVY/kenya.png",
      shortDescription:
        "Embark on a thrilling safari in Kenya with our exclusive flight and tour deals.",
      code: "KENYA2025",
      details: {
        price: "$1399 per person",
        duration: "6 Days / 5 Nights",
        hotel: "Safari Lodge",
        transport: "Jeep Safari included",
      },
    },
  ];

  return (
    <>
      <Header text="Explore Our Special Flight Deals" />
      <div className={styles.container}>
        <h2 className={styles.title}>Top Travel Offers</h2>
        <div className={styles.grid}>
          {offers.map((offer, index) => (
            <div key={index} className={styles.card}>
              <img
                src={offer.image}
                alt={offer.title}
                className={styles.image}
              />
              <h3 className={styles.cardTitle}>{offer.title}</h3>
              <p className={styles.cardText}>{offer.shortDescription}</p>
              <button
                className={styles.viewButton}
                onClick={() => setSelectedOffer(offer)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedOffer && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span
              className={styles.close}
              onClick={() => setSelectedOffer(null)}
            >
              &times;
            </span>
            <img
              src={selectedOffer.image}
              alt={selectedOffer.title}
              className={styles.modalImage}
            />
            <h2>{selectedOffer.title}</h2>
            <ul className={styles.detailsList}>
              <li>
                <strong>Price:</strong> {selectedOffer.details.price}
              </li>
              <li>
                <strong>Duration:</strong> {selectedOffer.details.duration}
              </li>
              <li>
                <strong>Hotel:</strong> {selectedOffer.details.hotel}
              </li>
              <li>
                <strong>Transport:</strong> {selectedOffer.details.transport}
              </li>
            </ul>

            {/* Discount Code */}
            <div className={styles.codeBox}>
              <strong>Offer Code:</strong>{" "}
              <span className={styles.codeText}>{selectedOffer.code}</span>
              <button
                className={styles.copyButton}
                onClick={() => {
                  navigator.clipboard.writeText(selectedOffer.code);
                  alert("Offer code copied!");
                }}
              >
                Copy Code
              </button>
            </div>

            <button
              className={styles.bookButton}
              onClick={() =>
                navigate(`/book-flight?code=${selectedOffer.code}`)
              }
            >
              Book Now
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}


