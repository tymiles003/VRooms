import React, {Component} from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
      <footer>
  
      <div className="footer-navigation">
        <div className="row">
          <div className="small-12 medium-12 large-10 medium-centered columns">
            <div className="medium-5 columns footer--column footer--row">
              <h5>Get VRooms</h5>
              <ul>
              <li><a id="ga-footer-about" href="/about">About</a></li>
                <li><a id="ga-footer-about" href="/agents">Agents</a></li>
                <li><a id="ga-footer-agent" href="/showcase">Showcase</a></li>
                <li><a id="ga-footer-signup" href="/signup">Get Started</a></li>
                <li><a id="ga-footer-signup" href="/gallery">Bonus</a></li>
              </ul>
            </div>
  
            <div className="medium-5 columns footer--column footer--row">
              <h5>Get in Touch</h5>
              <ul>
                <li><a id="ga-footer-contact" href="/contact">Contact</a></li>
                <li><a id="ga-footer-github" href="https://github.com/novialim/VRooms">Github</a></li>
                <ul className='footer-social'>
                  <li><a className="footer-facebook" target="_blank" href="#">Facebook</a></li>
                  <li><a className="footer-twitter" target="_blank" href="#">Twitter</a></li>
                </ul>
              </ul>
            </div>
  
          </div>
        </div>
      </div>
  
      <div className="footer-navigation text-center">
        <strong>©2017 VRooms, Inc.</strong> 
        <br />
        <div className="team-github">
          Made with love by <a target="_blank" href="https://github.com/novialim">Novia Lim</a>&nbsp;|&nbsp; 
          <a target="_blank" href="https://github.com/wayncheng">Wayne Cheng</a>&nbsp;|&nbsp; 
          <a target="_blank" href="https://github.com/jhuynh85">Joseph Huynh</a>&nbsp;|&nbsp; 
          <a target="_blank" href="https://github.com/aqupriyanka">Priyaka Arora</a>
        </div>
      </div>
    </footer>        
		)
	}
}
export default Footer;