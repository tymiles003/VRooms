import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from './common/Navbar';
// import MobileMenu from './common/MobileMenu';
import BurgerMenu from './common/BurgerMenu';
// import AboutCSS from './styles/About.css';
// require('./styles/About.css');

// class About extends React.Component {
	// constructor(props) {
	//   super(props);
  
	//  }
	// render() {
	//   return (
const Agents = (props) => {
	return (
      <div className="application">
          <Helmet>
            {/* customized script elements */}
            <script src="/js/drift.js" type="text/javascript"></script>
			
			{/* CSS links for this page */}
			<link rel="stylesheet" href="/css/pagestyle.css"></link>
			<link rel="stylesheet" href="/css/pages/About.css"></link>
			
          </Helmet>

              <div className="aboutWrapper">  

                <Navbar logo_filename="VRooms_V11_Hori_White" theme="opaque-black-bg"/>

                <BurgerMenu />

                <div className="marketing">
                  <section className="section-features" id="application-home-benefits">
                    <div className="row expanded text--white">
                      <div className="small-centered small-12 columns">
                        <h1>Discover the Power of Virtual Reality Using VRooms</h1>
                      </div>
                      <div className="small-12 columns feature-container">
                        <div className="small-12 large-6 columns feature-content left">
                          <div className="feature-text">
                            <h5>Engage</h5>
                            <p>Lucas ipsum dolor sit amet maul dooku gamorrean kessel sith moff organa cade moff jango. Sidious lando solo dagobah ackbar calamari. Obi-wan hutt anakin organa tatooine moff mace. Solo greedo darth dagobah jabba coruscant dagobah organa wedge.</p>
                            <hr className="benefit-divider-1" />
                          </div>
                        </div>
                        <div className="small-12 large-6 columns image-right">
                          <img className="feature-img js-application-home-benefits-1-img" src="/assets/img/marketing/1.jpg" alt="Feature1" />
                        </div>
                      </div>
                      <div className="small-12 columns feature-container">
                        <div className="small-12 large-6 columns image-left">
                          <img className="feature-img js-application-home-benefits-2-img" src="/assets/img/marketing/2.jpg" alt="Feature2" />
                        </div>
                        <div className="small-12 large-6 columns feature-content">
                          <div className="feature-text">
                            <h5>Improve</h5>
                            <p>Lucas ipsum dolor sit amet maul dooku gamorrean kessel sith moff organa cade moff jango. Sidious lando solo dagobah ackbar calamari. Obi-wan hutt anakin organa tatooine moff mace. Solo greedo darth dagobah jabba coruscant dagobah organa wedge. </p>
                            <hr className="benefit-divider-2" />
                          </div>
                        </div>
                      </div>
                      <div className="small-12 columns feature-container">
                        <div className="small-12 large-6 columns feature-content left">
                          <div className="feature-text">
                            <h5>Experience</h5>
                            <p>Lucas ipsum dolor sit amet maul dooku gamorrean kessel sith moff organa cade moff jango. Sidious lando solo dagobah ackbar calamari. Obi-wan hutt anakin organa tatooine moff mace. Solo greedo darth dagobah jabba coruscant dagobah organa wedge. </p>
                            <hr className="benefit-divider-1" />
                          </div>
                        </div>
                        <div className="small-12 large-6 columns image-right">
                          <img className="feature-img js-application-home-benefits-3-img" src="/assets/img/marketing/3.jpg" alt="Feature3" />
                        </div>
                      </div>
                      <div className="small-12 columns feature-container">
                        <div className="small-12 large-6 columns image-left">
                          <img className="feature-img js-application-home-benefits-4-img" src="/assets/img/marketing/4.jpg" alt="Feature4" />
                        </div>
                        <div className="small-12 large-6 columns feature-content">
                          <div className="feature-text">
                            <h5>Easy to Share</h5>
                            <p>Share with people who don’t have a VR headset. Send them a mobile-compatible link and embed on your own web page.</p>
                            <hr className="benefit-divider-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>  

                





          </div>

          
      </div>
    // );
//   }
	)
}

export default Agents;


