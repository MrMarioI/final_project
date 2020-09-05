import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import './../styles/footer.css'

  
export default class SocialFollow extends Component {
    render() {
        return (
            <div className="social-follow">
                <a
    href="https://www.facebook.com/mrmarioiphotos"
    className="social" target="_blank"
 >
    <FontAwesomeIcon icon={faFacebook} size="2x" />
 </a>
 <a
    href="https://www.instagram.com/mrmarioi"
    className="social" target="_blank"
 >
    <FontAwesomeIcon icon={faInstagram} size="2x" />
 </a>
 <a
    href="https://www.twitter.com/mrmarioi"
    className="social" target="_blank"
 >
    <FontAwesomeIcon icon={faTwitter} size="2x" />
 </a>
            </div>
        )
    }
}
