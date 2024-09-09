// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Mains from './components/HeroPage/Mains'
import StartPage from './components/startPages/StartPage'
import NewsApp from './components/NewsApp/NewsApp'
import { useState } from 'react'
import Example from './components/framerMotion/HorizontalScroll'
import Footer from './components/framerMotion/Footer'

const App = () => {
const [isClicked, setIsClicked] = useState(true)
const [exploredClicked, setExploreClicked] = useState(true);

  const toggleClick = () => {
    try{
      setIsClicked ((prev) => !prev)
    } catch ( error) {
      console.error(error);
      
    }
  };

  const exploreToggle = () => {
    try {
      setExploreClicked((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>

    {
      isClicked ? (
        <div className='flex justify-center items-center h-screen w-full'>
          <StartPage toggleClick={toggleClick} />
        </div>
        ) : (
          <div className=''>
          {
            exploredClicked ? (
             <div>
              {/* <Navbar /> */}
            <div className=''>
            < img className='h-24 ml-10 mb-5 cursor-pointer hover:opacity-75 transition duration-300 ease-in-out' src="./images/logos.png" alt="Logo" />
            </div>
              <Mains exploreToggle={exploreToggle}  />
              <Example />
              <Footer />
             </div>
            ) : (
              <div>  
                <NewsApp />
              </div>

            )
          }
        </div>
    )
    }

 
    </>
  )
}

export default App