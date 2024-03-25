import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <div style={styles.container}>
      &copy; Jerry O. {currentYear}
    </div>
  );
};

const styles = {
  container: {
    fontSize: '0.8rem', // Adjust font size
    color: '#555', // Adjust color
    textAlign: 'center', // Align text to center
    marginTop: '20px', // Add some top margin
    marginBottom: '40px', // Add some bottom margin
    fontFamily: 'Arial, sans-serif', // Font family
    fontStyle: 'italic', // Italicize text
  },
};

export default Copyright;

