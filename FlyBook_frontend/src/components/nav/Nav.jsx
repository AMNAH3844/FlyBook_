import React from "react";
import { Link } from "react-router-dom"; // Import Link
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlane, faPhone, faTag, faInfoCircle, faUser, faTicketAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <nav className={styles.navigation}>
          <span className={styles.navItem}>
            <FontAwesomeIcon icon={faHome} color="white" /> <Link to="/">Home</Link>
          </span>
          <span className={styles.navItem}>
            <FontAwesomeIcon icon={faPlane} color="white" /> <Link to="/mybookings">Previous Trips</Link>
          </span>
          <span className={styles.navItem}>
            <FontAwesomeIcon icon={faPhone} color="white" /> <Link to="/contact">Contact</Link>
          </span>
          <span className={styles.navItem}>
            <FontAwesomeIcon icon={faTag} color="white" /> <Link to="/special-offers">Special Offers</Link>
          </span>
          <span className={styles.navItem}>
            <FontAwesomeIcon icon={faInfoCircle} color="white" /> <Link to="/about">About Us</Link>
          </span>
          <span className={styles.navItem}>
            <FontAwesomeIcon icon={faUser} color="white" /> <Link to="/sign-up">Sign Up</Link>
          </span>
          <span className={styles.navItem}>
            <FontAwesomeIcon icon={faUserCircle} color="white" /><Link to="/login">Log-in/out</Link>
          </span>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
