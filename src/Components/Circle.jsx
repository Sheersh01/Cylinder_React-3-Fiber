import React, { useEffect } from 'react';
import gsap from 'gsap';
import { IoIosArrowRoundDown } from "react-icons/io";
const Circle = () => {

    useEffect(() => {
        // GSAP fade-in animation
        gsap.fromTo(
          '.circle', 
          { opacity: 0 }, 
          { opacity: 1, duration: 2, ease: 'power2.out',delay:1.5}
        );
      }, []);

  return (
    <div className='text-white w-32 h-fit circle'>
       <div className="w-16 h-16 md:w-28 md:h-28 border-[1px]  border-white opacity-[0.5] rounded-full flex items-center justify-center absolute bottom-5 left-5 md:bottom-10 md:left-10  hover:scale-[0.8] hover:bg-white hover:text-black/[0.8] z-[2] transition-all">
        <IoIosArrowRoundDown className="text-3xl md:text-[5vw]"/>
        </div>
    </div>
  )
}

export default Circle
