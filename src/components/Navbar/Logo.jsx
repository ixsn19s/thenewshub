import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(-1); 
  };

  return (
    <>
    
    
    <div>
        < img 
        className='h-20 w-24 cursor-pointer' 
        src="./images/logos.png"
        alt="Logo"
        onClick={handleLogoClick} 
        />
    </div>
    
    </>
  )
}

export default Logo