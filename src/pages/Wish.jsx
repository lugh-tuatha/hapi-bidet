import React from 'react'

import BacktoHome from '../components/BacktoHome'

import shrek from '../assets/img/shrek.png'

function Wish() {
  return (
    <div className='bg-background-400'>
      <div className="absolute ">
        <BacktoHome />
      </div>

        <div className='h-screen flex-col flex items-center justify-center'>
          <p className='font-semibold text-3xl'>WishVault</p>
          <p className='font-thin mb-2'>Hindi ko mababasa wish moo ehe rooting na matupad wish mooo</p>
          <form>
            <textarea cols="50" rows="4" placeholder='Ano wish mo :)' className='border-2 border-shrek outline-none pl-2 pt-1 bg-transparent' /><br />
            <button className='border-2 border-shrek hover:bg-tertiary py-1 px-2'>Submit</button>
          </form>
          <img src={shrek} className='mt-4'/>
        </div>

    </div>
  )
}

export default Wish