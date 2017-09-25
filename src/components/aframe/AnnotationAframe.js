import React from "react";
import ReactDOM from "react-dom";
import { Entity, Scene } from "aframe-react";
import "aframe-layout-component";
import "aframe-look-at-component";
import "aframe-animation-component";
import "aframe-mouse-cursor-component";
// import "aframe-click-drag-component";
import CameraCursor from "./components/CameraCursor";
import Raycaster from "./components/Raycaster";
import RotatingBox from "./components/RotatingBox";
// import 'aframe-gridhelper-component';
// import "aframe-inspector";
import Portal from "./components/Portal";
import Annotation from "./components/Annotation";
import PhotoAssets from "./components/PhotoAssets";
import RoomElements from "./components/RoomElements";
import propertyAPI from "../../utils/propertyAPI";
import roomAPI from "../../utils/roomAPI";

class AnnotationAframe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sky_source: "annotation-photo",
			photo_url: "",
			selectedProperty: {
				thumbnail_url: ""
			},
			room: {
				pano_url: ""
			},
			inCreationMode: false,
			mode: 'idle',
			newAnnotation: {},
			annotations: [],
		};
	}
// componentWillReceiveProps =======================
	componentWillReceiveProps = nextProps => { // Not called on initial render
		// console.log('componentWillReceiveProps');
		// console.log('nextProps.mode',nextProps.mode);
		// console.log('this.props.inCreationMode',this.props.inCreationMode);
		// let { inCreationMode, mode } = nextProps;
		
		// this.setState({ inCreationMode, mode, newAnnotation});
		// console.log('Aframe mode ====',this.state.mode);
		
		// Grab coordinates from state and send to parent
		if (nextProps.mode == 'gathering' && !nextProps.positionConfirmed) {
			let {xAxis, yAxis, zAxis} = this.state;
			this.props.port({
				xAxis, 
				yAxis, 
				zAxis,
				positionConfirmed: true,
			});
		}
	};

// componentDidMount ===============================
	componentDidMount = () => {
		console.log("---- componentDidMount --->");
		// this.getProperty();

		// Fetch the room if roomID is provided, but if it isn't
		// Use this default one for now. Will need to handle error
		// later on.
		if (this.props.roomID) {
			this.getRoom();
		} else {
			this.setState({
				room: {
					pano_url: "assets/img/gallery/test-world6.jpg"
				}
			});
		}

		// this.setState({
		// 	annotations: this.props.annotations
		// })

	};
//==================================================
// getProperty =====================================
	getProperty = () => {
		propertyAPI.getProperty(this.props.propID).then(response => {
			// console.log(response);
			this.setState({
				selectedProperty: response.data[0]
			});
			console.log("this.state", this.state);
		});
	};
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
//==================================================
// getPosition =====================================
	getPosition = event => {
			event.preventDefault();
			console.log('---- getPosition --->');
			
			// let mode = this.state.mode;

			if(this.state.inCreationMode){
				// Bind the event looking for where raycaster intersects anno
				event.target.addEventListener('raycaster-intersected', this.handleRay)
			}
		}
// handleRay =======================================
	handleRay = (event) => {
			event.preventDefault();
			console.log('---- handleRay --->');
			// console.log('event.detail',event.detail);
			
			// event.detail is the holy grail
			// contains intersection world coordinates. (not relative)
			const intersectionPoint = event.detail.intersection.point;
			let { x,y,z } = intersectionPoint;
			// console.log('ray.components',ray.components);
			let posState = {
				xAxis: x,
				yAxis: y,
				zAxis: z,
			}
			// this.props.port(posState)
			
			// Remove event so it only fires once. (or else it would fire constantly)
			event.target.removeEventListener('raycaster-intersected', this.handleRay);

			// Switch state so it will not fire again until new is clicked;
			this.setState(posState);
		};

// buildAnnotations =================================

		buildAnnotations(annotations){
			console.log('---- buildAnnotations --->');
			console.log('annotations',annotations);
			let annotationArray = annotations;

			if (!annotationArray) {
				console.log('!annotationArray');
				annotationArray = this.props.annotations;
			}

			console.log('annotationArray',annotationArray);
			let annotationComponents = annotationArray.map((ea, index) => {
				return (
					<Annotation data={ea} key={index} />
				)
			})

			return annotationComponents;
		}
		// {this.state.annotations.map((ea, index) => (
		// 	<Annotation data={ea} key={index} />
		// ))}

// render //////////////////////////////////////////
	render() {
		// function AllAnnotations(props){
		const AllAnnotations = () => {
			console.log('---- AllAnnotations --->');
			// let annotations = this.props.annotations;
			// console.log('annotations',annotations);
			// let annotations = props.data;
			// let allElements = annotations.map( (ea, index) => {
			// 	return (
			// 		<Annotation data={ea} key={index} />
			// 	)
			// })
			// return allElements;
			return (
				<Entity>
					{this.props.annotations.map( (ea, index) => {
						
						return (
							<Annotation data={ea} key={index} />
						)
					})}
				</Entity>
			)
		}
		
		

		return (
			// add embedded to embed
			<Scene 
				inspector
			>
				{/*==================================================*/}
				<a-assets timeout="5000">
					{/* <img id="annotation-photo" src={this.state.room.pano_url} crossOrigin="anonymous"/> */}
					<img id="annotation-photo" src={this.state.room.pano_url} />
				</a-assets>
				{/*==================================================*/}
				<Entity 
					primitive="a-sky" 
					id="sky"
					className="ray-intersect"
					src="#annotation-photo" 
					
					/>
				<Raycaster />
				<Entity
					primitive="a-camera"
					look-controls="reverseMouseDrag: true"
					mouse-cursor
					id="camera"
				>
					<Entity primitive="a-cursor" id="cursor" color="white" />

					{this.props.inCreationMode && (
						<Entity
							id="new-annotation"
							className="box annotation-toggle ray-intersect"
							geometry={{
								primitive: "box",
								width: 0.3,
								height: 0.3,
								depth: 0.3
							}}
							// material={{ color: "white" }}
							// material={{ color: "#FFEE58" }}
							// material={{ color: "#FF3D00", opacity: 0.5 }}
							material={{ color: "#f1c40f", opacity: 0.8 }}
							animation__rotate={{
								property: "rotation",
								dur: 5000,
								loop: true,
								to: "360 360 360"
							}}
							events={{
								mouseenter: this.handleMouseEnter,
								click: this.getPosition
							}}
							position={{ x: 0, y: 0, z: -5 }}
						/>
					)}
				</Entity>
				{/*==================================================*/}
				{this.props.annotations.map((ea, index) => (
					<Annotation data={ea} key={index} />
				))}
				{/*==================================================*/}
				{/* <AllAnnotations /> */}
				{/* {this.state.newAnnotation &&
					<Annotation data={this.state.newAnnotation} key={this.props.annotations.length+1} />
				} */}
				{/* {this.buildAnnotations(this.state.annotations)} */}
				{/*==================================================*/}
			</Scene>
		);
	}
}

AnnotationAframe.defaultProps = {
	selectedProperty: {
		thumbnail_url: null
	},
	sky_source: "",
	photo_url: ""
};

export default AnnotationAframe;
