import React from 'react';
import Calculator from './Calculator';
import Testimonial from './content/Testimonial';
import TestimonialCarousel from './content/TestimonialCarousel';
import Title from './content/Title';
import What from './content/What';
import Why from './content/Why';
import How from './content/How'
import DeficitGraph from './content/DeficitGraph';
import Summation from './content/Summation'

function App() {
  return (
    <>
    <div className='dark'>
    <img id='logo' src='PP-LOGO-LOCKUP_WHITE.png'alt=''/></div>
    <Title/>
    <Testimonial />
    <What />
    <Why />
    <TestimonialCarousel />
    <How />
    <DeficitGraph />
    <Summation />
    <Calculator />
  </>
  );
}

export default App;
