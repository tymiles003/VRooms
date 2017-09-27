import React from "react";
import ReactDOM from "react-dom";
import { Entity, Scene } from "aframe-react";
import "aframe-layout-component";
import "aframe-look-at-component";
import "aframe-animation-component";
import "aframe-mouse-cursor-component";
// import "aframe-click-drag-component";
// import "aframe-inspector";
// import 'aframe-gridhelper-component';

import LoadingProgress from 'react-progressbar.js';

import CameraCursor from "./components/CameraCursor";
import Raycaster from "./components/Raycaster";
import RotatingBox from "./components/RotatingBox";
import Portal from "./components/Portal";
import Annotation from "./components/Annotation";
import PhotoAssets from "./components/PhotoAssets";
import RoomElements from "./components/RoomElements";
import BuildAnnotations from "./components/BuildAnnotations";

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
			pano_url: "",
			
			inCreationMode: false,
			mode: "idle",
			newAnnotation: {},
			annotations: []
		};
	}
// handleLoadProgress ==============================

	// handleLoadProgress = () => {
		
	// }

// componentWillReceiveProps =======================
	componentWillReceiveProps = nextProps => {
		// Not called on initial render
		// console.log('componentWillReceiveProps');
		// console.log('nextProps.mode',nextProps.mode);
		// console.log('this.props.inCreationMode',this.props.inCreationMode);
		// let { inCreationMode, mode } = nextProps;

		// this.setState({ inCreationMode, mode, newAnnotation});
		// console.log('Aframe mode ====',this.state.mode);

		// console.log('this.props.pano_url',this.props.pano_url);
		// console.log('nexProps.pano_url',nextProps.pano_url);
		let currentURL = this.props.pano_url;
		let nextURL = nextProps.pano_url;

		if ( currentURL !== nextURL && currentURL === '' ) {
			this.setState({
				pano_url: nextURL
			})
		}

		// ENTERING CREATION MODE (currently false, next true)

		// Get the initial position of the cube.
		// Without doing this, user HAS to move at least once or else the
		// coordinates will be undefined. If they move to location before
		// clicking 'New', type info and submit, coordinates will never
		// be read and return undefined. If they did this same thing on
		// subsequent creations, they coordinates would still equal the
		// last position read.
		if (!this.props.inCreationMode && nextProps.inCreationMode) {
			let el = document.getElementById("new-annotation");
			// console.log("el", el);
			// this.getPosition();
		}

		let currentAnnos = this.props.annotations;
		let nextAnnos = nextProps.annotations;
		// console.log("currentAnnos", currentAnnos);
		// console.log("nextAnnos", nextAnnos);

		if (currentAnnos !== nextAnnos) {
			this.setState({
				annotations: nextAnnos
			});
		}
	};
	// shouldComponentUpdate ===========================
	// shouldComponentUpdate = (nextProps, nextState) => {

	// }
	// componentDidUpdate ==============================

	componentDidUpdate = (prevProps, prevState) => {
		// console.log('this.props.annotations.length',this.props.annotations.length);
		// console.log('prevProps.annotations.length',prevProps.annotations.length);

		// if ( this.props.annotations.length !== prevProps.annotations.length ) {
		// 	this.setState()
		// }

		if (this.props.inCreationMode && !prevProps.inCreationMode) {
			let el = document.getElementById("new-annotation");
			// console.log("el", el);
			// this.getPosition();
		}
	};

// componentDidMount ===============================
	componentDidMount = (prevProps, prevState) => {
		console.log("---- componentDidMount (Aframe) --->");
		// this.getProperty();
		// Fetch the room if roomID is provided, but if it isn't
		// Use this default one for now. Will need to handle error
		// later on.
		// if (this.props.roomID) {
		// 	this.getRoom();
		// } else {
			// pano_url: "assets/img/gallery/test-world6.jpg"
			
			// console.log('this.props.pano_url',this.props.room.pano_url);
			// console.log('prevProps.pano_url',prevProps.pano_url);

			// this.setState({
			// 		pano_url: this.props.room.pano_url
				
			// });
		// }

		let photo = document.getElementById('annotation-photo');

		photo.addEventListener('progress', function(event){
			event.preventDefault();
			console.log('e',event);
			let { loaded, total } = event.detail.xhr;

			let prog = (loaded/total)*100;
			console.log('prog',prog);
		})

		// photo.addEventListener('load', function(e){
		// 	e.preventDefault();
		// 	console.log('photo loaded');
		// })


		this.setState({
			annotations: this.props.annotations
		});

		// if ( this.props.inCreationMode ) {
		// 	this.getPosition(document.getElementById('new-annotation').click());
		// }
	};
