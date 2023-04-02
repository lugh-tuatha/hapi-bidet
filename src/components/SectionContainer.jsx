import React from 'react'
import letter from '../assets/img/icon/letter.png'

function SectionContainer() {
  return (
    <div className="w-11/12 mx-auto mt-8">
      <div className='bg-primary w-72 h-72 rounded-lg'>
        <div className="flex justify-center items-center ">
          <img src={letter} alt="" className='w-20 py-auto'/>
        </div>
      </div>
    </div>
  )
}

export default SectionContainer