import React from 'react'
import './pages.css'

import BacktoHome from '../components/BacktoHome'

import pixelArt from '../assets/img/bae.png'
import digiArt from '../assets/img/digiArt.jpg'

function Art() {
  return (
    <>
      <div className="absolute flex items-center">
        <BacktoHome />
        <p className='md:hidden font-bold text-3xl font-mono ml-10'>For you :3</p>
      </div>
      <div className='flex-row md:flex justify-around items-center bg-background-100 h-screen art pt-16'>
        <img src={pixelArt} className='rounded-2xl w-72  sm:w-auto mx-auto'/>
        <img src={digiArt} className='rounded-2xl w-72  sm:w-auto mx-auto mt-4 md:mt-0'/>
      </div>
    </>
  )
}

export default Art