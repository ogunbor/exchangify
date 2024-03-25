// App.js

import React, { useEffect } from 'react';
import { MdNightsStay } from "react-icons/md";
import Navbar from './Navbar';
import TradeNowButton from './WhatsAppButton';
import Welcome from './Welcome';
import Copyright from './Copyright';
import './App.css'; 

const App = () => {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight(); // Set initial height

    window.addEventListener('resize', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Welcome />
      <TradeNowButton />
      <Copyright />
    </div>
  );
};

export default App;
