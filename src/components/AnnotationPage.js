import React, { Component } from "react";
import AnnotationAframe from "./aframe/AnnotationAframe";
import AnnotationForm from "./common/Forms/AnnotationForm";
// import {Helmet} from 'react-helmet';


// Pass roomID to this page via props
class AnnotationPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photo_url: '',
			roomID: '',
		};
	}
	

	portAnnotationState = (formState) => {
		console.log('---- INCOMING ANNOTATION STATE ---> '+formState); 
		this.setState(formState);
		
		// let { label, text, image, link, width, xAxis, yAxis, zAxis } = this.state;
		console.log('---- LIFTED  STATE ---> '+this.state) // just viewing the entire state for now.
	}


	render() {
		return (
			<div className="aframe-wrap">
				<AnnotationAframe 
					propID={this.props.propID} 
					roomID={this.props.roomID} 
					port={this.portAnnotationState}
				/>
				<AnnotationForm />
			</div>
		);
	}
}

export default AnnotationPage;

AnnotationPage.defaultProps = {
	propID: "59c5a00ba4d2290012cbdfaa",
	roomID: "59c5a24b7f69c2255b616d18",
}