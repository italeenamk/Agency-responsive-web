import React from "react";
import './style/about.css';
import about_colum_img from './imges/network.png';


const About = () => {
  return(
      <>
          <section id="about">
              <div className="container">
                  <h1 className="title text-center">WHY CHOOSE US ?</h1>
                  <div className="row">
                      <div className="col-md-6 about-us">
                          <p className="about-title">Why we're different</p>
                          <ul>
                              <li>Understand our client's business goal first</li>
                              <li>Believe in doimg business with honesty</li>
                              <li>We deliver on time</li>
                              <li>We cereate a winning content strategy</li>
                              <li>We portect your online reputation</li>
                              <li>We cereate a winning content strategy</li>
                              <li>Believe in doimg business with honesty</li>
                          </ul>
                      </div>
                      <div className="col-md-6">
                          <img src={ about_colum_img } alt="" className="img-fluid"/>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}


export default About;