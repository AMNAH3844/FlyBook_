import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../header/Header";
import styles from './booking.module.css'
import travelVideo from "./Travel.mp4";
import Footer from "../../footer/Footer";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //  The only valid offer codes from specialoffers page
  const validOfferCodes = [
    "BALI2025",
    "PARIS2025",
    "NYC2025",
    "TOKYO2025",
    "SYDNEY2025",
    "ROME2025",
  ];

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: 1,
    airline: "Any",
    seatClass: "Economy",
    baggage: "Cabin bag only",
    seatPreference: "No preference",
    stopPreference: "Any stops",
  });

  const [specialCode, setSpecialCode] = useState(
    new URLSearchParams(location.search).get("code") || ""
  ); // prefill if coming from offers
  const [codeMessage, setCodeMessage] = useState("");
  const [showAirlines, setShowAirlines] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate special offer code
  const validateCode = () => {
    if (!specialCode) {
      setCodeMessage("Please enter a code.");
      return;
    }
    if (validOfferCodes.includes(specialCode.trim().toUpperCase())) {
      setCodeMessage("Offer code applied!");
    } else {
      setCodeMessage("This code isn't available on our website.");
    }
  };

  // Confirm booking
  const handleConfirmBooking = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        alert("Please login to book a flight.");
        return;
      }

      // If code is entered but invalid — stop booking
      if (specialCode && !validOfferCodes.includes(specialCode.trim().toUpperCase())) {
        alert("Invalid offer code. Please check our special offers.");
        return;
      }

      const payload = {
        origin: formData.origin,
        destination: formData.destination,
        departure_date: formData.departureDate,
        return_date: formData.returnDate || null,
        travelers: formData.travelers,
        airline: formData.airline,
        seat_class: formData.seatClass.toLowerCase().replace(" ", "_"),
        baggage: formData.baggage,
        seat_preference: formData.seatPreference,
        stop_preference: formData.stopPreference,
        special_offer_code: specialCode || null,
      };

      console.log("Booking payload:", payload);

      await axios.post("http://127.0.0.1:8000/api/booking/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      alert("Booking Successful! ");
      setShowPreview(false);
      setMessage("Booking successful! ");

      // Reset form
      setFormData({
        origin: "",
        destination: "",
        departureDate: "",
        returnDate: "",
        travelers: 1,
        airline: "Any",
        seatClass: "Economy",
        baggage: "Cabin bag only",
        seatPreference: "No preference",
        stopPreference: "Any stops",
      });
      setSpecialCode("");
      setCodeMessage("");
    } catch (error) {
      console.error("Booking failed:", error.response?.data || error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <Header text="Start your Journey with US!" />
       {/* Booking Form */}
<form
  className={styles.bookingForm}
  onSubmit={(e) => e.preventDefault()}
>
  <div className={styles.formRow}>
    <div className={styles.formInput}>
      <label>From</label>
      <input
        type="text"
        name="origin"
        className={styles.input}
        placeholder="Enter departure city"
        value={formData.origin}
        onChange={handleChange}
      />
    </div>
    <div className={styles.formInput}>
      <label>To</label>
      <input
        type="text"
        name="destination"
        className={styles.input}
        placeholder="Enter destination city"
        value={formData.destination}
        onChange={handleChange}
      />
    </div>
    <div className={styles.formInput}>
      <label>Departure Date</label>
      <input
        type="date"
        name="departureDate"
        className={styles.input}
        value={formData.departureDate}
        onChange={handleChange}
      />
    </div>
    <div className={styles.formInput}>
      <label>Return Date</label>
      <input
        type="date"
        name="returnDate"
        className={styles.input}
        value={formData.returnDate}
        onChange={handleChange}
      />
    </div>
    <div className={styles.formInput}>
      <label>Passengers</label>
      <input
        type="number"
        name="travelers"
        className={styles.input}
        min="1"
        value={formData.travelers}
        onChange={handleChange}
      />
    </div>
  </div>

  {/* Special Offer Row - New Line */}
  <div className={styles.specialOfferRow}>
    <div className={styles.formInput}>
      <label>Special Offer Code?</label>
      <input
        type="text"
        className={styles.offerInput}
        placeholder="Enter code"
        value={specialCode}
        onChange={(e) => setSpecialCode(e.target.value)}
      />
    </div>
    <button
      type="button"
      className={styles.checkBtn}
      onClick={validateCode}
    >
      Check
    </button>
    <button
      type="button"
      className={styles.viewBtn}
      onClick={() => navigate("/special-offers")}
    >
      View Offers
    </button>
    <button
      type="button"
      className={styles.prebtn}
      onClick={() => setShowPreview(true)}
    >
      Preview Booking
    </button>
  </div>

  {codeMessage && <p className={styles.codeMessage}>{codeMessage}</p>}
</form>

    

      {message && <p className={styles.message}>{message}</p>}

      <div className={styles.lowerSection}>
        {/* Video Section */}
        <div className={styles.videoBox}>
          <video
            src={travelVideo}
            autoPlay
            loop
            muted
            className={styles.video}
          />
        </div>

        {/* Right Section */}
        <div className={styles.rightForms}>
          {/* Preferred Airlines */}
          <div className={styles.box}>
            <h2 onClick={() => setShowAirlines(!showAirlines)}>
              Preferred Airlines {showAirlines ? "▲" : "▼"}
            </h2>
            {showAirlines && (
              <div>
                <select
                  className={styles.boxInput}
                  name="airline"
                  value={formData.airline}
                  onChange={handleChange}
                >
                  <option>Any</option>
                  <option>Emirates</option>
                  <option>Qatar Airways</option>
                  <option>Turkish Airlines</option>
                  <option>Etihad</option>
                  <option>Saudi Airlines</option>
                </select>
              </div>
            )}
          </div>

          {/* Travel Class & Baggage */}
          <div className={styles.box}>
            <h2>Travel Class & Baggage</h2>
            <div className={styles.inputWrapper}>
              <select
                className={styles.boxInput}
                name="seatClass"
                value={formData.seatClass}
                onChange={handleChange}
              >
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
              <select
                className={styles.boxInput}
                name="baggage"
                value={formData.baggage}
                onChange={handleChange}
              >
                <option>Cabin bag only</option>
                <option>Cabin + 15kg checked</option>
                <option>Cabin + 30kg checked</option>
              </select>
            </div>
          </div>

          {/* Flight Preferences */}
          <div className={styles.box}>
            <h2>Flight Preferences</h2>
            <div className={styles.inputWrapper}>
              <select
                className={styles.boxInput}
                name="seatPreference"
                value={formData.seatPreference}
                onChange={handleChange}
              >
                <option>No preference</option>
                <option>Window seat</option>
                <option>Aisle seat</option>
                <option>Extra legroom</option>
              </select>
              <select
                className={styles.boxInput}
                name="stopPreference"
                value={formData.stopPreference}
                onChange={handleChange}
              >
                <option>Any stops</option>
                <option>Direct flight only</option>
                <option>1 stop max</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Preview Booking Details</h2>
            <ul>
              <li>
                <strong>From:</strong> {formData.origin}
              </li>
              <li>
                <strong>To:</strong> {formData.destination}
              </li>
              <li>
                <strong>Departure:</strong> {formData.departureDate}
              </li>
              <li>
                <strong>Return:</strong> {formData.returnDate || "N/A"}
              </li>
              <li>
                <strong>Passengers:</strong> {formData.travelers}
              </li>
              <li>
                <strong>Airline:</strong> {formData.airline}
              </li>
              <li>
                <strong>Class:</strong> {formData.seatClass}
              </li>
              <li>
                <strong>Baggage:</strong> {formData.baggage}
              </li>
              <li>
                <strong>Seat Pref:</strong> {formData.seatPreference}
              </li>
              <li>
                <strong>Stop Pref:</strong> {formData.stopPreference}
              </li>
              {specialCode && (
                <li>
                  <strong>Special Code:</strong> {specialCode}
                </li>
              )}
            </ul>
            <div className={styles.modalActions}>
              <button onClick={handleConfirmBooking}>Confirm Booking</button>
              <button onClick={() => setShowPreview(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Booking;
