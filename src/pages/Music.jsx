import React from 'react'

import BacktoHome from '../components/BacktoHome'

function Music() {
  return (
    <>
      <div className="absolute ">
        <BacktoHome />
      </div>

      <div className='flex flex-col justify-center items-center bg-background-200 w-screen h-screen'>
        <audio src="" controls></audio>
        <p>Ginagawa mo dito? wala dito AHWHAWHAHAH </p>
      </div>
    </>
  )
}

export default Music