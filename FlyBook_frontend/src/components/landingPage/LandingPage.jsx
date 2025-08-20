import React from "react";
import Header from "../header/Header";
import Main_msg from "../main-msg/Main_msg"
import HeroSec from "../heroSec/HeroSec"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
// {<Link to="/booking-flights">Book Now</Link> }

function LandingPage() {
  return (
    
    <div>
      <Header/>
      <Nav/> {/* Only appears on this page */}
      <Main_msg/>
      <HeroSec/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
