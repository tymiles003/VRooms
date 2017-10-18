import React, { Component } from "react";
import AnnotationAframe from "./aframe/AnnotationAframe";
import AnnotationForm from "./common/Forms/AnnotationForm";
import propertyAPI from "../utils/propertyAPI";
import roomAPI from "../utils/roomAPI";
import Btn from "./common/Elements/Btn";
import Cloak from "./common/Elements/Cloak";
// import {Helmet} from 'react-helmet';

// const defaultAnnotationState = {
// 	label: "Label",
// 	text: "Lorem Ipsum whatever blah.",
// 	xAxis: 0,
// 	yAxis: 1.5,
// 	zAxis: -4,
// 	fetchCoordinates: false,
// };

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
			roomArray: [],
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
		console.log('this.props',this.props);
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
		// console.log('rID',rID);
		
		this.setState({rID})

		// Get Room data from roomAPI -------------------------
		roomAPI.getRoom(rID).then(response => {
			let roomData = response.data[0];
			let { roomID, pano_url, annotations, parent_propertyID } = response.data[0];
			console.log('roomAPI room response >>>>',response.data[0]);
			// console.log('pano_url >>>>',pano_url);
			// console.log('annotations >>>>',annotations);

			this.setState({ 
				roomID,
				pano_url,
				annotations,
			});

			// Use propertyID from roomData to make API call to find all other rooms in property

			roomAPI.getAllRoomsInProperty(parent_propertyID, (response) => {
				console.log('getAllRoomsInProperty ===>',response);
				this.setState({
					roomArray: response
				})
			})

		});

		// Get other rooms in this property
		// roomAPI.getAllRoomsInProperty()

		// (Temporary) Get All Rooms
		// roomAPI.getAllRooms().then(response => {
		// 	console.log('getAllRooms ===>',response.data);
		// 	this.setState({ 
		// 		roomArray: response.data
		// 	})
		// })

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

// getAllRoomsInProperty =====================================
	getAllRoomsInProperty = (propertyID) => {
		
		// roomAPI.getAllRoomsInProperty(this.props.propID).then(response => {
		// 	console.log(response);
		// 	this.setState({
		// 		property: response.data[0]
		// 	});
		// 	console.log("this.state", this.state);
		// });
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
		let { xAxis, yAxis, zAxis, label, text, isLink, toggled, destinationID } = this.state;

		// Put together annotation to add to annotation array in state
		let newAnno =  { label, xAxis, yAxis, zAxis };
		// console.log('newAnno',newAnno);

		// Check if text is roomID ----------------------------
		// If the text is not a valid roomID, set text in newAnno.
		// If it is a valid roomID, set text as link in newAnno
		if (text) {
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
		}

		// Save annotation or portal depending on the toggle in AnnotationForm
		if (toggled) { // if toggled is true, portal
			newAnno.link = destinationID;
			this.saveAnnotation(newAnno)
		}
		else { // if toggled is false, text
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
			mode: 'saved',
			toggled: false,
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
						movable={this.state.movable}
					/>

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
								roomArray={this.state.roomArray}
								creatingPortal={this.state.toggled}
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

// AnnotationPage.defaultProps = {
// 	roomID: '59c5a24b7f69c2255b616d18'
// }
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
