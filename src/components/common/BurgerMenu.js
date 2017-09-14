import React, {Component} from "react";
import { Link } from "react-router-dom";

// Authentication Imports
import Modal from "../common/CustomModal";
import LoginForm from "../authentication/LoginForm";

// const Navbar = (this.props) => (
class BurgerMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signInClicked: false,
		}
	}

	handleAuth = (event) =>{
		event.preventDefault();
		console.log("inside handle auth");
		this.setState({signInClicked:true});
		// this.forceUpdate();
	}

	render() {
		return (
		<div className="mobile-menu js-mobile-menu">
			<a href="/about" className="mobile-menu__link text--white text--bold a-submenu" data-page-name="Agents">About</a>
			<a href="/agents" className="mobile-menu__link text--white text--bold a-submenu" data-page-name="Agents">Agents</a>
			<a href="/showcase" className="mobile-menu__link text--white text--bold ">Showcase</a>
			<a href="/contact" className="mobile-menu__link text--white text--bold ">Contact us</a>
		
			<div className="mobile-menu-btn-wrapper">
				<a data-auth="no" href="/login" className="mobile-menu__btn navigation-menu__sign_in a-login">sign in</a>
			</div>
		 </div>
		)
	}
}
export default BurgerMenu;
