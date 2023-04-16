import React from 'react'

import hbdVid from '../assets/video/hbd.mp4'

import * as Ai from "react-icons/ai";

function Modal({setModalOn, setChoice}) {
  const handleCancelClick = () => {
    setChoice(false)
    setModalOn(false)
  }

  return (
    <div className='absolute top-12 right-7 lg:right-96  p-2 bg-tertiary border-2 border-black rounded-xl cursor-pointer'>
      <div onClick={handleCancelClick} className='flex justify-end mb-2'>
        <Ai.AiOutlineCloseCircle size={24} color='red'/>
      </div>
      <video src={hbdVid} className='w-72' controls autoPlay></video>
    </div>
  )
}

export default Modal