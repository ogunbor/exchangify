import React from 'react';
import { MdNightsStay } from "react-icons/md";
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import './App.css'; 
import Welcome from './Welcome';
import TradeNowButton from './WhatsAppButton';
import Text from './Text';
import Copyright from './Copyright';

const App = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Welcome />
      <TradeNowButton/>
      <Text/>
      <Copyright/>
    </div>
  );
};

export default App;
