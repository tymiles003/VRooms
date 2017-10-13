import React from "react";
import Helmet from "react-helmet";
// import Navbar from "./common/Navbar";
// import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import NewVRoomForm from './common/Forms/NewVRoomForm';

const NewVRoom = (props) => {
	//   render() {
	return (
		<div className="pg-form pg-newVRoom ws-root">
		<div className="pageWrapper">
			
			{/* Helmet =========================================================*/}
				<Helmet>
					<title>Create New VRoom</title>
					{/* customized script elements */}
					<script src="./js/drift.js" type="text/javascript" />

					{/* CSS links for this page */}
				</Helmet>
			{/* Navbar =========================================================*/}
				<Navbar logo_filename="vrooms-logo-gray" theme="opaque-white-bg" />
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
		</div>
	);
};

export default NewVRoom;
