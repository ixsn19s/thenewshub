import React from 'react';
import Spline from '@splinetool/react-spline';
import StartNav from './StartNav';

const StartPage = ({ toggleClick }) => {
  return (
    <>
    <StartNav toggleClick={toggleClick}/>
      <div className='fixed inset-0'>
        <div className='h-full w-full scale-[1.20] overflow-hidden'>
          <Spline scene="https://prod.spline.design/pfT474hGRIKmouyw/scene.splinecode" />
        </div>
      </div>
    </>
  );
};

export default StartPage;

