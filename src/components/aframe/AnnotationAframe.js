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

// import LoadingProgress from 'react-progressbar.js';

import Cloak from "./../common/Elements/Cloak";
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
			annotations: [],
			creatingPortal: false,
			
			// loading: true,
			isMobile: false,

		};
	}

// componentWillReceiveProps =======================
	componentWillReceiveProps = nextProps => {

	// Setting pano_url in this state
		let currentURL = this.props.pano_url;
		let nextURL = nextProps.pano_url;
		
		if ( currentURL !== nextURL && currentURL === '' ) {
			this.setState({
				pano_url: nextURL
			})
		}

		
	//--------------------------------------------------

	// Get the initial position of the cube...
		// Without doing this, user HAS to move at least once or else the
		// coordinates will be undefined. If they move to location before
		// clicking 'New', type info and submit, coordinates will never
		// be read and return undefined. If they did this same thing on
		// subsequent creations, they coordinates would still equal the
		// last position read.
		// if (!this.props.inCreationMode && nextProps.inCreationMode) {
			// let el = document.getElementById("new-annotation");
			// console.log("el", el);
			// this.getPosition();
		// }
	//--------------------------------------------------
		
	// Update when we receive new annotations
		let currentAnnos = this.props.annotations;
		let nextAnnos = nextProps.annotations;

		if (currentAnnos !== nextAnnos) {
			this.setState({
				annotations: nextAnnos
			});
		}
	//--------------------------------------------------

	// Once we receive the pano_url from parent

		// let currentURL = this.props.pano_url;
		// let nextURL = nextProps.pano_url;
	
		if (nextProps.pano_url && (nextProps.pano_url !== this.props.pano_url)){
			let url = nextProps.pano_url;
			console.log('pano_url ===>',url);

			// let img = document.getElementById('annotation-photo');
			// img.addEventListener('load', this.handleLoadState)
			
			// let assets = document.querySelector('a-assets');
			// assets.addEventListener('loaded', console.log('>>>> ASSETS LOADED >>>>'))

			// console.log('a-assets fileLoader', document.querySelector('a-assets').fileLoader);
		}
	//--------------------------------------------------
	// Toggle changes when creating portal vs. text
	
		if (nextProps.creatingPortal !== this.props.creatingPortal){
			console.log(this.props.creatingPortal,'--->',nextProps.creatingPortal);
			
			this.setState({
				creatingPortal: nextProps.creatingPortal
			})
		}
	//--------------------------------------------------
	// When exiting creation mode reset toggle state.
		// if ( !nextProps.inCreationMode && this.props.inCreationMode ) {
		// 	this.setState({
		// 		creatingPortal: false,
		// 	})
		// }
	//--------------------------------------------------
	// Mobile Raycaster Ticking
		if (nextProps.inCreationMode && this.state.isMobile){
			// let limit = 1000;
			// let func = this.getPosition();
			// this.fetchPosition();
		}
	//--------------------------------------------------
	// Ability to Move
		this.setState({
			movable: nextProps.movable
		})
	//--------------------------------------------------
	};
// handleLoad ======================================
	// handleLoadState = (e) => {
	// 	e.preventDefault();
	// 	console.log('>>>> img loaded');
	// 	this.setState({
	// 		loading: false
	// 	})
	// }


// componentWillMount ==============================
	componentWillMount = () => {
		// console.log("---- componentWillMount (Aframe) --->");
		// console.log('this.props.inEditMode',this.props.inEditMode);
	}

// componentDidMount ===============================
	componentDidMount = (prevProps, prevState) => {
		// console.log("---- componentDidMount (Aframe) --->");
		// this.getProperty();
		// Fetch the room if roomID is provided, but if it isn't. Use this default one 
		// for now. Will need to handle error later on.
		
		// if ( this.props.inCreationMode ) {
		// 	this.getPosition(document.getElementById('new-annotation').click());
		// }

		this.setState({
			annotations: this.props.annotations
		});

		this.detectEnvironment();

	};
// detectEnvironment ===============================
	detectEnvironment = () => {
		console.log('detectEnvironment --->');
		let { isMobile, isIOS, isIframed, isGearVR } = AFRAME.utils.device;

		if (isMobile()) {
			console.log('isMobile',isMobile());
			this.setState({ isMobile: true })
		}
		else {
			console.log('isMobile', false);
		}
		// let environment = {
		// 	isMobile: isMobile(),
		// 	isIOS: isIOS(),
		// 	isIframed: isIframed(),
		// 	isGearVR: isGearVR(),
		// }
		// console.log('environment',environment);

		// this.setState(environment);


	}

