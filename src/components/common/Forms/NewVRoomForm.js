import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from "../../../utils/API";
import FileDrop from './FileDrop';
// import FileUpload from './FileUpload';
import FormInput from './FormInput';

class NewVRoomForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			agent: "James Bond",

			street: "",
			city: "",
			state: "",
			zip: "",

			beds: "",
			baths: "",
			year: "",
			sqft: "",
			price: "",

			query_type: 'invalid',
			zpid: '48749425',
			zillow_url: 'https://www.zillow.com/homedetails/17111-El-Vuelo-Rancho-Santa-Fe-CA-92067/16732045_zpid/?fullpage=true',
			fetch_query: '',

			bits: '',
			fileStatus: 'no-file',

			extracted_input: '',
		};
	}
	
	handleXChange = (name,value) => {
		console.log('inputValue',value);
		this.setState({
			[name]: value
		})
	}

	handleFileUpload = (bits) => {
		this.setState({
			bits: bits,
			fileStatus: 'photo-ready'
		})
	}

	handleInputChange = event => {
		event.preventDefault();
		const value = event.target.value;
		const name = event.target.name;
		console.log(name, value);

		if (name === 'fetch_query') {
			this.detectQueryType(value.trim())
		}
		else {
			this.setState({
				[name]: value
			});
		}
	}

	detectQueryType = (query) => {
		// let isZPID = false;
		let zpid = '';
		let query_type = 'invalid';
		
		let isNumber = (query) => {
			let parsed = parseInt(query);
			return isNaN(parsed);
		}
		let notOnlyDigits = isNumber(query);

		// Check if it is a zpid
		// zpid should have 8 characters.
		if (query.length === 8 && !notOnlyDigits) { 
			console.log('---> Zillow Property ID detected');

			// Set the zpid default assuming valid (changed later if invalid)
			zpid = query;
			query_type = 'zpid';
		}
		else if (query.indexOf('zillow.com') >= 0) {
			console.log('--> Zillow URL detected');
			let splitURL = query.split('/');
			let zpid_part_url = splitURL.filter(ea => ea.indexOf('_zpid') >= 0 )[0];

			zpid = zpid_part_url.substring(0,zpid_part_url.length-5);
			query_type = 'zillow_url';
			console.log('>>> Extracted zpid...',zpid);
		}
		else if (query.length === 0) {
			console.log('--> Empty Query');
		}
		else {
			return console.log('--> Invalid/Unrecognized Query Type (!)');
		}
		
		// If invalid query type, zpid is empty string & query_type is invalid
		this.setState({
			zpid: zpid,
			query_type: query_type,
		})
	}
	
	handleFetch = event => {
		event.preventDefault();
		// const query = event.target.value.trim();
		let {zpid, query_type} = this.state;
		let query = zpid;

		// Proceed to API call as long as not invalid
		if (query_type !== 'invalid') {
			console.log('>>> Calling Zillow API...');
			API.fetchListing(query)
			.then((res) => {
				console.log('... API fetchListing response received');
				let r = res.data;
				console.log('--> API Response',r);
				let address = r.address[0];
				let info = r.editedFacts[0];
				let stateData = {
					street: address.street[0],
					city: address.city[0],
					state: address.state[0],
					zip: address.zipcode[0],
					beds: info.bedrooms[0],
					baths: info.bathrooms[0],
					sqft: info.finishedSqFt[0],
					year: info.yearBuilt[0],
					rooms: info.rooms[0],
					links: r.links[0],
				}
				this.setState(stateData);
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
						<FormInput 
							name='extracted_input'
							value={this.state.extracted_input}
							onXChange={this.handleXChange}
						/>
					</div>
					<div className="form-row">
						<div className="input-wrap input-full-width input-fetch ws-input-wrap">
							{/* <label for="street">Street</label> */}
							<label className="legend"> Fetch Property Data from Zillow (beta)</label>
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
							>
							Fetch
							</button>
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
										value={this.state.street}
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
										value={this.state.city}
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="input-wrap input-state error">
									<input
										id="state"
										className="input ws-input"
										type="text"
										name="state"
										placeholder="State"
										value={this.state.state}
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="input-wrap input-zip">
									<input
										id="zip"
										className="input ws-input"
										type="text"
										name="zip"
										placeholder="Zip"
										value={this.state.zip}
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
										value={this.state.beds}
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
										value={this.state.baths}
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
										value={this.state.year}
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
										value={this.state.price}
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
										value={this.state.sqft}
										onChange={this.handleInputChange}
									/>
								</div>
							</div>
						</fieldset>
					</div>
					<div className="form-row">
						<FileDrop />
						{/* <FileUpload onDrop={this.handleFileUpload} /> */}
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
			</div>
		)
	}
}

export default NewVRoomForm;
