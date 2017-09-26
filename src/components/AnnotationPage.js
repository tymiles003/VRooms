import React, { Component } from "react";
import AnnotationAframe from "./aframe/AnnotationAframe";
import AnnotationForm from "./common/Forms/AnnotationForm";
import propertyAPI from "../utils/propertyAPI";
// import {Helmet} from 'react-helmet';
import Btn from "./common/Elements/Btn";

const defaultAnnotationState = {
	label: "Label",
	text: "Lorem Ipsum whatever blah.",
	xAxis: 0,
	yAxis: 1.5,
	zAxis: -4,
	fetchCoordinates: false,
};

// Pass roomID to this page via props
class AnnotationPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			property: {
				street: "",
				city: "",
				state: "",
				state: "",
				zip: "",
				country: "",
				street: "",
				bedrooms: "",
				baths: "",
				built_year: "",
				price: "",
				square_feet: "",
				property_name: ""
			},
			annotations: [
				{
					label: "stove",
					text: "Stovey McStoveface",
					xAxis: 3.9,
					yAxis: 1.5,
					zAxis: 3.1
				},
				{
					label: "sink",
					text: "Sinky McSinkface",
					xAxis: -1.75,
					yAxis: 0.8,
					zAxis: 4.45
				},
				{
					label: "fridge",
					text: "Fridgey McFridgeface",
					xAxis: 4.65,
					yAxis: 1.3,
					zAxis: -1.13
				},
				{
					label: "test",
					text: "Testy McTestFace",
					xAxis: 2.426,
					yAxis: 1.615,
					zAxis: -3
				},
				{
					label: "frames",
					text: "Framey McFrameFace",
					xAxis: 0.66,
					yAxis: 1.76,
					zAxis: -4.79
				}
			],
			newAnnotation: {},

			inCreationMode: false,
			mode: "idle",
			positionConfirmed: false,
			formConfirmed: false,
			
			inPosition: false,
			annotationConfirmed: false,
			submitted: false,
		};
	}
// componentDidMount ===============================
	// componentDidMount = () => {
	// 	// this.handleAnnotations();
	// 	this.getProperty(); // not super essential. for extra info on page.
	// 	console.log("---- componentDidMount (Page) ---> state", this.state.annotations);
	// };
// getRoom =========================================
	getRoom = () => {
		roomAPI.getRoom(this.props.roomID).then(response => {
			// console.log(response);
			this.setState({
				room: response.data[0]
			});
			console.log("getRoom.state", this.state);
		});
	};
// getProperty =====================================
	getProperty = () => {
		propertyAPI.getProperty(this.props.propID).then(response => {
			console.log(response);
			this.setState({
				property: response.data[0]
			});
			console.log("this.state", this.state);
		});
	};


// handleNewClick ==================================
	handleNewClick = e => {
		e.preventDefault();
		console.log("---- toggle Creation Mode --->");
		this.setState({
			inCreationMode: true,
			mode: 'in progress',
		});
		// positionConfirmed: false,
	};


// portAframe =============================

	portAframe = aframeState => {
		// annoState is the object for a single annotation.
		console.log("---- portAframe ---> " + aframeState);

		this.setState(aframeState);

		// console.log(' mode ====' , this.state.mode )
		// console.log('state ====' , this.state )

		// if(this.state.mode === 'submitted'){
		// 	this.saveAnnotation()
		// }

	};
// handleAnnotations ===============================
	// handleAnnotations = () => {
	// 	if(this.props.annotations){
	// 		this.setState({ })
	// 	}
	// };


// confirmPosition =================================
	// confirmPosition = (event) => {
	// 	event.preventDefault();

	// 	this.setState({
	// 		mode: "placed",
	// 		positionConfirmed: true,
	// 	})
	// 	// 		newAnnotation: annoState,
	// 	// 		positionConfirmed: true,
	// }



// portForm ========================================
	portForm = formState => {
		// console.log('---- portForm (Page) --->',formState);
		// let { label, text } = formState;
		// this.setState({
		// 	newAnnotation: {
		// 		label: label,
		// 		text: text,
		// 	}
		// })

		this.setState(formState)

		// console.log('this.state.newAnnotation',this.state.newAnnotation);
		// console.log('formState',formState);

		// let newAnno = Object.assign(this.state.newAnnotation, formState);
		// console.log('newAnno',newAnno);

	}

// submitAnnotation ================================
	// submitAnnotation = (event) => {
	// 	event.preventDefault();

	// 	console.log('---- (Page) submitAnnotation --->');
	// 	// console.log('label ====' , this.state.label )
	// 	// console.log('text ====' , this.state.text  )

	// 	// this.setState({ 
	// 	// 	mode: 'gathering',
	// 	// })
	// 	// submitted: true,
	// 	// console.log('this.state.mode',this.state.mode);

	// 	// this.saveAnnotation()
	// }


// saveAnnotation ==================================
	saveAnnotation = (e) => {
		e.preventDefault();
		// this.setState({ mode: "saved" })
		console.log('---- saveAnnotation --->');
		console.log('state ====',this.state);

		// Grab relevant info from state
		let { xAxis, yAxis, zAxis, label, text } = this.state;

		// Put together annotation to add to annotation array in state
		let newAnno =  [{ label, text, xAxis, yAxis, zAxis }];
		// console.log('newAnno',newAnno);

		// let newAnnoArray = this.state.annotations.push(newAnno);
		let newAnnoArray = this.state.annotations.concat(newAnno);
		// newAnnotation: newAnno,
		this.setState({
			annotations: newAnnoArray,
			inCreationMode: false,
			isSaved: true,
			mode: 'saved'
		})
		// inCreationMode: false,
		// annotations: newAnnoArray

		console.log('this.state.annotations',this.state.annotations);
	}
// render //////////////////////////////////////////
	render() {
		// let {street,city,state,zip,country,bedrooms,baths,built_year,price,square_feet,property_name} = this.state.property;
		return (
			<main>
				<div className="aframe-wrap fullscreen">
					{/* <AnnotationAframe 
						propID={this.props.propID} 
						roomID={this.props.roomID} 
						port={this.portAframe}
					/> */}

					<AnnotationAframe
						inCreationMode={this.state.inCreationMode}
						port={this.portAframe}
						annotations={this.state.annotations}

						fetchCoordinates={this.state.fetchCoordinates}


						positionConfirmed={this.state.positionConfirmed}
						mode={this.state.mode}
						newAnnotation={this.state.newAnnotation}
					/>

				
					<Btn
						id="new-annotation-btn"
						href="#!"
						onClick={this.handleNewClick}
						text="New"
					/>


					{/* {(this.state.mode === 'positioned') &&
						<Btn
							id="confirm-position"
							href="#!"
							onClick={this.confirmPosition}
							text="Confirm Position"
						/>	
					} */}


					{/* { (this.state.mode === 'placed' && !this.state.isSubmitted) && */}
					{/* { (this.state.positionConfirmed && !this.state.isSubmitted) && */}
					{ (this.state.inCreationMode) &&
						<section className='ws-row ws-foldout'>
							<AnnotationForm 
								port={this.portForm}
								mode={this.state.mode}
							/>

							<Btn
								id="submit-annotation"
								href="#!"
								theme="primary"
								onMouseEnter={this.fetchCoordinates}
								onClick={this.saveAnnotation}
								text="Submit"
							/>
						</section>
					}
	

					
				</div>
			</main>
		);
	}
////////////////////////////////////////////////////
} export default AnnotationPage;

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
};
