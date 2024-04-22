import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import img from '../assets/img2.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import cursor from '../assets/cursor.png'
import server from '../assets/server.png'
import ucon from '../assets/ucon.png'
import "../components/landing.css"
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
const LandingP = () => {
  return (
    <>
    <Navbar/>
    <section className='container'>
      <div className='content'>
        <h1 className='title'>Hi, Welcome </h1>
        <p className='description'>
          This Website include the detail of Automobile company where user can insert the enteries and view it 
        </p>
        <a href="mailto:lahariritik3@email.com" className='contactBtn'>
          Contact Me
        </a>
      </div>
      <img
        src={img}
        alt="Hero image of me"
        className='heroImg'
      />
      <div className='topBlur' />
      <div className='bottomBlur' />
    </section>
    
    {/* about */}
    
    <section className="container" id="about">
  <h2 className="title">Tech Stack</h2>
  <div className="content">
    {/* <img
      src={}
      alt="Me sitting with a laptop"
      className="aboutImage"
    /> */}
    <ul className="aboutItems">
      <li className="aboutItem">
        <img src={cursor} alt="Cursor icon" />
        <div className="aboutItemText">
          <h3>Frontend Developer</h3>
          <p>
           For frontent we are using Reactjs 
          </p>
        </div>
      </li>
      <li className="aboutItem">
        <img src={server} alt="Server icon" />
        <div className="aboutItemText">
          <h3>Backend Developer</h3>
          <p>
            For Backend we are using Nodejs and Express 
          </p>
        </div>
      </li>
      <li className="aboutItem">
        <img src={ucon} alt="UI icon" />
        <div className="aboutItemText">
          <h3>Database</h3>
          <p>
           For Database we are using mysql 
          </p>
        </div>
      </li>
    </ul>
  </div>
</section>
   {/* footer  */}

   <footer>
      <div className="footer-content">
        <h3>Automobile Comapny databse</h3>
        <p>
          Team <span class="heart"></span> <Link to='/ourteam' > 
             Our team
          </Link>
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <FaGoogle size={30} color="#DB4437" />
            </a>
          </li>
          {/* <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li> */}
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <CiLinkedin size={30} color="#0077B5" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">Automobile company</a>{" "}
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
   
    </>
  )
}

export default LandingP