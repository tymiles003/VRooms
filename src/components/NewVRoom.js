import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from "../utils/API";
import Navbar from './common/Navbar';
import MobileMenu from './common/MobileMenu';
// import Form from "../components/common/Forms/Form";

class NewVRoom extends Component {
	constructor(props){
		super(props);
		this.state = {
			agent: "",
			address: {
				street: "",
				street2: "",
				city: "",
				state: "",
				zip: ""
			}
		};
	}
		
	handleInputChange = event => {
		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();

		let { topic, startYear, endYear } = this.state;
	};

	render() {
		return (
			<div className="pg-form pg-newVRoom">
			{/* Navbar =========================================================*/}
				<Navbar
					logo_filename="VRooms_V11_Hori_Gray"
					theme="white-bg"
					handleAuth={this.handleAuth}
				/>
				{this.state.signInClicked ? (
					<Modal
						ref={node => {
							this.modal = node;
						}}
						modalIsOpen={true}
					/>
				) : null}
				<MobileMenu />
			<main>
			{/* Page Title =====================================================*/}
					<header className="mini-header">
						<h1 className="headline">Create New VRoom</h1>
					</header>

			{/* Form ===========================================================*/}
				<form id="new-vroom-form" className="form ws-form">
					<fieldset>
						<legend>Address</legend>
						<div className="form-field">
							<div className="input-wrap">
								<input
									className="input ws-input"
									type="text"
									placeholder="Address"
									onChange={this.handleInputChange}
								/>
							</div>
							{/* <p className="form-field-notification fineprint">
							{this.fieldNotification}
						</p> */}
						</div>
					</fieldset>
				</form>
			{/*=================================================================*/}
			</main>
			{/*=================================================================*/}
			</div>
		);
	}
}

export default NewVRoom;
