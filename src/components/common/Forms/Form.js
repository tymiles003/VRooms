import React, { Component } from "react";
import API from "../utils/API";
import TextField from "./TextField";

class Form extends Component {
		state = {};

	handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();

		let { topic, startYear, endYear } = this.state;
	};

	render() {
		return (
			<form id="new-vroom-form" className="form ws-form">
				{/*=================================================================*/}
				<TextField 
					label="test label" 
					type="text"
					placeholder="placeholderrrrrr"
				/>
				{/*=================================================================*/}
			</form>
		);
	}
}

export default Form;
