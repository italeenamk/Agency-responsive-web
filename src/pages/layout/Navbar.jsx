import React from "react";
import './style/navbar.css';
import navbar_logo from './imges/demo-logo.png';
import menu_img from './imges/menu-l.png';


const Navbar = () => {
  return(
      <>
          <section id="nav-bar">
              <div className="container-fluid p-0">
                  <nav className="navbar navbar-expand-lg navbar-light">
                      <a href="#" className="navbar-brand"><img src={ navbar_logo } alt=""/></a>
                      <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNav">
                              <img src={ menu_img } alt=""/>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <div className="ml-auto"></div>
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <a href="#" className="nav-link">HOME</a>
                              </li>
                              <li className="nav-item">
                                  <a href="#" className="nav-link">SERVICES</a>
                              </li>
                              <li className="nav-item">
                                  <a href="#" className="nav-link">ABOUT US</a>
                              </li>
                              <li className="nav-item">
                                  <a href="#" className="nav-link">TESTMONIALS</a>
                              </li>
                              <li className="nav-item">
                                  <a href="#" className="nav-link">CONTACT</a>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </section>
      </>
  )
}

export default Navbar;