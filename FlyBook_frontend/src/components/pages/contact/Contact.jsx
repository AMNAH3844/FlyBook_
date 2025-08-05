import React, { useState } from "react";
import axios from "axios";
import Header from "../../header/Header";
import styles from "./Contact.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/contact/", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setSuccessMessage("Thank you for contacting us. Our team will get back to you shortly");
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending contact message:", error.response?.data || error);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <>
      <Header text="Always at your service" />
      <div className={styles.contactContainer}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.subtext}>
          We'd love to hear from you! Please fill out the form below.
        </p>

        {successMessage && <p className={styles.success}>{successMessage}</p>}

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className={styles.input}
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </div>

      <footer className={styles.footerr}>
        <p>© 2025 YourCompany™</p>
        <p>
          <a href="#">About</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Licensing</a> | <a href="#">Contact</a>
        </p>
      </footer>
    </>
  );
}
