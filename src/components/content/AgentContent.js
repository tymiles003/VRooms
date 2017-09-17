import React, {Component} from "react";
import { Link } from "react-router-dom";

// const Navbar = (this.props) => (
class AboutContent extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
        const ele = document.getElementById('ipl-progress-indicator')
        if(ele){
          setTimeout(() => {
            ele.classList.add('available')
            setTimeout(() => {
              ele.outerHTML = ''
            }, 1000)
          }, 500)
		}
    }

	render() {

		return (
            <div className="marketing">
                  <section className="section-features" id="application-home-benefits">
                    <div className="row expanded text--black">
                      <div className="small-centered small-12 columns">
                        <h1>Stand Out, Win More Listings and be the Market Leader </h1>
                      </div>
                      
                      <div className="small-12 columns feature-container">
                        <div className="small-12 large-6 columns feature-content left">
                          <div className="feature-text">
                            <h3>Experience</h3>
                            <h5>Get ahead of the game. Revolutionize the homebuying process, provide your clients an immersive experience and make your listing more engaging. </h5>
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
                            <h3>Easy to Share</h3>
                            <h5>Share with people who don’t have a VR headset. Send them a mobile-compatible link and embed on your own web page.</h5>
                            <hr className="benefit-divider-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
		)
	}
}
export default AboutContent;