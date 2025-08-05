import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage"; 
import Signup from "./components/pages/signup/SignUp";
import Booking from "./components/pages/booking/Booking";
import Contact from "./components/pages/contact/Contact";
import About from "./components/pages/aboutus/About";
import SpecialOffers from "./components/pages/specialoffers/SpecialOffers";
import AirSchedule from "./components/pages/airlineschedules/AirSchedule";
import BaggageInfo from "./components/pages/baggage/BaggageInfo";
import Error from "./components/pages/error/Error"
import Login from "./components/pages/login/Login";
import MyBookings from "./components/pages/mybookings/MyBookings";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element ={
          <ProtectedRoute>
            <LandingPage/>
         </ProtectedRoute>
        }/>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/book-flight" element ={ <Booking />}/>
        <Route path="/contact" element ={ <Contact />}/>
        <Route path="/mybookings" element ={ <MyBookings/>}/>
        <Route path="/about" element ={ <About />}/>
        <Route path="/special-offers" element={ <SpecialOffers />}/>
        <Route path="/sairlines" element={ <AirSchedule />}/>
        <Route path="/baggage" element={ <BaggageInfo/>}/>
        <Route path="/airsch" element={<AirSchedule />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />
        {/* Catch-all for 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
export default App;

