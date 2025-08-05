import React from 'react';
import styles from './MainMsg.module.css'; 

export default function Main_msg() {
  return (
    <div className={styles.mainSec}>
      <div className={styles.mainMsg}>
        <p className={styles.p1}>Welcome to FlyBook</p>
        <p className={styles.p2}>Book Your Next Flight Fast & Secure</p>
      </div>
    </div>
  );
}




