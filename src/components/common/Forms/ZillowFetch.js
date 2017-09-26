import React, {Component} from 'react';
import API from "../../../utils/API";

class ZillowFetch extends Component {
	constructor(props){
		super(props);
		this.state={
			zpid: '',
			query_type: 'invalid',
		}
		// Working ZPID if needed for test -- 48749425
	}
	detectQueryType = e => {

		e.preventDefault();
		const{ value, name } = e.target;
		console.log(name, value);

		this.setState({ fetch_query : value });

		// let isZPID = false;
		let zpid = '';
		let query_type = 'invalid';
		
		let query = value;
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
		this.setState({ zpid, query_type })
		this.props.port({zpid,query_type})
	}
	
	handleFetch = event => {
		event.preventDefault();
		// const query = event.target.value.trim();
		let { zpid, query_type } = this.state;
		let query = zpid;

		// Proceed to API call as long as not invalid
		if (query_type !== 'invalid') {
			console.log('>>> Calling Zillow API...');
			API.fetchListing(query)
			.then(res => {
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
				// this.setState(stateData);
				this.props.port(stateData);
			})
		}
	}


	render(){
		return(
			<div className="form-group">
				<div className="input-wrap input-full-width input-fetch ws-input-wrap">
					<label className="legend"> Fetch Property Data from Zillow (beta)</label>
					<input
						id="fetch_query"
						className="input ws-input"
						type="text"
						name="fetch_query"
						placeholder="Zillow URL or Property ID"
						value={this.state.zpid}
						onChange={this.detectQueryType}
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
		)
	}
}

export default ZillowFetch;