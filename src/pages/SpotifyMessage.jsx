import React from 'react'
import './pages.css'

import BacktoHome from '../components/BacktoHome'

import kasi from '../assets/img/qr-code/kasi.jpg'
import palagi from '../assets/img/qr-code/palagi.jpg'
import HavingBadDay from '../assets/img/qr-code/having-a-bad-day.jpg'
import always from '../assets/img/qr-code/always.jpg'
import carefully from '../assets/img/qr-code/carefully.jpg'
import endOfTheDay from '../assets/img/qr-code/end-of-the-day.jpg'
import classmate from '../assets/img/qr-code/classmate.jpg'
import gustoKita from '../assets/img/qr-code/gusto-kita.jpg'
import family from '../assets/img/qr-code/family.jpg'
import myDay from '../assets/img/qr-code/my-day.jpg'
import comfortableAndSafe from '../assets/img/qr-code/comfortable-and-safe.jpg'
import ditoKaLang from '../assets/img/qr-code/dito-ka-lang.jpg'
import ditoKaNalang from '../assets/img/qr-code/dito-ka-nalang.jpg'
import home from '../assets/img/qr-code/home.jpg'
import Iknow from '../assets/img/qr-code/i-know.jpg'
import MakeMeFeel from '../assets/img/qr-code/make-me-feel.jpg'
import simply from '../assets/img/qr-code/simply.jpg'
import toYou from '../assets/img/qr-code/to-you.jpg'
import yourVoice from '../assets/img/qr-code/your-voice.jpg'


function SpotifyMessage() {
  return (
    <div className=' bg-background-500 '>
      <div className="absolute ">
        <BacktoHome />
      </div>
      <div className=" md:h-screen flex justify-center items-center">
        <div className='bg-secondary rounded-xl shadow-lg w-11/12 mt-16 md:mt-0 md:w-1/2 h-auto md:leading-10 md:text-lg font-thin font-mono p-4 qr-letter '>
          Hi alam ko na yata yung sagot sa "Bakit <img src={gustoKita}/>" <img src={kasi}/> anjan ka <img src={palagi}/> if naging maganda yung araw ko, if I'm <img src={HavingBadDay}/> you'll <img src={always}/> listen <img src={carefully}/> sakin. ranting how bad <img src={myDay}/> was kung gaano ka ingay yung <img src={family}/> ko, kung gaano nakakairita yung <img src={classmate}/> ko. Alam mo yun, <img src={endOfTheDay}/> <img src={Iknow}/> na I'll be having a rest with just <img src={simply}/> talking <img src={toYou}/> Because <img src={yourVoice}/> sounds like <img src={home}/> your words <img src={MakeMeFeel}/> <img src={comfortableAndSafe}/> <img src={gustoKita}/> kausap palagi, kausap kapag namo mroblema ako, kausap kapag masaya ako, kausap kapag marami akong iniisip. Hindi naman ibig sabihin nun na araw araw tayo magkausap, minuminuto tayo mag kausap basta all <img src={Iknow}/> is that i want to make you feel secured and assured. Kaya mylove sana <img src={ditoKaLang}/>, sana <img src={ditoKaNalang}/> mwaa
        </div>
      </div>
    </div>
  )
}

export default SpotifyMessage