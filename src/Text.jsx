import React from 'react';

const Text = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        <span style={styles.bold}>Whether you're looking to buy or sell popular cryptocurrencies</span> such as <span style={styles.highlight}>Bitcoin</span>, <span style={styles.highlight}>Pi</span>, <span style={styles.highlight}>ICE</span>, <span style={styles.highlight}>Ethereum</span>, <span style={styles.highlight}>Solana</span>, <span style={styles.highlight}>BNB</span>, <span style={styles.highlight}>LTC</span>, <span style={styles.highlight}>TRX</span>, and more, or <span style={styles.bold}>trade gift cards from major brands</span> like <span style={styles.highlight}>Google Play</span>, <span style={styles.highlight}>Amazon</span>, <span style={styles.highlight}>iTunes</span>, and <span style={styles.highlight}>Razer Gold</span>, <span style={styles.italic}>Exchangify</span> is here to <span style={styles.underline}>simplify and elevate your trading experience</span>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'left',
    color: '#333', // Darker text color
    fontFamily: 'Arial, sans-serif', // Font family
    borderLeft: '2px solid #6c757d',
    paddingLeft: '12px', // Padding left for the border
    backgroundColor: '#fafafa', // Lighter background color
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow
    marginTop: '40px', // Add margin at the top
    marginBottom: '40px', // Add margin at the bottom
  },
  text: {
    fontSize: '1rem', // Font size
    lineHeight: '1.4', // Line height
  },
  bold: {
    fontWeight: 'bold', // Bold text
  },
  italic: {
    fontStyle: 'italic', // Italic text
  },
  highlight: {
    color: '#007bff', // Highlighted text color
  },
  underline: {
    textDecoration: 'none', // Underline text
  },
};

export default Text;
