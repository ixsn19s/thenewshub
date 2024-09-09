import React from 'react';
// import MainImg from './MainImg';

import MainText from './MainText';

const Main = ({exploreToggle}) => {
  return (
    <>
    <div className='mb-10'>

      <MainText exploreToggle={exploreToggle}/>
      {/* <MainImg /> */}
    </div>
    </>
  );
};

export default Main;


