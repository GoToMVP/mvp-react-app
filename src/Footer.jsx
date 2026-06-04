import React from 'react'
import './Footer.css';
import { FaSquareXTwitter, FaFacebook, FaInstagram, FaLinkedin  } from "react-icons/fa6";


const Footer = () => {
  return (
    <div>
        <footer>
              <div className="container">
                <div className="name">
                  <h1>Meet V.Patel</h1>
                  <p>An ambitious front-end developer dedicated to crafting immersive digital experiences .</p>
                  <div className="Socials">
                      <a href=""><FaSquareXTwitter /></a>
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaLinkedin /></a>
                  </div>
                </div>
              </div>
        </footer>
    </div>
  )
}

export default Footer
