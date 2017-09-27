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
            <div className="how-wrapper">
              <div id="how-landscape"></div>
              <div id="how-portrait">                
              </div>
            </div>
		)
	}
}
export default AboutContent;

 // <img className="float-center howto-img" src="/assets/img/marketing/vroomsguide.jpg" alt="How to VRooms" />  
 // <img src="/assets/img/marketing/vroomsguideportrait.jpg" style="visibility: hidden;" />  