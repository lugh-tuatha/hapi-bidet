import React from 'react'

function SectionContainer({icon}) {
  return (
    <div className="">
      <div className='bg-primary w-72 h-72 rounded-lg'>
        <div className="grid place-items-center h-full">
          <img src={icon} alt="" className='w-20 '/>
        </div>
      </div>
    </div>
  )
}

export default SectionContainer