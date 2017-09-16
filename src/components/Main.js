// import React, { Component } from "react";
import React from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router";
// import Navbar from "./common/Navbar";
// import Footer from "./common/Footer";
// import "aframe";
// import "aframe-animation-component";
// import "aframe-particle-system-component";
// import "babel-polyfill";

// Authentication imports
// import LoginForm from "./authentication/LoginForm";
// import Modal from "./common/CustomModal";
import Loader from "./common/Loader";
import MainContent from "./content/MainContent";

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
				<link rel="stylesheet" href="/css/loader.css" />
			</Helmet>

			{/* Good example of conditional loading, can use for user auth */}
			{/* <div>
				{ true && <Loader /> }
				{ false && <MainContent /> }
			</div> */}

			<Loader />
			<MainContent />
			
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
