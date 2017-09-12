import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
<div className={"nav-container "+ props.theme}>
	<div className="navigation navigation--main">
		<div className="navigation-wrapper">
			<Link to="/" className="navigation__logo-link emerge" data-duration="600" data-effect="slide" data-right="64px"  >
				<img className="navigation__logo" width="220" src={"/assets/img/logo/"+props.logo_filename+".png"} alt="VRooms" /> 
			</Link>
			<div className="navigation-mobile js-open-menu">
				<div className="navigation-mobile__icon js-open-menu-btn"></div>
			</div>
			<nav className="navigation-menu emerge" data-duration="600" data-effect="slide" data-left="64px">
					<Link to="/about" className="navigation-menu__link ">About</Link>
					<Link to="/agents" className="navigation-menu__link ">Agents</Link>
					<Link to="/showcase" className="navigation-menu__link ">Showcase</Link>
					<Link to="/contact" className="navigation-menu__link ">Contact Us</Link>

					<Link rel="signup" to="/signup" className="navigation-menu__link navigation-menu__link--hidden navigation-menu__link--lng a-signup">sign up</Link>
					<Link data-auth="no" to="/login" className="navigation-menu__sign_in a-login">sign in</Link>
			</nav>
		</div>
	</div>
	<div className="mobile-menu js-mobile-menu">
			<Link to="/about" className="mobile-menu__link text--white text--bold a-submenu" data-page-name="Agents">About</Link>
			<Link to="/agents" className="mobile-menu__link text--white text--bold a-submenu" data-page-name="Agents">Agents</Link>
			<Link to="/showcase" className="mobile-menu__link text--white text--bold ">Showcase</Link>
			<Link to="/contact" className="mobile-menu__link text--white text--bold ">Contact us</Link>

		<div className="mobile-menu-btn-wrapper">
				<Link data-auth="no" to="https://watch.appfollow.io?ref=github.com" className="mobile-menu__btn navigation-menu__sign_in a-login">sign in</Link>
		</div>
	</div>
</div>
);

export default Navbar;
