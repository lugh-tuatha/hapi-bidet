import React from 'react'

import BacktoHome from '../components/BacktoHome'

import digiArt from '../assets/img/bae.png'

function Art() {
  return (
    <>
      <div className="absolute">
        <BacktoHome />
      </div>
      <div className='flex justify-around items-center bg-background-100 h-screen'>

        <img src={digiArt} className='rounded-2xl'/>
        <img src={digiArt} className='rounded-2xl'/>
      </div>
    </>
  )
}

export default Art