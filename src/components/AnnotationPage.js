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
		};
	}
	

	portAnnotationState = (formState) => {
		console.log('---- INCOMING ANNOTATION STATE ---> '+formState); 
		this.setState(formState);
		
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



	componentDidMount = () => {
		this.getProperty();
	}


	render() {
		// let {street,city,state,zip,country,bedrooms,baths,built_year,price,square_feet,property_name} = this.state.property;
		return (
			<main>
				<header className="ws-compact">
					<h5>Annotating:</h5>
				</header>
				<div className="aframe-wrap">

					<AnnotationAframe 
						propID={this.props.propID} 
						roomID={this.props.roomID} 
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
}