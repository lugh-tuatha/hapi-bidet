import React from 'react'

import back from '../assets/img/back.png'
import { Link } from 'react-router-dom'

function BacktoHome() {
  return (
    <Link to="/">
      <img src={back} className='w-10 pt-2 ml-4 active:scale-110' />
    </Link>
  )
}

export default BacktoHome