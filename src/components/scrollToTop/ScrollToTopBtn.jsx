import React from 'react'
import { useState, useEffect } from 'react';
import "./ScrollToTopBtn.css"

const ScrollToTopBtn = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () =>{
        if(window.scrollY > 300){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);

  return (
    <div className='scroll-to-top'>
       {
        isVisible && (
        <button onClick={scrollToTop} className='scroll-button'>↑</button>)
       }
    </div>
  )
}

export default ScrollToTopBtn