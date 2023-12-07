import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='text-white bg-[url(./assets/betting-bg.jpg)] h-screen bg-cover bg-no-repeat ' id='home'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        
        <Link to="/dashboard"><button className='bg-[#f23f39]  w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Dashboard</button></Link>
        <Link to="/register"><button className='bg-[#f23f39]  w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Register</button></Link>
      </div>
    </div>
  );
};

export default Landing;