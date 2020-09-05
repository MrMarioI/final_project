import React from 'react'
import SocialFollow from './../SocialFollow'
import './../../styles/footer.css'
import './../../styles/Home.css'

export default function Footer() {
    return (
        <div>
            <hr/>
            <footer>
                <p className="copyright">&copy; Mario Ivanovic - 2020</p>
            <SocialFollow/>
            <p className="mentions">Mentions Légales</p>
            </footer>
           
        </div>
    )
}
