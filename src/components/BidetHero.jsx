import React, { useState } from 'react'
import { motion } from "framer-motion"

import play from '../assets/img/play.png'
import Modal from './Modal'

import shrekbidet from '../assets/img/shrek-bidet.png'

function BidetHero() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div className='w-11/12 mx-auto mt-4 rounded-2xl'>
      <h1 className='text-3xl font-bold pt-2'>Hi It's your birthday!</h1>

      <div className='border-2 border-gray-300 p-2 flex justify-between items-center rounded-xl my-2'>
        <p className='text-lg'>Happy birthday to you! many many blah blah blah.. </p>
        <div className="bg-blue-400 py-1 px-2 rounded-md">Send</div>
      </div>
      <p className='text-lg font-thin mb-1'>That's what I was going to do.</p>
      <p className='text-lg font-thin mb-1'>But then I stopped</p>
      <p className='text-lg font-thin mb-1'> I realised,I wanted to do something <span className='font-semibold'>Special</span></p>
      <p className='text-lg font-thin mb-1'>Because, you are special</p>
      <p className='text-lg font-thin mb-1'>Tsaka para di puro parcel binibigay ko ehe</p>

      <motion.img src={play} className='w-16 save-button' onClick={clicked} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}/>

      {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice}/>}

      <img src={shrekbidet} className='w-80 mx-auto'/>

    </div>
  )
}

export default BidetHero