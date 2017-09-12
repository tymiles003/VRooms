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



                <section class="section-features" id="application-home-benefits">
                  <div class="row expanded">
                    <div class="small-centered small-12 columns">
                      <h4>Discover the Power of Transported</h4>
                    </div>
                    <div class="small-12 columns feature-container">
                      <div class="small-12 large-6 columns feature-content left">
                        <div class="feature-text align-right">
                          <h5>Gorgeous Colors and Stunning Details</h5>
                          <p>Homes can be scanned with stunning detail, in high resolution with rich HDR color. Buyers will feel as if they're really there.</p>
                          <hr class="benefit-divider-1" />
                        </div>
                      </div>
                      <div class="small-12 large-6 columns image-right">
                        <img class="feature-img js-application-home-benefits-1-img" src="../transported-production.herokuapp.com/assets/marketing/features/index/feature1-9deb8dbcb7f58a5cbaeb939c8db4a8670644869fa5566eb2ee5a527e76eb8ad9.jpg" alt="Feature1" />
                      </div>
                    </div>
                    <div class="small-12 columns feature-container">
                      <div class="small-12 large-6 columns image-left">
                        <img class="feature-img js-application-home-benefits-2-img" src="../transported-production.herokuapp.com/assets/marketing/features/index/feature2-4698c9bdb53754adb19b5bd274d160ff6f5048782408ac45663c813f38f026a7.jpg" alt="Feature2" />
                      </div>
                      <div class="small-12 large-6 columns feature-content">
                        <div class="feature-text align-left">
                          <h5>Reach a Global Marketplace</h5>
                          <p>Your tour is published in the Transported VR app and available to shoppers across town and around the globe.</p>
                          <hr class="benefit-divider-2" />
                        </div>
                      </div>
                    </div>
                    <div class="small-12 columns feature-container">
                      <div class="small-12 large-6 columns feature-content left">
                        <div class="feature-text align-right">
                          <h5>No Proprietary Equipment</h5>
                          <p>Transported’s VR platform doesn’t require a proprietary camera and we don't lock you in.</p>
                          <hr class="benefit-divider-1" />
                        </div>
                      </div>
                      <div class="small-12 large-6 columns image-right">
                        <img class="feature-img js-application-home-benefits-3-img" src="../transported-production.herokuapp.com/assets/marketing/features/index/feature3-6355d5f4fef7efe3bb2e713f184b6942ffbdb1de4bc81b80ece03a193e277675.jpg" alt="Feature3" />
                      </div>
                    </div>
                    <div class="small-12 columns feature-container">
                      <div class="small-12 large-6 columns image-left">
                        <img class="feature-img js-application-home-benefits-4-img" src="../transported-production.herokuapp.com/assets/marketing/features/index/feature4-154f3a06290a1e25f3b2c939a7e3520eee0e2af7dd279471c826c9d7f35b54e0.jpg" alt="Feature4" />
                      </div>
                      <div class="small-12 large-6 columns feature-content">
                        <div class="feature-text align-left">
                          <h5>Easy to Share</h5>
                          <p>Share with people who don’t have a VR headset. Send them a mobile-compatible link, embed on your own web page, and post to Facebook and Twitter.</p>
                          <hr class="benefit-divider-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>






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