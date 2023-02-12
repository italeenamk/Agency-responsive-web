import React from "react";
import './style/social.css';
import facebool_img from './imges/facebook-icon.png';
import instagram_img from './imges/instagram-icon.png';
import twitter_img from './imges/twitter-icon.png';
import whatsapp_img from './imges/whatsapp-icon.png';
import linked_img from './imges/linkedin-icon.png';
import snapchat_img from './imges/snapchat-icon.png';

const Social = () => {
  return(
      <>
          <section id="social">
              <div className="container text-center">
                  <p>FIND US ON SOCILA MEDIA</p>
                  <div className="social-icons">
                      <a href=""><img src={ facebool_img } alt=""/></a>
                      <a href=""><img src={ instagram_img } alt=""/></a>
                      <a href=""><img src={ twitter_img } alt=""/></a>
                      <a href=""><img src={ whatsapp_img } alt=""/></a>
                      <a href=""><img src={ linked_img } alt=""/></a>
                      <a href=""><img src={ snapchat_img } alt=""/></a>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Social;