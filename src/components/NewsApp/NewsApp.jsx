import React, { useEffect, useState } from 'react'
import Card from './Card'
import Navbar from '../Navbar/Navbar';

const NewsApp = () => {

    const [newsData, setNewsData] = useState([]);
    const [searchData, setSearchData] = useState("nepal");
    const [searchDataChange,setSearchDataChange] = useState(false)
    // const API_KEY = "5cc49004347c4be9b7089df23c50c01d";
    const API_URL = `https://news-api-nitesh.onrender.com/news/${searchData}`

    const getData = async() => {
      try {
        console.log("API Fetched");
        
          const response =await fetch(API_URL, {
            method: 'GET',
          //   headers: {
          //     'Content-Type': 'application/json', 
          // },
          // body: JSON.stringify(  searchData )
          })

          const jsonData =await response.json();
         setNewsData(jsonData?.response?.articles)
       
      } catch (error) {
        console.error(error);
        
      }
    }

    useEffect(() => {
        getData();
    },[searchDataChange]);

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearchData(e.target.value)
    }
    const userInput = (e) => {
        console.log(e.target.value);
        setSearchData(e.target.value);
        setSearchDataChange((prev)=>!prev)
    }

  return (
    <>
    <Navbar getData={getData} handleInput={handleInput} searchData={searchData} userInput={userInput} />
    {
        newsData ?  (<div className=' w-full p-6'>
            <Card newsData={newsData} />
          </div>) : (<h1 className='mt-20 text-center text-8xl font-extrabold hover:text-red-600'>No News Available</h1>)
    }
    </>
  )
}

export default NewsApp





//without hosting api


// import React, { useEffect, useState } from 'react'
// import Card from './Card'
// import Navbar from '../Navbar/Navbar';

// const NewsApp = () => {

//     const [newsData, setNewsData] = useState(null);
//     const [searchData, setSearchData] = useState("nepal");

//     const API_KEY = "5cc49004347c4be9b7089df23c50c01d";

//     const getData = async() => {
//       try {
//           const response =await fetch(`https://newsapi.org/v2/everything?q=${searchData}&apikey=${API_KEY}&language=en`)
//           const jsonData =await response.json();
//           console.log(jsonData.articles);
//           setNewsData(jsonData.articles) ;
//       } catch (error) {
//         console.error(error);
        
//       }
//     }

//     useEffect(() => {
//         getData();
//     },[]);

//     const handleInput = (e) => {
//         console.log(e.target.value);
//         setSearchData(e.target.value)
//     }
//     const userInput = (e) => {
//         console.log(e.target.value);
//         setSearchData(e.target.value);
//     }

//   return (
//     <>
//     <Navbar getData={getData} handleInput={handleInput} searchData={searchData} userInput={userInput} />

//     {
//         newsData ?  (<div className=' w-full p-6'>
//             <Card newsData={newsData} />
//           </div>) : (<h1 className='mt-20 text-center text-8xl font-extrabold hover:text-red-600'>No News Available</h1>)
//     }
//     </>
//   )
// }

// export default NewsApp