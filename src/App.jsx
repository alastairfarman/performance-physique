import React, { useEffect } from 'react';
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


//content load on scroll//
useEffect(()=> {
  let revealItems = [...document.querySelectorAll('section > *')]

  let options = {
    rootMargin: '-10%',
    threshold: 0.0
  }
  
  let observer = new IntersectionObserver(showItem,options)
  
  let i=0

  function showItem(items){
    items.forEach(item => {
      if(item.isIntersecting){
        setTimeout(function(){
        item.target.classList.add('active');
        },50 * i++)
      }
    })
  }
  
  revealItems.forEach(item => {
    observer.observe(item)
  })
  

})

  return (
    <>
    <Calculator />
    <Title/>
    <Testimonial />
    <What />
    <Why />
    <TestimonialCarousel />
    <How />
    <DeficitGraph />
    <Summation />
  
  </>
  );
}

export default App;
