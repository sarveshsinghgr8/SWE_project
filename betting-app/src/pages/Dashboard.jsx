import React from 'react';
import { Link } from 'react-router-dom';
import Nav2 from '../components/Nav2';

const Dashboard = () => {
  const handleCheckStatus = () => {
    console.log('Check Status button clicked');
  };

  return (
    <>
      <Nav2 />

      <div className="container mx-auto mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="flex justify-center space-x-4">
          {/* Use Link to navigate to "/form" */}
          <Link to="/form" className="bg-red-300 hover:bg-red-500 text-black px-4 py-2 rounded">
            Make Bet
          </Link>
          <button
            className="bg-red-300 hover:bg-red-500 text-black px-4 py-2 rounded"
            onClick={handleCheckStatus}
          >
            Check Status
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
