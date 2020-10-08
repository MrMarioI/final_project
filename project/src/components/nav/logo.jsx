import React from 'react'
import logo from './../../assets/img/logo-white-black.svg'
import './../../styles/NavMain.css'

export default function Logo() {
    return (
        <div>
<a href="/">
            <img className="logo" src={logo} alt="Logo Mario Ivanovic Photography"/>
        </a>
        </div>
    )
}
