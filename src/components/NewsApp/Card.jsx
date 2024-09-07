import React from 'react';

const Card = ({ newsData }) => {

  const readMore = (url) => {
    window.open(url);
  }
  
  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {newsData.map((currItem, index) => {
        if(!currItem.urlToImage){
          return null
        } else {
          return (
            <div key={index} className='card bg-white shadow-lg rounded-lg overflow-hidden w-[360px] h-auto'>
              <img src={currItem.urlToImage} alt={currItem.title || "News Image"} className='w-full h-44 object-cover' />
              <div className='cardContent p-2'>
                <h2 onClick={() => readMore(currItem.url)}
                className=' font-medium leading-tight hover:text-blue-700 hover:cursor-pointer hover:font-semibold'>
                  {currItem.title}
                </h2>
                <p className='text-gray-700 mt-2 mb-3 tracking-tighter leading-4'>
                  {currItem.description}
                </p>
               
                  <button onClick={() => readMore(currItem.url)} className='bg-blue-500 text-white px-[10px] py-[6px] rounded'>
                    Read More
                  </button>
              
              </div>
            </div>
          );
        }
        
      })}
    </div>
  );
};

export default Card;