import React, { useEffect } from 'react';
import gsap from 'gsap';
const Home = () => {
  useEffect(() => {
    // GSAP fade-in animation
    gsap.fromTo(
      '.home-container', 
      { opacity: 0 }, 
      { opacity: 1, duration: 2, ease: 'power2.out',delay:1.5}
    );
  }, []);

  return (

      <div className='home-container w-full h-fit absolute bottom-0 text-center font-["Gilroy"] flex scroller ' >
      <div id="scroller">
          <div id="scroller-in">
            <h4>designer</h4>
            <h4>developer</h4>
            <h4>creative</h4>
            <h4>human</h4>
          </div>
          <div id="scroller-in">
            <h4>designer</h4>
            <h4>developer</h4>
            <h4>creative</h4>
            <h4>human</h4>
          </div>
        </div>

      </div>
      
  
  );
}

export default Home;
