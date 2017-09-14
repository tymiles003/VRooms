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

	handleScrape = event => {
		const zillow_url = event.target.value.trim();
		
	}

	handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();

		let { agent, street, city, state, zip } = this.state;
		console.log('this.state',this.state);
	};

	render() {
		return (
			<div>
				<form id="new-vroom-form" className="form ws-form">
					<div className="form-row">
						<div className="input-wrap input-full-width input-street ws-input-wrap">
							{/* <label for="street">Street</label> */}
							<input
								id="zillow_url"
								className="input ws-input"
								type="text"
								name="zillow_url"
								placeholder="Zillow URL"
								onChange={this.handleScrape}
							/>
						</div>
					</div>
					<div className="form-row">
						<fieldset>
							<legend>Address</legend>
							<div className="form-field-row">
								<div className="input-wrap input-full-width input-street ws-input-wrap">
									{/* <label for="street">Street</label> */}
									<input
										id="street"
										className="input ws-input"
										type="text"
										name="street"
										placeholder="Street"
										onChange={this.handleInputChange}
									/>
								</div>
							</div>
							<div className="form-field-row">
								<div className="input-wrap input-city validated">
									{/* <label for="city">City</label> */}
									<input
										id="city"
										className="input ws-input"
										type="text"
										name="city"
										placeholder="City"
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="input-wrap input-state error">
									{/* <label for="state">State</label> */}
									<input
										id="state"
										className="input ws-input"
										type="text"
										name="state"
										placeholder="State"
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="input-wrap input-zip">
									{/* <label for="zip">Zip</label> */}
									<input
										id="zip"
										className="input ws-input"
										type="text"
										name="zip"
										placeholder="Zip"
										onChange={this.handleInputChange}
									/>
								</div>
							</div>
						</fieldset>
					</div>
					<div className="form-row">
						<button
							id="submit"
							className="ws-btn"
							type="submit"
							onClick={this.handleFormSubmit}
						>
						Submit
						</button>
					</div>
				</form>
				{/* <form className="naked-form">
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
									className="input ws-input validated"
									type="text"
									placeholder="City"
									name="city"
									onChange={this.handleInputChange}
								/>
							</div>
							<div className="input-wrap input-state">
								<input
									className="input ws-input error"
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
				</form> */}
			</div>
		)
	}
}

export default NewVRoomForm;
