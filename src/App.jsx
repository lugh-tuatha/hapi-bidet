import { useState } from 'react'
import './App.css'

import BidetHero from './components/BidetHero'
import SectionContainer from './components/SectionContainer'

import section from './data/section'

function App() {
  return (
    <div>
      <BidetHero />
      <div className="flex w-11/12 mx-auto mt-8 justify-between">
        {section.map(sections => (
          <SectionContainer icon={sections.icon}/>
        ))}
      </div>
    </div>
  )
}

export default App
