import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from "../../../utils/API";
import Btn from '../Elements/Btn';
import cookie from "react-cookies";
import axios from "axios";

import propertyAPI from "../../../utils/propertyAPI"; 
// const s3API = require ("../../../utils/s3API");

class AnnotationForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			roomID: '',
			xAxis: '',
			yAxis: '',
			zAxis: '',
			label: '',
			text: '',
		};
	}

	

	handleInputChange = event => {
		event.preventDefault();
		// const value = event.target.value;
		// const name = event.target.name;
		let { name, value } = event.target;
		console.log(name, value);

		this.setState({ [name]: value });
	}

	// Add new annotation or portal
	handleAdd = event => {
		event.preventDefault();
		// Send state up to AnnotationPage
		this.props.port(this.state);
	}



	render(){
		return(

			<form id="new-vroom-form" className="form ws-form">
					{/* <section className="form-row"> */}
					{/* <fieldset> */}
							{/* <legend>Add Annotation</legend> */}
			
							<div className="form-field-row">
								<div className="input-wrap input-x prefixed">
									<label htmlFor="xAxis" className="input-label-sib prefix-label"> X: </label>
									<input
										id="xAxis"
										className="input ws-input"
										type="text"
										name="xAxis"
										placeholder="X"
										value={this.state.xAxis}
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="input-wrap input-y prefixed">
								<label htmlFor="yAxis" className="input-label-sib prefix-label"> Y: </label>
									<input
										id="yAxis"
										className="input ws-input"
										type="text"
										name="yAxis"
										placeholder="Y"
										value={this.state.yAxis}
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="input-wrap input-z prefixed">
								<label htmlFor="zAxis" className="input-label-sib prefix-label"> Z: </label>
									<input
										id="zAxis"
										className="input ws-input"
										type="text"
										name="zAxis"
										placeholder="Z"
										value={this.state.zAxis}
										onChange={this.handleInputChange}
									/>
								</div>
							</div>
							{/* <div className="form-field-row"> */}
								<div className="input-wrap input-label">
									<label htmlFor="label" className="input-label-sib"></label>
									<input
										id="label"
										className="input ws-input"
										type="text"
										name="label"
										placeholder="Label"
										value={this.state.label}
										onChange={this.handleInputChange}
									/>
									
								</div>
							{/* </div> */}
							{/* <div className="form-field-row"> */}
								<div className="input-wrap input-text">
									<label htmlFor="text" className="input-label-sib"></label>
									<input
										id="text"
										className="input ws-input"
										type="text"
										name="text"
										placeholder="Text"
										value={this.state.text}
										onChange={this.handleInputChange}
									/>
								</div>
							{/* </div> */}
						{/* </fieldset> */}
						{/* </section> */}
						{/* <section className="form-row"> */}
							{/* <Btn 
								id="add-annotation" 
								theme="primary"
								text="Add Annotation"
								onClick={this.handleAdd}
								/> */}
						{/* </section> */}
						</form>
		)
	}
}

export default AnnotationForm;