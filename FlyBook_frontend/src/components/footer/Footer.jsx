import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Panel */}
      <div className={styles.footPanel1}>
        Back to top
      </div>

      {/* Middle Links Panel */}
      <div className={styles.footPanel2}>
        <ul>
          <p>Get to Know Us</p>
          <a href="#">Blog</a>
          <a href="#">About FlyBook</a>
          <a href="#">Special offers</a>
        </ul>
        <ul>
          <a href="#">FlyBook Business Card</a>
          <a href="#">Reload Your Balance</a>
          <a href="#">Book with Points</a>
        </ul>
      </div>

      {/* Bottom Panel */}
      <div className={styles.footPanel4}>
        <div className={styles.pages}>
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Your Ads Privacy Choices</a>
        </div>

        {/* App Download Icons */}
        <div className={styles.apps}>
          <img
            src="https://i.postimg.cc/g0LXCxSb/10001.png"
            alt="App Image 1"
            className={styles.appImage}
          />
          <img
            src="https://i.postimg.cc/Y9cGMtZG/10002.png"
            alt="App Image 2"
            className={styles.appImage}
          />
        </div>

        <div className={styles.copyright}>
          © 2025 FlyBook.com Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
