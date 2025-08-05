import React from "react";
import styles from "./Header.module.css";

const Header = ({ text = "Welcome To FlyBook" }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        {/* Directly use <img> instead of background-image for external URLs */}
        <img
          src="https://i.postimg.cc/MTycGhJs/Flylogo.png"
          alt="FlyBook Logo"
          className={styles.logo}
        />
        <div className={styles.welcome}>{text}</div>
      </div>
    </header>
  );
};

export default Header;


