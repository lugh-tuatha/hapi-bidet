import React from 'react'

import BacktoHome from '../components/BacktoHome'

function Music() {
  return (
    <>
      <div className="absolute ">
        <BacktoHome />
      </div>

      <div className='flex justify-center items-center bg-background-200 w-screen h-screen'>
        <audio src="" controls></audio>
      </div>
    </>
  )
}

export default Music