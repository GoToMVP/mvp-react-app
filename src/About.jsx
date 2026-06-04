import './About.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaSquareXTwitter, FaFacebook, FaInstagram, FaLinkedin  } from "react-icons/fa6";
import Footer from './Footer';


const About = () => {
  return (
    <div>
       <header className='header fixed-top'>
          <div className="About-container justify-content-around align-items-center d-flex">
            <div className="About-title">
              <h1>CodeMeet</h1>
            </div>
            <div className="navbar d-flex">
                <ul>
                  <li><a href="" >Home</a></li>
                  <li><a href="" className="auto">About</a></li>
                  <li><a href="">Resume</a></li>
                  <li><a href="" >Contact</a></li>
                </ul>
            </div>
          </div>
       </header>
       <main>
          <div className="About-title">
            <div className="container-fluid mx-auto">
              <div className="About-me">
              <div className="d-flex text-center">
                  <div className="col-lg-8">
                    <h1>About</h1>
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
                    <li className="default">About</li>
                  </ol>
                </div>
             </nav>
          </div>
          <div className="Details-section">
            <div className="container-fluid">
              <h2>Front-End Developer</h2>
              <p>I am a builder who focuses on the intersection of clean aesthetics and functional logic.
                Currently, I am specializing in building responsive, high-performance web applications using React and modern CSS frameworks.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <big>~</big>
                      <strong>Birthday:</strong>
                      <span>27 April 2007</span>
                    </li>
                    <li>
                      <big>~</big>
                      <strong>City:</strong>
                      <span>Gujarat , Surat</span>
                    </li>
                    <li>
                      <big>~</big>
                      <strong>Age:</strong>
                      <span>18</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <big>~</big>
                      <strong>Degree:</strong>
                      <span>Bachelors in Computer Application(AI)</span>
                    </li>
                    <li>
                      <big>~</big>
                      <strong>E-mail:</strong>
                      <span>pmaxx678@gmail.com</span>
                    </li>
                  </ul>
                </div>
                <p>Currently, I am focused on mastering the React ecosystem and exploring the latest trends in Tailwind CSS and responsive architecture. My goal is to help clients and companies turn their ideas into polished, production-ready reality.</p>
              </div>
            </div>
          </div>
          <div className="Skills-section">
            <div className="container-fluid">
              <div className="my-skills">
                <h3>SKILLS</h3>
              <h4>MY SKILLS</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8 ">
                <div className="skills">
                  <span>HTML</span>
                  <small>90%</small>
                </div>
                <div className="progress-bar-wrap">
                  <ProgressBar now={90} />
                </div>
                <div className="skills">
                  <span>CSS</span>
                  <small>75%</small>
                </div>
                <div className="progress-bar-wrap">
                  <ProgressBar now={75} />
                </div>
                <div className="skills">
                   <span>JAVASCRIPT</span>
                  <small>60%</small>
                </div>
                <div className="progress-bar-wrap">
                  <ProgressBar now={60} />
                </div>
              </div>
            </div>
          </div>
       </main>
       <Footer />
    </div>
  )
}

export default About
