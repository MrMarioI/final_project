import React from 'react'
import Buttons from '../buttons'
import {notfoundpic} from './../../assets/img/notfoundpic.jpg'
import './../../styles/notfound.css'

const action4 = () => console.log("action 4");

export default function NotFound () {
  return (
    <div>
      <div>
        <div className="test"> <img className="nfpic" src={notfoundpic} alt=""/> </div>
      </div>
      
      <Buttons className="button button-primary white" text="Retour" callback={action4} />

    </div>
  )
}
