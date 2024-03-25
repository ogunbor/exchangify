import React from 'react';
import { MdNightsStay } from "react-icons/md";
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import './App.css'; 
import Welcome from './Welcome';
import TradeNowButton from './WhatsAppButton';

const App = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Welcome />
      <TradeNowButton/>
    </div>
  );
};

export default App;
