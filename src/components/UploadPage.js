import React, { Component } from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import cookie from "react-cookies";
import axios from "axios";

import Navbar from "./common/Navbar";
import FileDrop from "./common/Forms/FileDrop";
import Btn from "./common/Elements/Btn";

import API from "../utils/API";
import propertyAPI from "../utils/propertyAPI";
import roomAPI from "../utils/roomAPI";
const s3API = require("../utils/s3API");

const ReactToastr = require("react-toastr");
const { ToastContainer } = ReactToastr; // This is a React Element.

let ToastMessageFactory = React.createFactory(
	ReactToastr.ToastMessage.animation
);

class UploadPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bits: "",
			fileStatus: "no-file"
		};
	}

	addAlert = this.addAlert.bind(this);
	clearAlert = this.clearAlert.bind(this);

	addAlert(message) {
		this.refs.container.success(message, `Success`, {
			timeOut: 3000,
			extendedTimeOut: 2000,
			closeButton: true
		});
	}

	clearAlert() {
		this.refs.container.clear();
	}

	handleFileUpload = fileDropState => {
		this.setState(fileDropState);
	};

	/**
	 * - Creates a new Property and Room document
	 * - Uploads image to S3 and saves link in Room document
	 */
	handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();

		let { agent, street, city, state, zip } = this.state;
		console.log("this.state", this.state);

		// Get signed request from express server and use it to upload to S3
		s3API.getSignedRequest(
			{
				fileName: this.state.fileName,
				data: this.state.bits
			},
			url => {
				// If upload successful then create new Property and Room
				if (url) {
					let property = {
						thumbnail_url: url,
						street: this.state.street,
						city: this.state.city,
						state: this.state.state,
						zip: this.state.zip,
						country: this.state.country,
						bedrooms: this.state.beds,
						baths: this.state.baths,
						built_year: this.state.year,
						price: this.state.price,
						square_feet: this.state.sqft
					};
					let room = {
						pano_url: url
					};
					let userID = cookie.load("userId");
					console.log("cookie userId: ", userID);
					console.log("property: ", property);
					// Add new property to signed-in user, then add new room
					// to the property that was just added
					propertyAPI.addNewProperty(
						userID,
						property,
						addedProperty => {
							console.log("addedProperty: ", addedProperty.data);
							roomAPI.addNewRoom(addedProperty.data._id, room);
							this.addAlert("File uploaded successfully");
						}
					);
				}
			}
		);
	};

	render() {
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
				<Navbar
					logo_filename="VRooms_V11_Hori_Gray"
					theme="opaque-white-bg"
				/>
				<main>
					{/* Page Title =====================================================*/}
					<header className="mini-header">
						<h1 className="headline">Upload Photos</h1>
					</header>

					{/* Form ===========================================================*/}
					{/* <div className="pg-contains-aframe"> */}
					<div>
						<ToastContainer
							toastMessageFactory={ToastMessageFactory}
							ref="container"
							className="toast-top-right"
						/>

						<form id="new-vroom-form" className="form ws-form">
							<div className="form-row stack-vertical">
								<FileDrop
									handleFileUpload={this.handleFileUpload}
									id="pano-upload"
								/>
							</div>
							<div className="form-row">
								<div className="col-wrap">
									<div className="form-col">
										<FileDrop
											handleThumbnail={
												this.handleThumbnail
											}
											id="thumbnail-upload"
										/>
									</div>
									<div className="form-col">
										<Btn
											text="Annotate"
											theme="disabled"
											classes={["ws-mini", "bump-top"]}
											isOutlined
										/>
										<button
											id="submit"
											className="ws-btn"
											type="submit"
											onClick={this.handleFormSubmit}
										>
											Submit
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
					{/*=================================================================*/}
				</main>
				{/*=================================================================*/}
			</div>
		);
	}
}

export default UploadPage;
