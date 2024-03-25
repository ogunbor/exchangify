import React from 'react';
import { MdNightsStay } from "react-icons/md";
import Navbar from './Navbar';
import TradeNowButton from './WhatsAppButton';
import Welcome from './Welcome';
import Copyright from './Copyright';
import './App.css'; 
import ColorsTimeLine from './ColorsTimeLine';



const App = () => {
  return (
    <div className="hero-section">
      <Navbar />
      <Welcome />
      <ColorsTimeLine/>
      <TradeNowButton/>
      <Copyright/>
    </div>
  );
};

export default App;
