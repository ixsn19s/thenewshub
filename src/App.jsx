
import Navbar from './components/Navbar/Navbar'
import Mains from './components/HeroPage/Mains'
import StartPage from './components/startPages/StartPage'
import NewsApp from './components/NewsApp/NewsApp'
import { useState } from 'react'

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
              <Navbar />
              <Mains exploreToggle={exploreToggle}  />
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


   {/* <div className='flex justify-center items-center h-screen w-full'>
        <StartPage />
      </div>
    <div className='w-full h-screen'>
    <Navbar />
    <Mains />

    </div>
     */}
    </>
  )
}

export default App