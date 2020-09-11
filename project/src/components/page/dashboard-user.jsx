import React from 'react'
import Photos from './photos'

import './../../styles/dashboard_user.css'

export default function Dashboarduser() {
    return (
        <div>
            <h1 className='form-title'>Bienvenue sur votre profil !</h1>
            <ul>
            <li><a className="userlinks" href="#">Votre profil</a>
            <ul className="sous">
                <li><a href="/profil_edit">Modifier votre profil</a></li>
                <li><a>Supprimer votre profil</a></li>
            </ul>
            </li>
            </ul>
            <hr/>
            <h1 className='form-title'>Votre galerie</h1>
           <Photos/>
        </div>
    )
}
