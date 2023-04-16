import { useEffect } from 'react'
import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import BidetHero from './components/BidetHero'
import SectionContainer from './components/SectionContainer'

import dino from './assets/img/dino.png'

import section from './data/section'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <BidetHero />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-11/12 mx-auto mt-4 place-items-center gap-x-5 gap-y-2 md:gap-4 ">
        <img src={dino} className='hidden md:block' data-aos="zoom-in" data-aos-duration="800"/>
        {section.map(sections => (
          <SectionContainer icon={sections.icon} link={sections.link}/>
        ))}
      </div>
    </div>
  )
}

export default App
