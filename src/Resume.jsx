import React from 'react'
import './Resume.css'
import { FaSquareXTwitter, FaFacebook, FaInstagram, FaLinkedin  } from "react-icons/fa6";
import Footer from './Footer';

const Resume = () => {
  return (
    <div>
       <header className='header fixed-top'>
          <div className="Resume-container justify-content-around align-items-center d-flex">
            <div className="Resume-title">
              <h1>CodeMeet</h1>
            </div>
            <div className="navbar d-flex">
                <ul>
                  <li><a href="" >Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="" className="auto">Resume</a></li>
                  <li><a href="" >Contact</a></li>
                </ul>
            </div>
          </div>
       </header>
       <main>
            <div className="container-fluid mx-auto">
              <div className="Resume-title">
            <div className="Resume-me">
              <div className="container-fluid">
                <div className="row d-flex text-center">
                  <div className="col-lg-8">
                    <h1>Resume</h1>
                <p>Ambitious BCA student and aspiring Front-End Developer with a strong foundation in React, JavaScript, and modern CSS frameworks. Proven ability to build responsive, user-centric web applications. Currently focused on mastering the MERN stack and delivering high-quality freelance projects.
                </p>
                  </div>
                </div>
              </div>
            </div>
             <nav className='Breadcrumb'>
                <div className="container-fluid">
                  <ol>
                    <li><a href="" >Home</a></li>
                    <li className="default">Resume</li>
                  </ol>
                </div>
             </nav>
          </div>
          <div className="Resume-section">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-6">
                      <div className="Resume-Details">
                            <h2>Summary</h2>
                        </div>
                        <div className="Resume-content">
                            <big>meet patel</big>
                            <p>I believe in writing clean, maintainable code and building interfaces that feel as good as they look. My transition from a BCA student to a Front-End Developer is driven by a curiosity for how logic (JavaScript) meets aesthetics (CSS).</p>
                            <ul>
                                <li> <big>-</big>Gujarat, Surat, Katargam</li>
                                <li><big>-</big>+91 9512565130</li>
                                <li><big>-</big>pmaxx678@gmail.com</li>
                            </ul>
                        </div>
                        <div className="Resume-Details">
                            <h2>Education</h2>
                        </div>
                        <div className="Resume-content">
                            <big>bachelors in computer applications [bca]</big>
                            <h6>2025-2029 (expected)</h6>
                            <p>S.D Jain International College, Surat, Gujarat</p>
                            <span>Pursuing a Bachelor of Computer Applications with a specialization in AI, I have developed a strong foundation in software logic and data-driven problem-solving. My academic journey combines the analytical rigor of Machine Learning with a passion for modern front-end engineering.</span>
                        </div>
                          
                    </div>
                    <div className="col-lg-6">
                      
                          <div className="Resume-Details">
                            <h2>Professional Training</h2>
                        </div>
                        <div className="Resume-content">
                            <big>bachelors in computer applications [bca]</big>
                            <h6>2025-2026</h6>
                            <p>Creative Design & Multimedia Institute</p>
                            <ul>
                                <li> <big>-</big><b>Core Programming:</b> Mastered <b>C++ fundamentals</b>, including Object-Oriented Programming (OOPs), memory management, and algorithmic logic</li>
                                <li><big>-</big><b>Web Technologies:</b> HTML5, CSS3, JavaScript, React, and Tailwind CSS.</li>
                                <li><big>-</big><b>Key Achievement:</b> Leveraged C++ logic to build a strong foundation for complex JavaScript state management and AI algorithm implementation.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
            </div>
       </main>
        <Footer />
    </div>
  )
}

export default Resume
