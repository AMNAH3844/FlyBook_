import Header from '../../header/Header';
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css"; 
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(""); 

  const evaluatePasswordStrength = (pwd) => {
    if (!pwd) return setPasswordStrength("");

    const strongRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const mediumRegex = /^.{6,}$/;

    if (strongRegex.test(pwd)) {
      setPasswordStrength("strong");
    } else if (mediumRegex.test(pwd)) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("weak");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);

    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setPasswordStrength("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register/", {
        username: username,
        password: password,
      });

      console.log(res);
      if (res.status === 201) {
        alert("Registration successful! You may now login");
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error during SignUp:", error.response?.data || error.message);
      alert("SignUp failed. Please try again.");
    }
  };

  return (
    <div>
      <Header text="One Sign Up Away from Your Dream Destination." />
      <div className={styles.signupContainer}>
        <h1>Signup Form</h1>

        <div className={styles.signupForm}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='username'>Username:</label>
              <input
                type="text"
                placeholder='Please enter your username'
                id="username"
                name="username"
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className={styles.signupInput}
              />
            </div>

            <div>
              <label htmlFor='password'>Password:</label>
              <input
                type="password"
                placeholder='Please enter your password'
                id="password"
                name="password"
                required
                onChange={(e) => {
                  const val = e.target.value;
                  setPassword(val);
                  evaluatePasswordStrength(val);
                }}
                value={password}
                className={styles.signupInput}
              />
              {password && (
                <p className={`${styles.strengthText} ${styles[passwordStrength]}`}>
                  {passwordStrength === "strong"
                    ? "Strong Password"
                    : passwordStrength === "medium"
                    ? "Medium Password"
                    : "Weak Password"}
                </p>
              )}
            </div>

            <div>
              <label htmlFor='confirmPassword'>Confirm Password:</label>
              <input
                type="password"
                placeholder='Confirm your password'
                id="confirmPassword"
                name="confirmPassword"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className={styles.signupInput}
              />
            </div>

            <div className={styles.buttonWrapper}>
              <button type="submit" className={styles.signupButton}>Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;


