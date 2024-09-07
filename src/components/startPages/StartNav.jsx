import React from 'react'

const StartNav = ({ toggleClick }) => {
  return (
    <>
    <div className=''>
    <h2 className='z-10 fixed top-4 text-3xl font-bold left-[40%] hover:text-red-800 cursor-pointer'>Welcome to ixsn news</h2>
       <a className='z-10 fixed top-12 text-3xl font-bold left-[45%] underline hover:text-blue-600 hover:underline-offset-4' onClick={toggleClick} href="#">Click Here</a>
    </div>
    
    </>
  )
}

export default StartNav