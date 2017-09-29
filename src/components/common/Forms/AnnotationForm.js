import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from "../../../utils/API";
import Btn from '../Elements/Btn';
import cookie from "react-cookies";
import axios from "axios";

import propertyAPI from "../../../utils/propertyAPI"; 
import roomAPI from "../../../utils/roomAPI"; 
// const s3API = require ("../../../utils/s3API");

class AnnotationForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			label: '',
			text: '',
		};
	}

	componentWillReceiveProps = (nextProps) => {
		// let { inCreationMode, mode, submitted } = nextProps;

		// this.setState({
		// 	inCreationMode,
		// 	mode,
		// 	submitted,
		// })

		// When exiting creation mode, clear inputs and update
		// inCreationMode in form state.
		if ( !nextProps.inCreationMode && this.props.inCreationMode ) {
			this.setState({
				label: '',
				text: '',
				inCreationMode: false,
			})
		}

		// if ( nextProps.mode == 'gathering' && !nextProps.formConfirmed ) {
		// 	this.props.port({
		// 		label: this.state.label,
		// 		text: this.state.text,
		// 		formConfirmed: true,
		// 	});
		// }
	}	

	handleInputChange = event => {
		event.preventDefault();
		// const value = event.target.value;
		// const name = event.target.name;
		let { name, value } = event.target;
		// console.log(name, value);
		// let isLink = false;

		let newState = {
			[name]: value,
		}
		
	

		this.setState( newState )
		this.props.port( newState )


		// Update this state -----------------
		// this.setState(newState);
		
		// Lift state up to Page -------------
		// this.props.port(newState)

	}

	// submitAnnotation = event => {
	// 	event.preventDefault();

	// 	this.setState({ mode: 'submitted' })
	// 	// console.log('this.state',this.state);

	// 	// Send state up to AnnotationPage
	// 	this.props.port({
	// 		label: this.state.label,
	// 		text: this.state.text,
	// 		mode: 'submitted',
	// 		inCreationMode: false,
	// 	});
	// }



	render(){
		return(

			<form id="new-annotation-form" className="form ws-form">

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


						{/* <Btn
							id="submit-annotation"
							href="#!"
							theme="primary"
							onClick={this.submitAnnotation}
							text="Submit"
						/> */}
			</form>
		)
	}
}

export default AnnotationForm;

					// {/* <section className="form-row"> */}
					// {/* <fieldset> */}
					// 		{/* <legend>Add Annotation</legend> */}
							// {/* <div className="form-field-row">
							// 	<div className="input-wrap input-x prefixed">
							// 		<label htmlFor="xAxis" className="input-label-sib prefix-label"> X: </label>
							// 		<input
							// 			id="xAxis"
							// 			className="input ws-input"
							// 			type="text"
							// 			name="xAxis"
							// 			placeholder="X"
							// 			value={this.state.xAxis}
							// 			onChange={this.handleInputChange}
							// 		/>
							// 	</div>
							// 	<div className="input-wrap input-y prefixed">
							// 	<label htmlFor="yAxis" className="input-label-sib prefix-label"> Y: </label>
							// 		<input
							// 			id="yAxis"
							// 			className="input ws-input"
							// 			type="text"
							// 			name="yAxis"
							// 			placeholder="Y"
							// 			value={this.state.yAxis}
							// 			onChange={this.handleInputChange}
							// 		/>
							// 	</div>
							// 	<div className="input-wrap input-z prefixed">
							// 	<label htmlFor="zAxis" className="input-label-sib prefix-label"> Z: </label>
							// 		<input
							// 			id="zAxis"
							// 			className="input ws-input"
							// 			type="text"
							// 			name="zAxis"
							// 			placeholder="Z"
							// 			value={this.state.zAxis}
							// 			onChange={this.handleInputChange}
							// 		/>
							// 	</div>
							// </div> */}
						// 							{/* </fieldset> */}
						// {/* </section> */}
						// {/* <section className="form-row"> */}