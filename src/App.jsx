import { useEffect, useState } from 'react'
import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Confetti from 'react-confetti'

import BidetHero from './components/BidetHero'
import SectionContainer from './components/SectionContainer'
import Header from './components/Header';

import section from './data/section'

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {showConfetti && <Confetti/>}
      <Header />
      <div className="md:px-20 md:py-12">

        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-2/3 grid w-11/12 mx-auto md:grid-cols-3 gap-4 mt-4 md:mt-0">
            {section.map(sections => (
              <SectionContainer icon={sections.icon} link={sections.link} heading={sections.heading} subHeading={sections.subHeading} />
            ))}
          </div>
          <div className='md:w-1/3'>
            <BidetHero />
          </div>
        </div>
      </div>


    </div>
  )
}

export default App