//==================================================
//==================================================
// getPosition =====================================
	getPosition = event => {
		console.log("---- getPosition --->");

		// if (event) {
		// 	event.preventDefault();
		// }

		// let tgt = document.getElementById('new-annotation');

		// let mode = this.state.mode;

		// if(this.state.inCreationMode){
		// Bind the event looking for where raycaster intersects anno
		// event.target.addEventListener('raycaster-intersected', this.handleRay)
		event.target.addEventListener("raycaster-intersected", this.handleRay);
		// }
	};
// handleRay =======================================
	handleRay = event => {
		event.preventDefault();
		console.log("---- handleRay --->");
		// console.log('event.detail',event.detail);

		// event.detail is the holy grail
		// contains intersection world coordinates. (not relative)
		const intersectionPoint = event.detail.intersection.point;
		let { x, y, z } = intersectionPoint;

		// Remove event so it only fires once. (or else it would fire constantly)
		event.target.removeEventListener(
			"raycaster-intersected",
			this.handleRay
		);

		let posState = {
			xAxis: x,
			yAxis: y,
			zAxis: z
		};
		console.log("posState ====", posState);
		this.props.port(posState);

		// Switch state so it will not fire again until new is clicked;
		this.setState(posState);
	};

// buildAnnotations =================================

	// buildAnnotations(annotations) {
	// 	console.log("---- buildAnnotations --->");
	// 	console.log("annotations", annotations);
	// 	let annotationArray = annotations;

	// 	if (!annotationArray) {
	// 		console.log("!annotationArray");
	// 		annotationArray = this.props.annotations;
	// 	}

	// 	console.log("annotationArray", annotationArray);
	// 	let annotationComponents = annotationArray.map((ea, index) => {
	// 		return <Annotation data={ea} key={index} />;
	// 	});

	// 	return annotationComponents;
	// }
	// {this.state.annotations.map((ea, index) => (
	// 	<Annotation data={ea} key={index} />
	// ))}

// render //////////////////////////////////////////
	render() {
		return (
			// add embedded to embed
			<Scene inspector>
				{/*==================================================*/}
				<a-assets timeout="15000">
					
					{/* <a-asset-item id="annotation-photo" src={this.state.pano_url}/> */}
					<img id="annotation-photo" src={this.state.pano_url} crossOrigin="anonymous"/>
					{/* <img id="annotation-photo" src={this.state.pano_url} /> */}
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
						<Entity position={{ x: 0, y: 0, z: -5 }} >
							{/* BOX ====================================== */}
							<Entity
								id="new-annotation"
								className="annotation-toggle box ray-intersect"
								geometry={{ primitive: "box", width: 0.24, height: 0.24, depth: 0.24 }}
								scale={{ x: 1, y: 1, z: 1 }}
								material={{ color: "#f1c40f", opacity: 0.8 }}
								animation__rotate={{ property: "rotation", dur: 4000, loop: true, to: "360 360 360" }}
								events={{
									click: this.getPosition,
								}}
							/>
							{/* LABEL ==================================== */}
							{/* <Entity
								className="annotation-label"
								geometry={{ primitive: "plane", height: 0.08, width: 0.24, segmentsWidth: 0.24 }}
								text={{ value: label, align: "center", color: "white", width: 1 }}
								position={{ x: 0, y: 0.3, z: 0 }}
								scale={{ x: 3, y: 3, z: 3 }}
								material={{ color: "#333333", opacity: 0.7 }}
								look-at="#camera"
								events={{
									click: this.handleClick
								}}
							/> */}
							{/* TEXT ===================================== */}
							{/* <Entity
								className="annotation-text"
								geometry={{ primitive: "plane", height: 0.24, width: 0.5, segmentsWidth: 0.24 }}
								text={{ value: text, align: "center", color: "#333333", width: 1 }}
								position={{ x: 0, y: -0.24, z: 0 }}
								scale={{ x: 3, y: 3, z: 3 }}
								material={{ color: "#ffffff", opacity: 1, side: "double" }}
								visible="false"
								look-at="#camera"
								events={{
									mouseleave: this.handleMouseLeave
								}}
							/> */}
						</Entity>

						
					)}
				</Entity>
				{/*==================================================*/}
				{/* {this.props.annotations.map((ea, index) => (
					<Annotation data={ea} key={index} />
				))} */}
				<BuildAnnotations annotations={this.state.annotations} />
				{/*==================================================*/}
				<Entity
					primitive="a-light"
					type="ambient"
					color="#eee"
					intensity="1"
					position={{ x: 0, y: 3, z: 0 }}
				/>
				<Entity
					primitive="a-light"
					type="directional"
					color="#fff"
					position={{ x: -0.5, y: 3, z: 1 }}
				/>
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