// fetchPosition ===================================
	fetchPosition = () => {
		let el = document.getElementById('new-annotation');
		el.emit('click');
	}
// getPosition =====================================
	getPosition = event => {
		event.preventDefault();

		// Bind the event looking for where raycaster intersects anno,
		// Pass to handleRay to get the position
		event.target.addEventListener("raycaster-intersected", this.handleRay);
	};
// handleRay =======================================
		handleRay = event => {
			event.preventDefault();
			// event.detail is the holy grail
			// contains intersection world coordinates. (not relative)
			
			// console.log('event.detail',event.detail);
			const intersectionPoint = event.detail.intersection.point;
			let { x, y, z } = intersectionPoint;

			// Remove event so it only fires once. (or else it would fire constantly)
			event.target.removeEventListener( "raycaster-intersected", this.handleRay );
			
			// if(this.state.isMobile && this.state.inCreationMode){
			// 	setTimeout(event.target.addEventListener( "raycaster-intersected", this.handleRay ),1000);
			// }

			let posState = {
				xAxis: x,
				yAxis: y,
				zAxis: z
			};

			console.log("Position ===>", posState);

			// Send position state to parent component
			this.props.port(posState);

			// Switch state so it will not fire again until next trigger;
			this.setState(posState);
		};



// render //////////////////////////////////////////
	render() {
		return (
			<Scene inspector embedded >
				{/* <Cloak/> */}
			{/*====================================================*/}
				{/* <a-assets> */}
				<Entity primitive="a-assets">
					{/* <a-asset-item id="anno-asset" src={this.state.pano_url} crossOrigin="anonymous"/> */}
					<img id="annotation-photo" src={this.state.pano_url + "?v=1230"} crossOrigin="anonymous"/>
					{/* <img id="annotation-photo" src={this.state.pano_url} /> */}
					<img id="edit-icon" src="/public/assets/icons/edit-white.svg"/>
				</Entity>
				{/* </a-assets> */}
			{/* SKY ===============================================*/}
				<Entity
					primitive="a-sky"
					id="sky"
					className="ray-intersect"
					src="#annotation-photo"
				/>
			{/* RAYCASTER =========================================*/}
				<Raycaster />
			{/* CAMERA ============================================*/}
				<Entity
					primitive="a-camera"
					mouse-cursor
					look-controls="reverseMouseDrag: true"
					id="camera"
					wasd-controls={'enabled: '+this.state.movable}
				>
					{/* wasd-controls="enabled: true" */}
			{/* CURSOR ============================================*/}
				<Entity 
					primitive="a-cursor" 
					id="cursor" 
					color="white"
					fuseTimeout="400"
				/>
					{/* fuse={true} */}

				{/* If in Creation Mode, show the Raycaster target */}
					{this.props.inCreationMode && (
						// NEW ANNO / RAY INTERSECTION TARGET ============
						<Entity position={{ x: 0, y: 0, z: -5 }} >
						{/* BOX =======================================*/}
							<Entity
								id="new-annotation"
								className="annotation-toggle box ray-intersect"
								geometry={{ 
									primitive: "box", 
									width:  0.24, 
									height: 0.24, 
									depth:  0.24
									}}
								scale={{ x:1 , y:1 , z:1 }}
								material={{ 
									color: "#f39c12", 
									opacity: 0.8 
								}}
								material={this.state.creatingPortal
									? { color: "#3498db", opacity: 0.8 }
									: { color: "#f39c12", opacity: 0.8 }
								}
								animation__rotate={{ 
									property: "rotation", 
									dur: 4000, 
									loop: true, 
									to: "360 360 360" 
									}}
								events={{
									click: this.getPosition,
									mouseenter: this.getPosition,
								}}
							/>
								{/* _ref={this.getPosition} */}
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
			{/* ANNOTATION BUILDER ==============================*/}
				<BuildAnnotations 
					annotations={this.state.annotations} 
					inEditMode={this.props.inEditMode}
					/>
			{/* LIGHTS ==========================================*/}
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
					intensity="1"
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
