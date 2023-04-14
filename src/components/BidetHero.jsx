import React, { useState } from 'react'

import balloon from '../assets/img/balloon.png'
import celebration from '../assets/img/1.png'
import play from '../assets/img/play.png'

import Modal from './Modal'

function BidetHero() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div className='w-11/12 mx-auto bg-secondary mt-4 rounded-2xl h-72'>
      <img src={celebration} className='absolute left-1/4 hidden lg:block'/>
      <img src={celebration} className='absolute right-1/4 hidden lg:block'/>

      <h1 className='text-center text-3xl font-bold pt-2'>It's your birthday!!! :D</h1>
      <p className='text-lg text-center'>Bente ka na next year!!</p>

      <div className='flex justify-between'>
        <img src={balloon}/>
        <img src={balloon}/>
      </div>
      <div onClick={clicked}>
        <img src={play} className='w-16 absolute right-8 md:right-24 mt-2 active:scale-110' />
      </div>

      {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice}/>}
    </div>
  )
}

export default BidetHero