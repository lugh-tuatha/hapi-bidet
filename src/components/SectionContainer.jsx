import React from 'react'
import { Link } from 'react-router-dom'

function SectionContainer({icon, link}) {
  return (
    <Link to={link}>
      <div className="">
        <div className='bg-primary w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-lg'>
          <div className="grid place-items-center h-full">
            <img src={icon} alt="" className='w-20  active:scale-110'/>
          </div>
        </div>
      </div>
    </Link>
  
  )
}

export default SectionContainer