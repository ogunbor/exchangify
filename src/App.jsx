import React from 'react';
import { MdNightsStay } from "react-icons/md";
import Navbar from './Navbar';
import TradeNowButton from './WhatsAppButton';
import Welcome from './Welcome';
import Copyright from './Copyright';
import './App.css'; 

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <TradeNowButton/>
      <Copyright/>
    </div>
  );
};

export default App;
