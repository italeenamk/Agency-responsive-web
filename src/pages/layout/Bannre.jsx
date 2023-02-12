import React from "react";
import './style/banner.css';
import play_img from './imges/play.png';
import bannre_colum_img from './imges/home2.png';
import bottom_banner_img from './imges/wave1.png';

const Bannre = () => {
  return(
      <>
          <section id="banner">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <p className="promo-title">BEST DIGITAL AGENCY</p>
                          <p className="promo-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur dolore eveniet
                              magnam nihil nulla perferendis quam totam unde voluptate!</p>
                          <a href=""><img src={ play_img } alt="" className="play-btn"/>Watch Tutorials</a>
                      </div>
                      <div className="col-md-6 text-center">
                          <img src={ bannre_colum_img } className="img-fluid" alt=""/>
                      </div>
                  </div>
              </div>
              <img src={ bottom_banner_img } alt="" className="bottom-img"/>
          </section>
      </>
  )
}

export default Bannre;