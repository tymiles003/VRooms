import React, { Component } from "react";
import AnnotationAframe from "./aframe/AnnotationAframe";
import AnnotationForm from "./common/Forms/AnnotationForm";
import propertyAPI from "../utils/propertyAPI";
import roomAPI from "../utils/roomAPI";
// import {Helmet} from 'react-helmet';
import Btn from "./common/Elements/Btn";
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
		};

		console.log('this.props >>>>',this.props);
		console.log('this.props.match.params.roomID >>>>',this.props.match.params.roomID);
	}

// componentDidMount ===============================
	componentDidMount = () => {
		// this.handleAnnotations();
		// this.getProperty(); // not super essential. for extra info on page.
		// console.log("---- componentDidMount (Page) ---> state", this.state.annotations);
		let rID;
		let propsID = this.props.roomID;
		let urlID = this.props.match.params.roomID;

		if (urlID) {
			rID = urlID;
		}
		else {
			rID = propsID;
		}
		console.log('rID',rID);

		// this.setState({roomID})

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

// handleFinishClick ==================================
	// handleFinishClick = e => {
	// 	e.preventDefault();
	// 	console.log("---- finishClick --->");
	// 	this.setState({
	// 		inCreationMode: false,
	// 		mode: 'finished',
	// 	});
	// 	// positionConfirmed: false,
	// };

// portAframe =============================

	portAframe = aframeState => {
		this.setState(aframeState);
	};



// portForm ========================================
	portForm = formState => {
		this.setState(formState)
	}



// saveAnnotation ==================================
	saveAnnotation = (e) => {
		e.preventDefault();
		// this.setState({ mode: "saved" })
		console.log('---- saveAnnotation --->', this.state);

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
		
		// Save to Database
		let roomID = this.props.match.params.roomID || this.props.roomID;		
		roomAPI.addNewAnnotation( roomID, { xAxis, yAxis, zAxis, label, text } );

	}

// render //////////////////////////////////////////
	render() {
		// let {street,city,state,zip,country,bedrooms,baths,built_year,price,square_feet,property_name} = this.state.property;
		return (
			<main>

				<div className="aframe-wrap fullscreen">

					<AnnotationAframe
						inCreationMode={this.state.inCreationMode}
						port={this.portAframe}
						annotations={this.state.annotations}
						pano_url={this.state.pano_url}


						fetchCoordinates={this.state.fetchCoordinates}
						positionConfirmed={this.state.positionConfirmed}
						mode={this.state.mode}
						newAnnotation={this.state.newAnnotation}
					/>
						{/* roomID={this.state.roomID} */}

				
					<Btn
						id="new-annotation-btn"
						href="#!"
						onClick={this.handleNewClick}
						text="Add New"
					/>
				
					<Btn
						id="finish-btn"
						href="/"
						onClick={this.handleFinishClick}
						text="Done"
					/>

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
