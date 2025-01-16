import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Home.css';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Banner from '../Slider/Banner';
import Navbar from '../Navbar/Navbar';
import Products from './Products';
import { useLocation } from "react-router-dom";


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="home" style={{ background: "#e4e4e4", marginRight: "8px" }}>
      <Header />
      <Navbar />
      <Banner />
      <div className="main1">
        <Products />
        <About />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
