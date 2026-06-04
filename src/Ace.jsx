import './Ace.css';
import Typewriter from 'typewriter-effect';
import { FaSquareXTwitter, FaFacebook, FaInstagram, FaLinkedin  } from "react-icons/fa6";
import Footer from './Footer';



const Ace = () => {

 
  return (
    <div>
       <header className='header fixed-top'>
          <div className="Ace-container-fluid container-xl justify-content-between align-items-center d-flex">
            <div className="Ace-title">
              <h1>CodeMeet</h1>
            </div>
            <div className="navbar d-flex">
                <ul>
                  <li><a href="" className="auto">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Resume</a></li>
                  <li><a href="" >Contact</a></li>
                </ul>
            </div>
          </div>
       </header>
       <main>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-section">
              <div className="container-fluid">
                <h2>Meet Patel</h2>
                <span>
                  <Typewriter 
        options={{ 
          strings:  [ 'I am','Front-End Developer'],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />  
                </span  >
                <div className="socials">
                  <a href=""><FaSquareXTwitter /></a>
                  <a href=""><FaFacebook /></a>
                  <a href=""><FaInstagram /></a>
                  <a href=""><FaLinkedin /></a>
                </div>
              </div>
          </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6zoo08cmV6Ywo8IeKOTxa0BXjHAOcMHtCw&s" alt="" className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
       </main>
        <Footer />
    </div>
  )
}

export default Ace
