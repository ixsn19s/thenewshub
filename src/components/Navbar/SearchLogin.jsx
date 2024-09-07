import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchLogin = ({ handleInput, searchData, getData}) => {
  return (
    <>
    {/* Search, Login & Signup */}
    <div className='flex items-center gap-4'>
      
    {/* Search Bar */}
    <div className='relative'>
      <input
      onChange={handleInput}
      value={searchData}
        className='bg-gray-200 px-8 py-2  rounded-md outline-none focus:ring-2 focus:ring-violet-700 transition duration-200'
        type="text"
        placeholder='Search'
      />

      <button onClick={getData}>
      <IoSearchSharp className='absolute top-1/2 transform -translate-y-1/2 right-2 text-xl text-gray-500 hover:cursor-pointer' />
      </button>
    </div>


    {/* Login Button */}
    <a href="/login">
      <button className="bg-red-700 font-medium text-white px-4 py-2 rounded hover:bg-violet-600 transition-all duration-300">
        Login
      </button>
    </a>

    {/* Signup Button */}
    <a href="/signup">
      <button className='bg-violet-600 px-4 py-2 font-medium rounded text-white hover:bg-white hover:border hover:border-blue-700 hover:text-blue-700 transition-all duration-300'>
        Signup
      </button>
    </a>
  </div>
    </>
  )
}

export default SearchLogin