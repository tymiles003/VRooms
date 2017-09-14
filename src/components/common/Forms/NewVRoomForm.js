import React, { Component } from "react";
import ReactDOM from 'react-dom';
// Scraping imports
// import axios from 'axios';
// import cheerio from 'cheerio';
import API from "../../../utils/API";
import Helmet from 'react-helmet';

class NewVRoomForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			agent: "",
			street: "",
			city: "",
			state: "",
			zip: "",
			isZPID: false,
			fetch_query: "https://www.zillow.com/homedetails/17111-El-Vuelo-Rancho-Santa-Fe-CA-92067/16732045_zpid/?fullpage=true",
		};
	}
		
	handleInputChange = event => {
		event.preventDefault();
		const value = event.target.value;
		const name = event.target.name;
		console.log(name, value);

		if (name === 'fetch_query') {
			this.detectZPID(value.trim())
		}
		this.setState({
			[name]: value
		});
	}

	detectZPID = (query) => {
		let isZPID = true;
		// Automatically invalid if not right length
		if (query.length !== 8) {
			isZPID = false;
		}
		else {
			for (let i=0; i<query.length; i++) {
				let letter = query[i];
				if ('1234567890'.indexOf(letter) === -1) {
					// return false;
					isZPID = false;
				}
			}
		}
		
		this.setState({
			isZPID: isZPID
		})
		console.log('>>> detecting ZPID...', isZPID);
		// console.log('...',isZPID);
	}
	
	handleFetch = event => {
		event.preventDefault();
		// const query = event.target.value.trim();
		let query = this.state.fetch_query.trim();
		// let isZPID = this.detectZPID(query);
		// Basic validation
		if (query.length === 0) {
			return;
		}
		else if (this.state.isZPID) {
			console.log('>>> Zillow Property ID detected...', query);

		}
		else if (query.indexOf('zillow.com') >= 0) {
			console.log('>>> Zillow URL detected...');
			let splitURL = query.split('/');
			let zpid_part_url = splitURL.filter(ea => ea.indexOf('_zpid') >= 0 )[0];
			const zpid = zpid_part_url.substring(0,zpid_part_url.length-5);
			console.log('Extracted zpid...',zpid);
			console.log('>>> Calling Zillow API');
			API.fetchListing(query)
			.then((res) => {
				console.log('>>> API fetchListing response received...');
				console.log('res',res);
			})
		}
		// else {
		// 	let scrapeData = {
		// 		agent: "",
		// 		street: "",
		// 		city: "",
		// 		state: "",
		// 		zip: "",
		// 	}
		// 	API.scrapeZillow(query)
		// 	.then( (res) => {
		// 		console.log('res',res);
		// 	})
		// }
	}

	handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();

		let { agent, street, city, state, zip } = this.state;
		console.log('this.state',this.state);
	}

	render() {
		return (
			<div>
				<form id="new-vroom-form" className="form ws-form">
					<div className="form-row">
						<div className="input-wrap input-full-width input-street ws-input-wrap">
							{/* <label for="street">Street</label> */}
							<input
								id="fetch_query"
								className="input ws-input"
								type="text"
								name="fetch_query"
								placeholder="Zillow URL or Property ID"
								onChange={this.handleInputChange}
							/>
						</div>
							<button
								className="ws-btn ws-btn-mini"
								type="button"
								onClick={this.handleFetch}
							>Fetch</button>
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
						<fieldset>
							<legend>Property Info</legend>
			
							<div className="form-field-row">
								<div className="input-wrap input-beds">
									{/* <label for="city">City</label> */}
									<input
										id="beds"
										className="input ws-input"
										type="text"
										name="beds"
										placeholder="Beds"
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="input-wrap input-baths">
									{/* <label for="state">State</label> */}
									<input
										id="baths"
										className="input ws-input"
										type="text"
										name="baths"
										placeholder="Baths"
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="input-wrap input-sqft">
									{/* <label for="zip">Zip</label> */}
									<input
										id="sqft"
										className="input ws-input"
										type="text"
										name="sqft"
										placeholder="Square Feet"
										onChange={this.handleInputChange}
									/>
								</div>
							</div>
							<div className="form-field-row">
								<div className="input-wrap input-price">
									{/* <label for="city">City</label> */}
									<input
										id="price"
										className="input ws-input"
										type="text"
										name="price"
										placeholder="Asking Price"
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="input-wrap input-year">
									{/* <label for="state">State</label> */}
									<input
										id="year"
										className="input ws-input"
										type="text"
										name="year"
										placeholder="Year"
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
