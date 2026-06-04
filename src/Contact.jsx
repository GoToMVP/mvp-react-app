import React from 'react'
import './Contact.css'
import { FaSquareXTwitter, FaFacebook, FaInstagram, FaLinkedin, FaRegEnvelope, FaPhone     } from "react-icons/fa6";
import Footer from './Footer';
import { MdMargin } from 'react-icons/md';

const Contact = () => {
  return (
    <div>
        <header className='header fixed-top'>
          <div className="Contact-container-fluid justify-content-around align-items-center d-flex">
            <div className="Contact-title">
              <h1>CodeMeet</h1>
            </div>
            <div className="navbar d-flex">
                <ul>
                  <li><a href="" >Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Resume</a></li>
                  <li><a href="" className="auto">Contact</a></li>
                </ul>
            </div>
          </div>
       </header>
       <main>
          <div className="container-fluid">
            <div className="Contact-title">
            <div className="Contact-me">
              <div className="container-fluid">
                <div className="row d-flex text-center">
                  <div className="col-lg-8">
                    <h1>Contact Me</h1>
                <p>I'm a Front-End Developer with a passion for turning complex problems
                  into clean, interactive, and user-friendly digital experiences.
                </p>
                  </div>
                </div>
              </div>
            </div>
             <nav className='Breadcrumb'>
                <div className="container-fluid">
                  <ol>
                    <li><a href="" >Home</a></li>
                    <li className="default">Contact</li>
                  </ol>
                </div>
             </nav>
          </div>
          <div className="Contact-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="Contact-item">
                            <span className='d-flex'>
                              <a href=""><FaRegEnvelope/></a>
                              <big>Email-Me</big>
                            </span>
                            <p>Pmaxx678@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Contact-item">
                            <span className='d-flex'>
                              <a href=""><FaPhone/></a>
                              <big>Call-Me</big>
                            </span>
                            <p>+91 9512565130</p>
                        </div>
                    </div>
                    
                </div>
                <div className="Contact-form">
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6">
                            <input type="text" name='name' placeholder='Your name' className='form-control' />
                        </div>
                        <div className="col-lg-6">
                            <input type="email" name='email' placeholder='Your email' className='form-control' />
                        </div>
                        <div className="col-lg-12">
                            <textarea name="message" placeholder='message' className='form-control'></textarea>
                        </div>
                        <div className="col-lg-12 text-center">
                            <button type='submit'>Send</button>
                        </div>
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
       </main>
       <Footer />
  </div>
  )
}

export default Contact
