import React from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = ({ text = "Welcome To FlyBook" }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // check if we're on landing page

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <img
            src="https://i.postimg.cc/MTycGhJs/Flylogo.png"
            alt="FlyBook Logo"
            className={styles.logo}
          />
          <div className={styles.welcome}>{text}</div>
        </div>
      </header>

      {/* Show Home link only if NOT on the home page */}
      {!isHomePage && (
        <div className={styles.navBar}>
          <Link to="/" className={styles.homeLink}>Fly Back Home</Link>
        </div>
      )}
    </>
  );
};

export default Header;



