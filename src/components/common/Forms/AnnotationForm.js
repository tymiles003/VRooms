import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from "../../../utils/API";
import Btn from '../Elements/Btn';
import cookie from "react-cookies";
import axios from "axios";
// import Switch from 'react-toggle-switch';
import Toggle from 'react-toggle';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

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
			roomArray: [],
		};
	}
// componentWillReceiveProps =======================
	componentWillReceiveProps = (nextProps) => {

		// When exiting creation mode, clear inputs and update
		// inCreationMode in form state.
		if ( !nextProps.inCreationMode && this.props.inCreationMode ) {
			this.setState({
				label: '',
				text: '',
				inCreationMode: false,
			})
		}

		if ( nextProps.roomArray.length > 0 ) {
			this.setState({
				roomArray: nextProps.roomArray
			})
		}
	}	
// handleToggle ====================================
	handleToggle = (event) => {
		event.preventDefault();
		let prevState = this.state.toggled;
		let newState = true;
		if (prevState) {
			newState = false;
		}
		// console.log('prevState',prevState);
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
// handleSelect ====================================
	handleSelect = (event) => {
		// console.log('---- handleSelect --->');
		const ei = event.item;
		// console.log('ei',ei);

		let { id, children } = ei.props;
		// console.log('id',id);
		// console.log('children',children);
		// const et = event.target;
		// let id = et.getAttribute('id');
		// let text = et.innerHTML;
		// console.log('id',id);
		// console.log('text',text);

		this.setState({
			destinationName: children,
			destinationID: id,
		})
	}
// handleVisibleChange
	handleVisibleChange = (visible) => {
		// console.log(visible);
	}
// componentDidMount ===============================
	
// Dropdown Menu ===================================
	dropdownMenu(roomArr){
		// console.log('roomArr',roomArr);
		// let dataArr = roomArr.slice(0,5);

		return (
			<Menu onSelect={this.handleSelect}>
				{roomArr.map( (room,index) => {
					// let split = room.pano_url.split('/');
					// let file = split[split.length - 1];
					// let filename = file.substring(0,file.length-4);
					// console.log('file',file);
					
					// Temporary text since there aren't any room names right now
					// let itemText = filename;

					return (
						<MenuItem key={index} id={room._id}> {room.name} </MenuItem>
					)
				})}
			</Menu>
		);
	}
// render //////////////////////////////////////////
	render(){

		return(

			<form id="new-annotation-form" className="form ws-form">
				{/* Toggle ============== */}
					<div className={"toggle-wrap toggled-" + this.state.toggled} >
						<label htmlFor='toggle-anno-type'>Text</label>
						<Toggle
							id='toggle-anno-type'
							checked={this.state.toggled}
							onChange={this.handleToggle} 
							icons={false}
						/>
						<label htmlFor='toggle-anno-type'>Portal</label>
					</div>
				{/* Label Input ========= */}
								<div className="input-wrap input-label">
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
				{/* Text ================ */}
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
				{/* Portal ============== */}
					{this.state.toggled && (

						<Dropdown
							trigger={['click']}
							overlay={this.dropdownMenu(this.state.roomArray)}
							animation="slide-up"
							onVisibleChange={this.handleVisibleChange}
						>
						<div className="input-wrap input-portal">
							<a
								href="#"
								id="portal-dropdown-trigger"
								className="input ws-input input-btn"
								text="Portal"
								onClick={this.handleDropdown}
							> 
							{this.state.destinationName ? this.state.destinationName : 'Select Destination'} 
							</a>
							</div>
						</Dropdown>

					)}

				{/*==================================================*/}
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

// <div className="input-wrap input-portal">
// 
// 	<a
// 		href="#"
// 		id="portal-dropdown-trigger"
// 		className="input ws-input input-btn"
// 		text="Portal"
// 		onClick={this.handleDropdown}
// 	> 
// 	Select Destination 
// 	</a>
// </div>