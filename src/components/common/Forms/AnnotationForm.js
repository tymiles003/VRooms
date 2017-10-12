import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from "../../../utils/API";
import Btn from '../Elements/Btn';
import cookie from "react-cookies";
import axios from "axios";
// import Switch from 'react-toggle-switch';
import Toggle from 'react-toggle';

import propertyAPI from "../../../utils/propertyAPI"; 
import roomAPI from "../../../utils/roomAPI"; 
// const s3API = require ("../../../utils/s3API");

class AnnotationForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			label: '',
			text: '',
			toggled: false,
		};
	}
// componentWillReceiveProps =======================
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
// handleToggle ====================================
	handleToggle = (event) => {
		event.preventDefault();
		let prevState = this.state.toggled;
		let newState = true;
		if (prevState) {
			newState = false;
		}
		console.log('prevState',prevState);
		console.log('newState',newState);

		this.setState({
			toggled: newState
		});

		this.props.port({
			toggled: newState
		})
	};
// handleDropdown ====================================
	handleDropdown = (event) => {
		event.preventDefault();
		
	};
// handleInputChange ===============================
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
// render //////////////////////////////////////////
	render(){
		return(

			<form id="new-annotation-form" className="form ws-form">
				<div 
					className={"toggle-wrap toggled-" + this.state.toggled}
				>
					{/* <Switch onClick={this.toggleSwitch} on={this.state.toggled}/> */}
					<label htmlFor='toggle-anno-type'>Text</label>
					<Toggle
						id='toggle-anno-type'
						checked={this.state.toggled}
						onChange={this.handleToggle} 
						icons={false}
					/>
					<label htmlFor='toggle-anno-type'>Portal</label>
				</div>

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
							
							{this.state.toggled && (

								<div className="input-wrap input-portal">
										{/* <input
											id="portal"
											className="input ws-input"
											type="button"
											name="portal"
											placeholder="Portal"
											value={this.state.portal}
											onChange={this.handleInputChange}
										/> */}
										<a
											href="#"
											id="portal-dropdown-trigger"
											className="input ws-input input-btn"
											text="Portal"
											onClick={this.handleDropdown}
										> 
										Select Destination 
										</a>
									</div>

							)}
							{!this.state.toggled && (
								<div className={"input-wrap input-text "}>
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
							)}

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
