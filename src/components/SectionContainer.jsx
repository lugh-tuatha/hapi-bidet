import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionContainer({icon, link, heading, subHeading}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Link to={link}>
      <div data-aos="zoom-in" data-aos-duration="800">
        <div className='bg-primary h-80 rounded-lg'>
          <div className="flex justify-center h-full items-center flex-col font-mono">
            <img src={icon} alt="" className='w-20  active:scale-110'/>
            <h1 className='font-semibold'>{heading}</h1>
            <p className='font-thin w-11/12 mx-auto text-center'>{subHeading}</p>
          </div>
        </div>
      </div>
    </Link>
  
  )
}

export default SectionContainer