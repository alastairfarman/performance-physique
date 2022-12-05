import React from 'react';
import Calculator from './Calculator';
import Testimonial from './content/Testimonial';
import Title from './content/Title';
import What from './content/What';
import Why from './content/Why';
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
    <Summation />
    <Calculator />
  </>
  );
}

export default App;
