import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [selectedSport, setSelectedSport] = useState('Sports');

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSportSelect = (sport) => {
    setSelectedSport(sport);
    setNav(false); // Close the dropdown after selecting a sport
  };

  const DropdownMenu = () => (
    <div className='absolute left-0 top-full bg-black text-white p-2'>
      <div
        className='hover:text-[#f23f39] transition-all cursor-pointer block'
        onClick={() => handleSportSelect('Cricket')}
      >
        Cricket
      </div>
      <div
        className='hover:text-[#f23f39] transition-all cursor-pointer block'
        onClick={() => handleSportSelect('Football')}
      >
        Football
      </div>
    </div>
  );

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-black relative'>
      <h1 className='w-full text-3xl font-bold text-[#f23f39] '>winzz</h1>
      <div className='flex items-center p-2 gap-5'>
        <div
          className='hover:text-[#f23f39] transition-all cursor-pointer relative'
          onClick={handleNav}
        >
          {selectedSport}
          {nav && <DropdownMenu />}
        </div>
        <div className='hover:text-[#f23f39] transition-all cursor-pointer'>Live</div>
        <div className='hover:text-[#f23f39] transition-all cursor-pointer'>Contact</div>
      </div>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
