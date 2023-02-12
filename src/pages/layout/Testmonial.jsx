import React from "react";
import './style/testmonial.css';
import testimonial_1_client_img from './imges/user1.jpg';
import testimonial_2_client_img from './imges/user2.jpg';

const Testmonial = () => {
  return(
      <>
          <section id="testimonial">
              <div className="container">
                  <h1 className="title text-center">WAT CLIENT SAY ?</h1>
                  <div className="row offset-1">
                      <div className="col-md-5 testimonial">
                          <p className="user-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eaque
                              exercitationem ipsa labore minima neque omnis placeat saepe sed temporibus!</p>
                          <img src={ testimonial_1_client_img } alt=""/>
                          <p className="user-details"><b>Agelina</b><br/> Co-founder at xyz</p>
                      </div>
                      <div className="col-md-5 testimonial">
                          <p className="user-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eaque
                              exercitationem ipsa labore minima neque omnis placeat saepe sed temporibus!</p>
                          <img src={ testimonial_2_client_img } alt=""/>
                          <p className="user-details"><b>John Doe</b><br/> Director at xyz</p>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Testmonial;