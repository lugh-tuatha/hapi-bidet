import React, { useState } from 'react'
import axios from 'axios'

import BacktoHome from '../components/BacktoHome'

import shrek from '../assets/img/shrek.png'

function Wish() {

  const [wish, setWish]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      Wish:wish,
    }
    axios.post('https://sheet.best/api/sheets/bdc1ce14-cb05-4ed5-92b9-610d97c3feae',data).then((response)=>{
      console.log(response);
      setWish('')
    })
  }
  
  return (
    <div className='bg-background-400'>
      <div className="absolute ">
        <BacktoHome />
      </div>

        <div className='h-screen flex-col flex items-center justify-center'>
          <p className='font-semibold text-3xl'>WishVault</p>
          <p className='font-thin mb-2 w-11/12 text-center'>Hindi ko mababasa wish moo ehe rooting na matupad wish mooo</p>
          <form onSubmit={handleSubmit} className=''>
            <textarea cols="40" rows="4" placeholder='Ano wish mo :)' className='border-2 border-shrek outline-none pl-2 pt-1 bg-transparent' onChange={(e) => setWish(e.target.value)} value={wish}/><br />
            <button className='border-2 border-shrek hover:bg-tertiary py-1 px-2' type='submit'>Submit</button>
          </form>
          <img src={shrek} className='mt-4 w-11/12 md:w-auto'/>
        </div>

    </div>
  )
}

export default Wish