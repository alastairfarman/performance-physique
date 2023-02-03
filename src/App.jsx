import React, { useEffect } from 'react';
import Calculator from './Calculator';
import TestimonialCarousel from './content/TestimonialCarousel';
import Title from './content/Title';
import What from './content/What';
import Quote from './content/Quote';
import How from './content/How'
import Summation from './content/Summation'

function App() {


//content load on scroll//
useEffect(()=> {
  let revealItems = [...document.querySelectorAll('section > *')]

  let options = {
    rootMargin: '-20%',
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
  

},[])

  return (
    <>
    <Calculator  />
    <Title/>
    <What />
    <Quote/>
    <How />
    <TestimonialCarousel />
    <Summation />
  
  </>
  );
}

export default App;
