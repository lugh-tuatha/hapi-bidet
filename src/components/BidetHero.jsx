import React, { useState } from 'react'

import balloon from '../assets/img/balloon.png'
import celebration from '../assets/img/1.png'
import play from '../assets/img/play.png'

import Modal from './Modal'

import * as Md from "react-icons/md";

function BidetHero() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div className='w-11/12 mx-auto bg-secondary mt-4 rounded-2xl h-72'>
      <img src={celebration} className='absolute left-1/4 hidden md:block'/>
      <img src={celebration} className='absolute right-1/4 hidden md:block'/>

      <h1 className='text-center text-3xl font-bold pt-2'>Hi It's your birthday!</h1>
      <p className='text-lg text-center font-thin'>So I realised,</p>

      <div className='flex justify-center md:justify-between mt-7 mb-3 md:m-0'>
        <img src={balloon} className='hidden md:flex'/>

        <div className='self-end font-thin text-xl text-center'>
          <div className="flex items-center">
            <p>I wanted to do something</p>
            <button className=' bg-tertiary py-1 px-2 rounded-sm ml-1 font-semibold'>Special</button>
          </div>
          <p>Because,</p>
          <p>You are special</p>
        </div>

        <img src={balloon} className='hidden md:flex'/>
      </div>

      <div className="absolute right-24 md:right-40 mt-6">
        <div className="flex items-center">
          <p className='font-thin'>click</p>
          <Md.MdOutlineKeyboardDoubleArrowRight size={32} />
        </div>
        
      </div>
      <div onClick={clicked}>
        <img src={play} className='w-16 absolute right-8 md:right-24 mt-2 active:scale-110' />
      </div>

      {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice}/>}
    </div>
  )
}

export default BidetHero