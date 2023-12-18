import React from 'react'
import './footer.css'
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import {BsTelegram} from "react-icons/bs"
import {FaCopyright} from "react-icons/fa"

const footer = () => {
  return (
    <div className='footer'>
      <div className="footer_row1">
        <div className="logo_media">
          {/* <h5>Retrouvez-nous sur les reseaux sociaux ...</h5> */}
          <a href="https://www.youtube.com/@MathsAvecAubin" target='_blank' title='YouTube'><BsYoutube/></a>
          <a href="https://www.facebook.com/profile.php?id=100091679017941" target='_blank' title='Facebook'><BsFacebook/></a>
          <a href="https://t.me/+KWsiKdJdlToxNzhk " target='_blank' title='Telegram'><BsTelegram/></a>
        </div>
        <div> Copyright <FaCopyright/> 2023-2023 TechO e-digit Inc. </div>
        <div>Logo</div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="fit-content" height="2" viewBox="0 0 1152 2" fill="none">
        <path opacity="0.3" d="M0 1H1152" stroke="white"/>
      </svg>

      <div className="footer_row2">
        <div className="column">
          <a href="">Mathematiques en Terminale</a>
          <a href="">Mathematiques en Premiere</a>
          <a href="">Mathematiques en Seconde</a>
          <a href="">Mathematiques en Troisieme</a>
        </div>
        <div className="column">
          <a href="">Articles</a>
          <a href="">Support d'assistance</a>
          <a href="">Espace Publicite</a>
        </div>
        <div className="column">
          <a href="">Avis</a>
          <a href="">Mensions legales</a>
          <a href="">Confidentialite</a>
          <a href="">Condition d'utilisation</a>
        </div>
      </div>
    </div>
  )
}

export default footer