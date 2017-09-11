import React from 'react';
import {Helmet} from "react-helmet";
import Particles from 'react-particles-js';

require('./styles/About.css');

class About extends React.Component {
  constructor(props) {
    super(props);

   }
  render() {
    return (
      <div className="application">
          <Helmet>
            {/* customized script elements */}
            <script src="/js/drift.js" type="text/javascript" />

             {/* inline style elements */}
              <style type="text/css">{`
                  body {
                      overflow-y:auto;
                  }

                  body::-webkit-scrollbar {
                      width: 10px;
                      background-color: #F5F5F5;
                  }
                   
                  body::-webkit-scrollbar-track {
                      border: 1px solid gray;
                      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                      background-color: #F5F5F5;
                  }
                   
                  body::-webkit-scrollbar-thumb {
                      background-color: #57687c;
                      
                      background-image: -webkit-gradient(linear, 0 0, 0 100%,
                                         color-stop(.5, rgba(255, 255, 255, .2)),
                                         color-stop(.5, transparent), to(transparent));
                  }
              `}</style>
          </Helmet>
             
            <div className="particles">
             <Particles params={{
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
              }}/>
            </div>

              <div className="aboutWrapper">  
                <div className="navigation navigation--main">
                  <div className="navigation-wrapper">
                    <a href="/" className="navigation__logo-link emerge" data-duration="600" data-effect="slide" data-right="64px"  >
                      <img className="navigation__logo" width="220" src="/assets/img/logo/VRooms_V8_HoriWhite180.png" alt="VRooms" /> 
                    </a>
                    <div className="navigation-mobile js-open-menu">
                      <div className="navigation-mobile__icon js-open-menu-btn"></div>
                    </div>
                    <nav className="navigation-menu emerge" data-duration="600" data-effect="slide" data-left="64px">
                        <a href="/about" className="navigation-menu__link text--white">ABOUT</a>
                        <a href="/agents" className="navigation-menu__link text--white">AGENTS</a>
                        <a href="/showcase" className="navigation-menu__link text--white">SHOWCASE</a>
                        <a href="/contact" className="navigation-menu__link text--white">CONTACT US</a>

                        <a rel="signup" href="#signup" className="navigation-menu__link navigation-menu__link--hidden navigation-menu__link--lng a-signup">sign up</a>
                        <a data-auth="no" href="https://watch.appfollow.io?ref=github.com" className="navigation-menu__sign_in navigation-menu__sign_in_about a-login">sign in</a>
                    </nav>
                  </div>
                </div>

                <div className="mobile-menu js-mobile-menu">
                    <a href="/about" className="mobile-menu__link text--white text--bold a-submenu" data-page-name="Agents">About</a>
                    <a href="/agents" className="mobile-menu__link text--white text--bold a-submenu" data-page-name="Agents">Agents</a>
                    <a href="/showcase" className="mobile-menu__link text--white text--bold ">Showcase</a>
                    <a href="/contact" className="mobile-menu__link text--white text--bold ">Contact us</a>

                  <div className="mobile-menu-btn-wrapper">
                      <a data-auth="no" href="https://watch.appfollow.io?ref=github.com" className="mobile-menu__btn navigation-menu__sign_in a-login">sign in</a>
                  </div>
                </div>

                

          </div>

          
      </div>
    );
  }
}

export default About;


// <header className="header header--main js-header a-page" data-landing="yes" data-page="Home" data-page-name="Main">
//   <div className="description">
//     <h1 className="description__headline text--white emerge" data-duration="600" data-effect="slide" data-down="64px" data-hold="100">
//       Virtual Reality for Real Estate
//     </h1>
//     <span className="description__sub_headline text--white emerge" data-duration="600" data-effect="slide" data-down="64px" data-hold="100" data-continue="true">
//       Use VR to <strong>win</strong> more listings and <br />
//       <strong>stay ahead</strong> of your competition
//     </span>
      
//   </div>

// </header>