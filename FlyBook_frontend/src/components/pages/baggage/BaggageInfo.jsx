import styles from './BaggageInfo.module.css';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

const BaggageInfo = () => {
  return (
    <>
      <Header text="Baggage Rules Across Airlines" />

      <div className={styles.baggagePage}>

        {/* Hero Section */}
        <div className={styles.hero}>
          <p>
            Know your baggage limits before you fly.  
            Stay informed to avoid extra charges and enjoy a smooth journey.
          </p>
        </div>
        
        {/* Airline Policy Table */}
        <h2 className={styles.tableTitle}>✈ Airline Baggage Policy Snapshot</h2>
        <table className={styles.baggageTable}>
          <thead>
            <tr>
              <th>Airline</th>
              <th>Cabin Baggage</th>
              <th>Checked Baggage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Emirates</td>
              <td>7kg</td>
              <td>30kg</td>
            </tr>
            <tr>
              <td>Qatar Airways</td>
              <td>7kg</td>
              <td>25–30kg</td>
            </tr>
            <tr>
              <td>Turkish Airlines</td>
              <td>8kg</td>
              <td>20–30kg</td>
            </tr>
          </tbody>
        </table>

        {/* Baggage Rules Section */}
        <div className={styles.rulesGrid}>
          <div className={styles.ruleCard}>
            <h2>👜 Hand Carry</h2>
            <ul>
              <li>1 piece allowed</li>
              <li>Weight: 7–8 kg</li>
              <li>Size: 55 x 40 x 20 cm</li>
              <li>Must fit in overhead bin</li>
            </ul>
          </div>

          <div className={styles.ruleCard}>
            <h2>🛄 Checked Baggage</h2>
            <ul>
              <li>Included for full-service airlines</li>
              <li>Weight: 20–30 kg</li>
              <li>Varies by ticket class</li>
            </ul>
          </div>

          <div className={styles.ruleCard}>
            <h2>💼 Extra Baggage</h2>
            <ul>
              <li>Available at booking or check-in</li>
              <li>Charges vary per airline</li>
            </ul>
          </div>
        </div>


      </div>

      <Footer />
    </>
  );
};

export default BaggageInfo;
