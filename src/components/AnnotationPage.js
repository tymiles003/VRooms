import React, { Component } from "react";
import AnnotationAframe from "./aframe/AnnotationAframe";
import AnnotationForm from "./common/Forms/AnnotationForm";
// import {Helmet} from 'react-helmet';

// Fetch photos for this property and load the assets onto the page
let props = {
	name: "kitchen",
	photo_url: "assets/img/gallery/test-world6.jpg"
};
let photo_url: "assets/img/gallery/test-world6.jpg"

// Pass photo url to this page via props
class AnnotationPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photo_url: photo_url
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
				<AnnotationAframe photo_url={'assets/img/gallery/test-world6.jpg'} port={this.portAnnotationState}/>
				<AnnotationForm />
			</div>
		);
	}
}

export default AnnotationPage;

// <Helmet>
// <link href="/css/aframe.css" rel="stylesheet"/>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/aframe/0.6.1/aframe-master.min.js"></script>
// </Helmet>
