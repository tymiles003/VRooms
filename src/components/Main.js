import React, { Component } from "react";
import {Helmet} from "react-helmet";
// import { Link } from "react-router";
// import Navbar from "./common/Navbar";
// import Footer from "./common/Footer";

import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import LoginModal from "./LoginModal";
import Navbar from './common/Navbar';

require('./styles/Main.css');

class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
      return (

        <div className="application">
            <Helmet>
              {/* customized script elements */}
              <script src="/js/drift.js" type="text/javascript" />
                
            </Helmet>
            
          <div className="wrapper">

              <video className="video-container video-container-overlay" id="video-background" autoPlay="true">
                <source src="https://s3.amazonaws.com/vrooms/splashintro.mp4" type="video/mp4" />
              </video>

							<Navbar logo_filename="VRooms_V10_Hori_Gray" theme="white-bg"/>

                <header className="header header--main js-header a-page" data-landing="yes" data-page="Home" data-page-name="Main">
                  <div className="description">
                    <h1 className="description__headline text--white emerge" data-duration="600" data-effect="slide" data-down="64px" data-hold="100">
                      Virtual Reality for Real Estate
                    </h1>
                    <span className="description__sub_headline text--white emerge" data-duration="600" data-effect="slide" data-down="64px" data-hold="100" data-continue="true">
                      Use VR to <strong>win</strong> more listings and <br />
                      <strong>stay ahead</strong> of your competition
                    </span>
                      
                  </div>

                </header>

          </div>
        </div>   
      );
  }    
}

export default Main;

const handleLoginModal = () =>{

  console.log("inside handle login",<Showcase />);
  return <Showcase />;
}

    // <Navbar />
    // {props.children}
    // <Footer />

// ================================================================================

     // Navigation link code for content refresh within same page
     // <ul className="nav navbar-nav">
     //    <li className={location.pathname === "/" && "active"}>
     //      <Link to="/">Home</Link>
     //    </li>
     //    <li className={location.pathname === "/favorites" && "active"}>
     //      <Link to="/favorites">Favorites</Link>
     //    </li>
     //  </ul>