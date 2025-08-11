import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from '../../header/Header';
import styles from './Login.module.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // track login state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log("Username:", username);
    console.log("Password:", password);

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: username,
        password: password,
      });

      console.log(res.data);
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);

      setIsLoggedIn(true);
      navigate("/"); // redirect to home
    } catch (error) {
      console.error("Login failed:", error);
    }

    setUsername("");
    setPassword("");
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsLoggedIn(false);
    navigate("/login"); // redirect to login
  };

  return (
    <>
      <Header text="Log in and Take Off to Your Next Adventure" />
      <div className={styles.loginPage}>
        <h1>{isLoggedIn ? "You are Logged In" : "Login Form"}</h1>

        {isLoggedIn ? (
          <div className={styles.buttonWrapper}>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={() => navigate("/")}>Home</button>
          </div>
        ) : (
          <div className={styles.loginForm}>
            <form onSubmit={handleSubmit}> 
              <div>
                <label htmlFor='username'>Username:</label>
                <input
                  type="text"
                  placeholder='Please enter your username'
                  className={styles.username}
                  id="username"
                  name="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>

              <div>
                <label htmlFor='password'>Password:</label>
                <input
                  type="password"
                  placeholder='Please enter your password'
                  className={styles.password}
                  id="password"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <div className={styles.buttonWrapper}>
                <button type="submit">Login</button>
              </div>

              <div className={styles.signupWrapper}>
                <span>Doesn't have an account?</span>
                <p 
                  className={styles.signupLink} 
                  onClick={() => navigate('/sign-up')}
                >
                  Signup
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
