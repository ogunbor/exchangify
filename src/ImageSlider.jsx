import React, { useEffect, useState } from 'react';
import bitcoinImage from './assets/rsz_1bitcoin2cash.png';
import giftCardsImage from './assets/rsz_gift-cards.png';

const ImageSlider = ({ isDarkMode }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % 2);
    }, 2000); // Change image every 2 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % 2);
    }, 60000); // Change image after 1 minute

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  const images = [bitcoinImage, giftCardsImage];

  return (
    <div className="mt-0" style={{ width: '100%', overflow: 'hidden' }}>
      <img
        src={images[imageIndex]}
        alt={`Image ${imageIndex + 1}`}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default ImageSlider;
