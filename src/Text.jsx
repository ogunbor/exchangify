import React from 'react';
import './App.css'

const Text = () => {
  return (
    <div className="animated-text" style={styles.container}>
      For here, we dey get am clear. Whether you wan buy or sell your giftcards; or you wan trade BTC, ETH, PI, ICE, SOL, or any cryptocurrency, we dey here for you. Our rates dey sharp and in less than 5 minutes, we don pay you. We no dey delay here at all.
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    fontSize: '0.8rem', // Reduced text size
    lineHeight: '1.5',
    marginTop: '30px',
    marginBottom: '20px', // Corrected margin-bottom spelling
    color: '#888', // Faint color
  },
};

export default Text;
