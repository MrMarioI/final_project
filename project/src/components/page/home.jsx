import React from 'react'
import Andrea from './../../assets/img/AndreaMetz.jpeg'
import Tom from './../../assets/img/TomProphetsOfRage.jpeg'
import Thomas from './../../assets/img/Thom-MaricaWedding.jpeg'
import Clusaz from './../../assets/img/lacluz.jpg'
import './../../styles/Home.css'

export default function Home () {
  return (
    <div className='homegrid'>
      <div><img src={Andrea} alt='Andrea Maire' /></div>
      <div><img src={Tom} alt='Tom Morello - Prophets Of Rage' /></div>
      <div><img src={Thomas} alt='Thomas & Marica' /></div>
      <div><img src={Clusaz} alt='La Clusaz' /></div>
    </div>
  )
}
