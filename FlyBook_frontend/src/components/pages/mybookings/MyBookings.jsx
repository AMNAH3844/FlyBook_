import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MyBookings.module.css"; 

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          alert("Please login to view your bookings.");
          setLoading(false);
          return;
        }

        const res = await axios.get("http://127.0.0.1:8000/api/my-bookings/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching bookings:", error.response?.data || error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p className={styles.loading}>Loading your bookings...</p>;

  return (
    <div className={styles.container}>
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p className={styles.noBooking}>You haven't booked any flights yet.</p>
      ) : (
        <div className={styles.ticketGrid}>
          {bookings.map((booking) => (
            <div key={booking.id} className={styles.ticket}>
              <div className={styles.ticketHeader}>
                <span>{booking.origin} ✈ {booking.destination}</span>
                <span>{booking.airline}</span>
              </div>
              <div className={styles.ticketBody}>
                <p><strong>Departure:</strong> {booking.departure_date}</p>
                <p><strong>Return:</strong> {booking.return_date || "N/A"}</p>
                <p><strong>Passengers:</strong> {booking.travelers}</p>
                <p><strong>Class:</strong> {booking.seat_class}</p>
                <p><strong>Baggage:</strong> {booking.baggage}</p>
                <p><strong>Seat Pref:</strong> {booking.seat_preference}</p>
                <p><strong>Stop Pref:</strong> {booking.stop_preference}</p>
              </div>
              <div className={styles.ticketFooter}>
                <small>Booked on: {new Date(booking.created_at).toLocaleDateString()}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;
