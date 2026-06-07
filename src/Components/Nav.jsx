import React, { useEffect } from 'react';
import gsap from 'gsap';
const Nav = () => {
  useEffect(() => {
    // GSAP fade-in animation
    gsap.fromTo(
      '.nav', 
      { opacity: 0 }, 
      { opacity: 1, duration: 2, ease: 'power2.out',delay:1.5}
    );
  }, []);
  return (
    <div className='nav w-full text-white absolute top-0 left-0 '>
       <nav className='w-full h-20 flex justify-between items-center px-4 py-2'>
        <img className='w-32' src="../public/image.webp" alt="Logo"/>
        <h1 className='pr-8 '>Login</h1>
      </nav>
    </div>
  )
}

export default Nav
