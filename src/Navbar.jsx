import React, { useState, useEffect } from 'react';
import { MdNightsStay, MdWbSunny, MdCurrencyExchange } from "react-icons/md";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [shouldRotate, setShouldRotate] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setTimeout(() => {
      setShouldRotate(false);
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <div>
      <nav className={isDarkMode ? "bg-gray-800 text-white py-4 flex justify-between items-center" : "bg-gray-300 text-gray-800 py-4 flex justify-between items-center"}>
        <div className="flex items-center">
          <a href="https://exchangify.com.ng" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl ml-4 mr-2">
            <MdCurrencyExchange className={isDarkMode ? "text-white" : "text-gray-800"} style={{ transform: shouldRotate ? 'rotate(360deg)' : 'none', transition: 'transform 1s' }} />
          </a>
          <span className={isDarkMode ? "text-white text-xl font-bold mr-4" : "text-gray-800 text-xl font-bold mr-4"} style={{ fontFamily: 'cursive', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Exchangify</span>
        </div>
        <div className="flex items-center">
          {isDarkMode ? (
            <MdWbSunny className="text-yellow-400 text-2xl mr-4 cursor-pointer" onClick={toggleMode} />
          ) : (
            <MdNightsStay className="text-gray-800 text-2xl mr-4 cursor-pointer" onClick={toggleMode} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
