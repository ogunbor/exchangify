import React from 'react';

const TradeNowButton = () => {
  // Encode the message text for URL
  const message = encodeURIComponent('Hello, I want to trade');

  // Construct the WhatsApp URL with the message parameter
  const whatsappUrl = `https://wa.me/1234567890?text=${message}`;

  const redirectToWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button onClick={redirectToWhatsApp} className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-20 text-l mx-auto block mt-4">
      Trade Now
    </button>
  );
};

export default TradeNowButton;
