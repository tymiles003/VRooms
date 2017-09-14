import React from "react";
import Helmet from "react-helmet";
// import Navbar from "./common/Navbar";
// import Footer from "./common/Footer";
import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import Navbar from "./common/Navbar";
import NewVRoomForm from './common/Forms/NewVRoomForm';

const NewVRoom = (props) => {
	//   render() {
	return (
		<div className="pg-form pg-newVRoom">
			{/* Helmet =========================================================*/}
				<Helmet>
					<title>Create New VRoom</title>
					{/* customized script elements */}
					<script src="./js/drift.js" type="text/javascript" />

					{/* CSS links for this page */}
				</Helmet>
			{/* Navbar =========================================================*/}
				<Navbar logo_filename="VRooms_V11_Hori_Gray" theme="opaque-white-bg" />
			<main>
			{/* Page Title =====================================================*/}
				<header className="mini-header">
					<h1 className="headline">Create New VRoom</h1>
				</header>

			{/* Form ===========================================================*/}
				<NewVRoomForm />
			{/*=================================================================*/}
			</main>
			{/*=================================================================*/}
		</div>
	);
};

export default NewVRoom;
