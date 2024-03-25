import React from 'react';
import { MdNightsStay } from "react-icons/md";
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import './App.css'; 
import Welcome from './Welcome';

const App = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Welcome />
    </div>
  );
};

export default App;
