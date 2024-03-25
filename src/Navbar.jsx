import React, { useState, useEffect } from 'react';
import { MdCurrencyExchange } from "react-icons/md";

const Navbar = () => {
  const [shouldRotate, setShouldRotate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShouldRotate(false);
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <div className="bg-gray-200 text-gray-100">
      <nav className="bg-gray-300 text-gray-100 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://exchangify.com.ng" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl ml-4 mr-2">
            <MdCurrencyExchange className="text-gray-800" style={{ transform: shouldRotate ? 'rotate(360deg)' : 'none', transition: 'transform 1s' }} />
          </a>
          <span className="text-gray-800 text-xl font-bold mr-4" style={{ fontFamily: 'cursive', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Exchangify</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

