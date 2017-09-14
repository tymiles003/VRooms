import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from "../../../utils/API";
import FileDrop from './FileDrop';

class NewVRoomForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			agent: "",
			street: "",
			city: "",
			state: "",
			zip: "",
			query_type: 'invalid',
			zpid: '16732045',
			zillow_url: 'https://www.zillow.com/homedetails/17111-El-Vuelo-Rancho-Santa-Fe-CA-92067/16732045_zpid/?fullpage=true',
			fetch_query: "https://www.zillow.com/homedetails/17111-El-Vuelo-Rancho-Santa-Fe-CA-92067/16732045_zpid/?fullpage=true",
		};
	}
	
	handleInputChange = event => {
		event.preventDefault();
		const value = event.target.value;
		const name = event.target.name;
		console.log(name, value);

		if (name === 'fetch_query') {
			this.detectQueryType(value.trim())
		}
		this.setState({
			[name]: value
		});
	}

	detectQueryType = (query) => {
		// let isZPID = false;
		let zpid = '';
		let query_type = 'invalid';
		
		let isNumber = (query) => {
			let parsed = parseInt(query);
			console.log('parsed',parsed);
			console.log('typeof parsed',typeof parsed);
			return isNaN(parsed);
		}
		let notOnlyDigits = isNumber(query);
		console.log('notOnlyDigits',notOnlyDigits);

		// Check if it is a zpid
		// zpid should have 8 characters.
		if (query.length === 8 && !notOnlyDigits) { 
			console.log('--- Zillow Property ID detected ---');

			// Set the zpid default assuming valid (changed later if invalid)
			zpid = query;
			query_type = 'zpid';
			
			// for (let i=0; i<query.length; i++) {
			// 	let letter = query[i];
			// 	if ('1234567890'.indexOf(letter) === -1) {
			// 		// return false;
			// 		isZPID = false;
			// 		zpid = '';
			// 	}
			// }
		}
		else if (query.indexOf('zillow.com') >= 0) {
			console.log('--- Zillow URL detected ---');
			let splitURL = query.split('/');
			let zpid_part_url = splitURL.filter(ea => ea.indexOf('_zpid') >= 0 )[0];

			zpid = zpid_part_url.substring(0,zpid_part_url.length-5);
			query_type = 'zillow_url';
			console.log('>>> Extracted zpid...',zpid);
			
			// console.log('>>> Calling Zillow API...');
			// API.fetchListing(query)
			// .then((res) => {
				// 	console.log('>>> API fetchListing response received...');
				// 	console.log('res',res);
			// })
		}
		else {
			console.log('>>> Invalid/Unrecognized Query Type (!)');
		}
		
		// If invalid query type, zpid is empty string & query_type is invalid
		this.setState({
			zpid: parseInt(zpid),
			query_type: query_type,
		})
	}
	
	handleFetch = event => {
		event.preventDefault();
		// const query = event.target.value.trim();
		let query = this.state.fetch_query.trim();
		// let isZPID = this.detectQueryType(query);
		// Query Validation
		if (this.state.query_type !== 'invalid') {
			console.log('>>> Calling Zillow API...');
			API.fetchListing(query)
			.then((res) => {
				console.log('... API fetchListing response received');
				// console.log('res',res);
				let apiResponse = res.data;
				console.log('--> API Response',apiResponse);
			})
		}
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
							<label className="legend"> Fetch Property Data from Zillow </label>
							<input
								id="fetch_query"
								className="input ws-input"
								type="text"
								name="fetch_query"
								placeholder="Zillow URL or Property ID"
								value={this.state.zpid}
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
									<input
										id="baths"
										className="input ws-input"
										type="text"
										name="baths"
										placeholder="Baths"
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="input-wrap input-year">
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
							<div className="form-field-row">
								<div className="input-wrap input-price icon-prefix">
									<i className="fa fa-usd"></i>
									<input
										id="price"
										className="input ws-input"
										type="text"
										name="price"
										placeholder="Price"
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="input-wrap input-sqft">
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
						</fieldset>
					</div>
					<div className="form-row">
						{/* <div className="input-wrap input-photo">
							<label className="legend"> Upload 360 Photo </label>
								<input
									id="photo"
									className="input ws-input"
									type="file"
									name="photo"
									accept="image/*"
									onChange={this.handleInputChange}
								/>
						</div> */}
						<FileDrop />
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
