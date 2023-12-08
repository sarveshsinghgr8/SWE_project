import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav2 from '../components/Nav2';

const Dashboard = () => {
  const [showCheckStatusDropdown, setShowCheckStatusDropdown] = useState(false);
  const [showOption1Dropdown, setShowOption1Dropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const handleCheckStatus = () => {
    console.log('Check Status button clicked');
  };

  const handleCheckStatusHover = () => {
    setShowCheckStatusDropdown(true);
  };

  const handleCheckStatusLeave = () => {
    // Set a delay before hiding the dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setShowCheckStatusDropdown(false);
      setShowOption1Dropdown(false);
    }, 300); // Adjust the delay time as needed
  };

  const handleOption1Hover = () => {
    // Cancel the hiding timeout to prevent premature hiding
    clearTimeout(hoverTimeoutRef.current);
    setShowOption1Dropdown(true);
  };

  const handleOption1Leave = () => {
    // Set a delay before hiding the dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setShowOption1Dropdown(false);
    }, 300); // Adjust the delay time as needed
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowCheckStatusDropdown(false);
    setShowOption1Dropdown(false);
  };

  return (
    <>
      <Nav2 />

      <div className="container mx-auto mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Dashboard</h2>
        <div className="flex justify-center space-x-4">
          <Link to="/form" className="bg-red-300 hover:bg-red-500 text-black px-4 py-2 rounded">
            Make Bet
          </Link>
          <div
            className="relative inline-block group"
            onMouseEnter={handleCheckStatusHover}
            onMouseLeave={handleCheckStatusLeave}
          >
            <button className="bg-red-300 hover:bg-red-500 text-black px-4 py-2 rounded">
              {selectedOption || 'Check Status'}
            </button>
            {showCheckStatusDropdown && (
              <div className="absolute mt-2 left-0 bg-white border border-gray-300 rounded-md shadow-md">
                <ul>
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onMouseEnter={handleOption1Hover}
                  >
                    Cricket
                    {showOption1Dropdown && (
                      <ul className="ml-4">
                        <li
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleOptionSelect("Today's")}
                        >
                          Today's
                        </li>
                        <li
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleOptionSelect('Past')}
                        >
                          Past
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleOptionSelect('Option 2')}
                  >
                    Football
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
