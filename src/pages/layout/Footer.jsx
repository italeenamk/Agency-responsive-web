import React from "react";
import './style/footer.css';
import footer_img from './imges/wave2.png';
import footer_logo from './imges/demo-logo.png';

const Footer = () => {
  return(
      <>
          <section id="footer">
              <img src={ footer_img } alt="" className="footer-img"/>
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 footer-box">
                          <img src={ footer_logo } alt=""/>
                          <p className="footer-datails">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                              commodi hic illo, neque qui recusandae velit. Atque dolorem non quo.</p>
                      </div>
                      <div className="col-md-4 footer-box">
                          <p><b>CONTACT US</b></p>
                          <p>World Trade Centre, Bangalore</p>
                          <p>+1 0123456789</p>
                          <p>xyz2gmail.com</p>
                      </div>
                      <div className="col-md-4 footer-box">
                          <p><b>SUBSCRIBE NEWSLETTER</b></p>
                          <input type="email" className="form-control" placeholder="Your Email"/>
                          <button type="button" className="btn btn-primary">Subscribe</button>
                      </div>
                  </div>
                  <hr/>
                  <p className="copyright">Website Cereated by Easy Tutorial</p>
              </div>
          </section>
      </>
  )
}

export default Footer;