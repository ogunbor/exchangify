import React from 'react';

const Welcome = () => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        Welcome to <span style={styles.bold}>Exchangify</span>
      </div>
      <div style={styles.subtitle}>
        <div style={{ marginBottom: '0', fontSize: '0.9rem' }}>Your Premier Platform for Cryptocurrency Trading and Digital Asset Exchange!</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'left',
    padding: '20px',
    backgroundColor: '#ffffff',
    maxWidth: '400px',
    margin: '0 auto',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#343a40',
  },
  bold: {
    color: '#6c757d', // Grey color
  },
  subtitle: {
    color: '#6c757d',
  },
};

export default Welcome;


