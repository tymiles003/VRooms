import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from "../../../utils/API";
import Navbar from '../Navbar';
import Helmet from 'react-helmet';
// import Form from "../components/common/Forms/Form";

class NewVRoomForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			agent: "",
			street: "",
			city: "",
			state: "",
			zip: "",
			
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
				<form id="new-vroom-form" className="form ws-form">
					<fieldset>
						<legend>Address</legend>
						<div className="form-field-row">
							<div className="input-wrap input-full-width input-street">
								<input
									className="input ws-input"
									type="text"
									placeholder="Street"
									name="street"
									onChange={this.handleInputChange}
								/>
							</div>
						</div>
						<div className="form-field-row">
							<div className="input-wrap input-city">
								<input
									className="input ws-input"
									type="text"
									placeholder="City"
									name="city"
									onChange={this.handleInputChange}
								/>
							</div>
							<div className="input-wrap input-state">
								<input
									className="input ws-input"
									type="text"
									placeholder="State"
									name="state"
									onChange={this.handleInputChange}
								/>
							</div>
							<div className="input-wrap input-zip">
								<input
									className="input ws-input"
									type="text"
									placeholder="Zip"
									name="zip"
									onChange={this.handleInputChange}
								/>
							</div>
						</div>
					</fieldset>
				</form>
		)
	}
}

export default NewVRoomForm;
