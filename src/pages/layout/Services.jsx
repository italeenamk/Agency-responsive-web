import React from "react";
import './style/services.css';
import services_1_img from './imges/service1.png';
import services_2_img from './imges/service2.png';
import services_3_img from './imges/service3.png';

const Services = () => {
  return(
      <>
          <section id="services">
              <div className="container text-center">
                  <h1 className="title">WHAT WE DO ?</h1>
                  <div className="row text-center">
                      <div className="col-md-4 services">
                          <img src={ services_1_img } className="services-img" alt=""/>
                          <h4>Growth Marketing</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugiat quo quod
                              repellendus voluptate. Aliquam eveniet magni minus reprehenderit soluta!</p>
                      </div>
                      <div className="col-md-4 services">
                          <img src={ services_2_img } className="services-img" alt=""/>
                          <h4>Online Branding</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugiat quo quod
                              repellendus voluptate. Aliquam eveniet magni minus reprehenderit soluta!</p>
                      </div>
                      <div className="col-md-4 services">
                          <img src={ services_3_img } className="services-img" alt=""/>
                          <h4>Animated Ads</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugiat quo quod
                              repellendus voluptate. Aliquam eveniet magni minus reprehenderit soluta!</p>
                      </div>
                  </div>
                  <button className="btn btn-primary">All Services</button>
              </div>
          </section>
      </>
  )
}

export default Services;