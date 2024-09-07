import React from 'react';

import Logo from './Logo';
import Category from './Category';
import SearchLogin from './SearchLogin';

const Navbar = ({getData, handleInput, searchData, userInput }) => {
  return (
    <nav className='flex justify-between items-center p-4'>
      
      <Logo />
      <Category userInput={userInput} />
      <SearchLogin handleInput={handleInput} searchData={searchData} getData={getData} />
      
    </nav>
  );
}

export default Navbar;
