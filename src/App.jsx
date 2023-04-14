import { useState } from 'react'
import './App.css'

import BidetHero from './components/BidetHero'
import SectionContainer from './components/SectionContainer'

import section from './data/section'

function App() {
  return (
    <div>
      <BidetHero />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-11/12 mx-auto mt-8 place-items-center gap-4">
        {section.map(sections => (
          <SectionContainer icon={sections.icon} link={sections.link}/>
        ))}
      </div>
    </div>
  )
}

export default App
