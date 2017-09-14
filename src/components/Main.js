// import React, { Component } from "react";
import React from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router";
// import Navbar from "./common/Navbar";
// import Footer from "./common/Footer";
import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";

// Authentication imports
// import LoginForm from "./authentication/LoginForm";
// import Modal from "./common/CustomModal";

import Navbar from "./common/Navbar";

// require('./styles/Main.css');

// class Main extends Component {
// constructor(props){
//   super(props);

//   this.state={
// 	signInClicked:false
//   }
// }
// this.state = {
// 	signInClicked:false
// }

// handleAuth = (event) =>{
// 	event.preventDefault();
// 	console.log("inside handle auth");
// 	this.setState({signInClicked:true});

// 	// this.forceUpdate();
// }
const Main = props => {
	//   render() {
	return (
		<div className="application">
			{/* Helmet =========================================================*/}
			<Helmet>
            <title>VRooms - Virtual Reality for Real Estate</title>
			
				{/* customized script elements */}
				<script src="./js/drift.js" type="text/javascript" />

				{/* CSS links for this page */}
				<link rel="stylesheet" href="/css/pagestyle.css" />
				<link href="/css/pages/Main.css" rel="stylesheet" />
				<link rel="stylesheet" href="/css/panning.css" />
			</Helmet>

			<div className="wrapper">
				<video
					className="video-container video-container-overlay"
					id="video-background"
					autoPlay="true"
				>
					<source
						src="./assets/video/splashintro.mp4"
						type="video/mp4"
					/>
				</video>

				<Navbar
					logo_filename="VRooms_V11_Hori_Gray"
					theme="opaque-white-bg"
				/>

				<header
					className="header header--main js-header a-page"
					data-landing="yes"
					data-page="Home"
					data-page-name="Main"
				>
					<div className="description">
						<h1
							className="description__headline text--white emerge"
							data-duration="600"
							data-effect="slide"
							data-down="64px"
							data-hold="100"
						>
							Virtual Reality for Real Estate
						</h1>
						<span
							className="description__sub_headline text--white emerge"
							data-duration="600"
							data-effect="slide"
							data-down="64px"
							data-hold="100"
							data-continue="true"
						>
							Use VR to <strong>win</strong> more listings and{" "}
							<br />
							<strong>stay ahead</strong> of your competition
						</span>
					</div>
				</header>
			</div>
		</div>
	);
};
// }

export default Main;

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
