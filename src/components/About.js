import React from 'react';
import {Helmet} from "react-helmet";
import Particles from 'react-particles-js';
import Navbar from './common/Navbar';
import MobileMenu from './common/MobileMenu';

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

                <Navbar logo_filename="VRooms_V11_Hori_White" theme="transparent-bg"/>

                <MobileMenu />

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