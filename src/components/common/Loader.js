import React, {Component} from "react";
import { Link } from "react-router-dom";

// const Navbar = (this.props) => (
class Loader extends Component {
	constructor(props) {
		super(props);

    }
    
	// componentDidMount(){
    //     const ele = document.getElementById('ipl-progress-indicator')
    //     if(ele){
    //       setTimeout(() => {
    //         ele.classList.add('available')
    //         setTimeout(() => {
    //           ele.outerHTML = ''
    //         }, 2000)
    //       }, 1000)
    //     }
    // }

	render() {

		return (
            <div className="ipl-progress-indicator" id="ipl-progress-indicator">
                <div className="ipl-progress-indicator-head">
                    <div className="first-indicator"></div>
                    <div className="second-indicator"></div>
                </div>
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
                </svg>
            </div>
		)
	}
}
export default Loader;
