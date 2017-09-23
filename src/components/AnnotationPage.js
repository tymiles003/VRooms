import React, { Component } from "react";
import AnnotationAframe from "./aframe/AnnotationAframe";
import AnnotationForm from "./common/Forms/AnnotationForm";
import propertyAPI from "../utils/propertyAPI";
// import {Helmet} from 'react-helmet';


// Pass roomID to this page via props
class AnnotationPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			property: {
				street: '',
				city: '',
				state: '',
				state: '',
				zip: '',
				country: '',
				street: '',
				bedrooms: '',
				baths: '',
				built_year: '',
				price: '',
				square_feet: '',
				property_name: ''
			},
			annotations: [
				{
					label: "sink",
					text: "Sinky McSinkface",
					xAxis: -0.9,
					yAxis: 0.8,
					zAxis: 5.5,
				},
				{
					label: "stove",
					text: "Stovey McStoveface",
					xAxis: 3.9,
					yAxis: 1.5,
					zAxis: 3.1,
				},
				{
					label: "fridge",
					text: "Fridgey McFridgeface",
					xAxis: 7.35,
					yAxis: 2,
					zAxis: -1.8,
				}
			]
		};
	}
	
	// Whenever an anno is added/deleted, this sets the state,
	// which triggers AnnotationAframe to update
	// addedAnnotations, which will trigger the change in aframe
	portAnnotationState = (formState) => {
		console.log('---- INCOMING ANNOTATION STATE ---> '+formState); 
		
		// formState is the object for a single annotation.
		// Need to use special form of setState that accepts a function
		// instead of an object in order to push to array
		this.setState( (prevState, formState) => {
			annotations: { prevState.annotations.push(formState) }
		});
		
		// let { label, text, image, link, width, xAxis, yAxis, zAxis } = this.state;
		console.log('---- LIFTED  STATE ---> '+this.state) // just viewing the entire state for now.
	}



	getProperty = () => {
		propertyAPI.getProperty(this.props.propID).then(response => {
			console.log(response);
			this.setState({
				property: response.data[0]
			});
			console.log("this.state", this.state);
		});
	}



	handleAnnotations = () => {
		// if(this.props.annotations){
			// this.setState({
			// })
		// }
	}

	componentDidMount = () => {
		this.handleAnnotations();
		this.getProperty(); // not super essential. for extra info on page.
		console.log('componentDidMount ---> state',this.state.annotations);
	}


	render() {
		// let {street,city,state,zip,country,bedrooms,baths,built_year,price,square_feet,property_name} = this.state.property;
		return (
			<main>
				<header className="ws-compact">
					<h5>Annotating:</h5>
				</header>
				<div className="aframe-wrap">

					{/* <AnnotationAframe 
						propID={this.props.propID} 
						roomID={this.props.roomID} 
						port={this.portAnnotationState}
					/> */}

					<AnnotationAframe 
						addedAnnotations={this.state.annotations}
						port={this.portAnnotationState} 
					/>

					<AnnotationForm />

				</div>
			</main>
		);
	}
}

export default AnnotationPage;

AnnotationPage.defaultProps = {
	propID: "59c5a00ba4d2290012cbdfaa",
	roomID: "59c5a24b7f69c2255b616d18",
	annotations: [
		{
			label: "living room",
			link: "living-room",
			xAxis: -2,
			yAxis: 2,
			zAxis: -5
		},
		{
			label: "bathroom",
			link: "bathroom",
			xAxis: 0,
			yAxis: 2,
			zAxis: -5
		},
		{
			label: "fridge",
			text: "Fridgey McFridgeface",
			xAxis: 2,
			yAxis: 2,
			zAxis: -5
		}
	]
}