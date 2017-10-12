import React, { Component } from "react";
import AnnotationAframe from "./aframe/AnnotationAframe";
import AnnotationForm from "./common/Forms/AnnotationForm";
import propertyAPI from "../utils/propertyAPI";
import roomAPI from "../utils/roomAPI";
// import {Helmet} from 'react-helmet';
import Btn from "./common/Elements/Btn";
import Cloak from "./common/Elements/Cloak";
import Helmet from 'react-helmet';

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

			pano_url: '',
			roomID: '',
			annotations: [],
			newAnnotation: {},

			inCreationMode: false,
			mode: "idle",
			positionConfirmed: false,
			formConfirmed: false,
			
			inPosition: false,
			annotationConfirmed: false,
			submitted: false,
			toggled: false,
		};

		// console.log('this.props >>>>',this.props);
		console.log('this.props.match.params.roomID >>>>',this.props.match.params.roomID);
	}

// componentDidMount ===============================
	componentDidMount = () => {
		// this.handleAnnotations();
		// this.getProperty(); // not super essential. for extra info on page.
		// console.log("---- componentDidMount (Page) ---> state", this.state.annotations);
		let rID;
		let propsID = this.props.roomID;
		let underscoreID = this.props.match.params.roomID;
		
		if (underscoreID) {
			rID = underscoreID;
		}
		else {
			rID = propsID;
		}
		console.log('rID',rID);

		this.setState({rID})

		roomAPI.getRoom(rID).then(response => {
			console.log(response);
			let { roomID, pano_url, annotations } = response.data[0];
			console.log('roomAPI room response >>>>',response.data[0]);
			console.log('pano_url >>>>',pano_url);
			console.log('annotations >>>>',annotations);

			this.setState({ 
				roomID,
				pano_url,
				annotations,
			});
		});

		// this.getRoom();
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



// ports ===========================================
	portForm = formState => this.setState(formState);
	portAframe = aframeState => this.setState(aframeState);
	
// submitAnnotation ================================
	submitAnnotation = (e) => {
		e.preventDefault();
		// this.setState({ mode: "saved" })
		console.log('---- submitAnnotation --->');

		// Grab relevant info from state
		let { xAxis, yAxis, zAxis, label, text, isLink } = this.state;

		// Put together annotation to add to annotation array in state
		let newAnno =  { label, xAxis, yAxis, zAxis };
		// console.log('newAnno',newAnno);

		// Check if text is roomID ----------------------------
		// If the text is not a valid roomID, set text in newAnno.
		// If it is a valid roomID, set text as link in newAnno
		let textInput = text.trim();
		if ( textInput.length === 24 ) {
		// If the text input is exactly 24 characters long,
			roomAPI.getRoom(textInput).then(response => {
				// console.log(response);
				// let { roomID, pano_url, annotations } = response.data[0];
				if ( response.data.name === 'CastError') {
					// console.log('Not a valid link');
					newAnno.text = text;
					this.saveAnnotation(newAnno)
				}
				else if ( response.data[0] ) {
					console.log('Link detected');
					// this.setState({isLink: true})
					// newState.isLink = true;
					newAnno.link = text;
					this.saveAnnotation(newAnno);
				}
				
			})
			
		}
		else {
			newAnno.text = text;
			this.saveAnnotation(newAnno);
		}



	}
// saveAnnotation ==================================
	saveAnnotation = (newAnno) => {
		
		// let newAnnoArray = this.state.annotations.push(newAnno);
		let newAnnoArray = this.state.annotations.concat( [ newAnno ] );
		// newAnnotation: newAnno,
		this.setState({
			annotations: newAnnoArray,
			inCreationMode: false,
			isSaved: true,
			mode: 'saved'
		})
		
		// Save to Database
		let roomID = this.props.match.params.roomID || this.props.roomID;		
		roomAPI.addNewAnnotation( roomID, newAnno );

	}

// render //////////////////////////////////////////
	render() {
		// let {street,city,state,zip,country,bedrooms,baths,built_year,price,square_feet,property_name} = this.state.property;
		return (
			<main>
				<Cloak/>
				<div className="aframe-wrap">
				{/* Aframe ===========*/}
					<AnnotationAframe
						inCreationMode={this.state.inCreationMode}
						inEditMode={true}
						port={this.portAframe}
						annotations={this.state.annotations}
						pano_url={this.state.pano_url}
						roomID={this.state.roomID}

						fetchCoordinates={this.state.fetchCoordinates}
						positionConfirmed={this.state.positionConfirmed}
						mode={this.state.mode}
						newAnnotation={this.state.newAnnotation}

						creatingPortal={this.state.toggled}
					/>
						{/* roomID={this.state.roomID} */}

				{/* Buttons ==========*/}
					<Btn
						id="new-annotation-btn"
						href="#!"
						onClick={this.handleNewClick}
						text="Add New"
					/>
				
					<Btn
						id="finish-btn"
						href={'/show/'+this.state.rID}
						text="Done"
					/>

				{/* Form =============*/}
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
								onClick={this.submitAnnotation}
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
	roomID: '59c5a24b7f69c2255b616d18'
}
// AnnotationPage.defaultProps = {
// 	propID: "59c5a00ba4d2290012cbdfaa",
// 	roomID: "59c5a24b7f69c2255b616d18",
// 	annotations: [
// 		{
// 			label: "stove",
// 			text: "Stovey McStoveface",
// 			xAxis: 3.9,
// 			yAxis: 1.5,
// 			zAxis: 3.1
// 		},
// 		{
// 			label: "sink",
// 			text: "Sinky McSinkface",
// 			xAxis: -1.75,
// 			yAxis: 0.8,
// 			zAxis: 4.45
// 		},
// 		{
// 			label: "fridge",
// 			text: "Fridgey McFridgeface",
// 			xAxis: 4.65,
// 			yAxis: 1.3,
// 			zAxis: -1.13
// 		},
// 		{
// 			label: "test",
// 			text: "Testy McTestFace",
// 			xAxis: 2.426,
// 			yAxis: 1.615,
// 			zAxis: -3
// 		},
// 		{
// 			label: "frames",
// 			text: "Framey McFrameFace",
// 			xAxis: 0.66,
// 			yAxis: 1.76,
// 			zAxis: -4.79
// 		}
// 	]
// };
