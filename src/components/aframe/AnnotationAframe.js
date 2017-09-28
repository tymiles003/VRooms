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

			loading: true,
		};
	}
// handleLoadProgress ==============================

	// handleLoadProgress = () => {
		
	// }

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
		if (!this.props.inCreationMode && nextProps.inCreationMode) {
			let el = document.getElementById("new-annotation");
			// console.log("el", el);
			// this.getPosition();
		}
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
			console.log('>>>> pano_url --->',url);
			let img = document.getElementById('annotation-photo');
			let assets = document.querySelector('a-assets');
			img.addEventListener('load', this.handleLoadState)
			assets.addEventListener('loaded', console.log('>>>> ASSETS LOADED >>>>'))
			console.log('a-assets fileLoader', document.querySelector('a-assets').fileLoader);
		}
	//--------------------------------------------------

	};
// handleLoad ======================================
	handleLoadState = (e) => {
		e.preventDefault();
		console.log('>>>> img loaded');
		this.setState({
			loading: false
		})
	}
// componentDidMount ===============================
	componentDidMount = (prevProps, prevState) => {
		console.log("---- componentDidMount (Aframe) --->");
		// this.getProperty();
		// Fetch the room if roomID is provided, but if it isn't. Use this default one 
		// for now. Will need to handle error later on.
	
		
		// if ( this.props.inCreationMode ) {
			// 	this.getPosition(document.getElementById('new-annotation').click());
			// }
		this.setState({
			annotations: this.props.annotations
		});
	};
// getPosition =====================================
	getPosition = event => {
		console.log("---- getPosition --->");
		
		// if(this.state.inCreationMode){
		// Bind the event looking for where raycaster intersects anno
		// event.target.addEventListener('raycaster-intersected', this.handleRay)
		event.target.addEventListener("raycaster-intersected", this.handleRay);
		// }
	};
// handleRay =======================================
		handleRay = event => {
			event.preventDefault();
			// console.log("---- handleRay --->");
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
			console.log("position ====", posState);
			this.props.port(posState);

			// Switch state so it will not fire again until next trigger;
			this.setState(posState);
		};



// render //////////////////////////////////////////
	render() {
		return (
			<a-scene 
				inspector 
				embedded 
				class={this.state.loading ? 'loading' : 'loaded' }
			
			>
				{/* {this.state.loading && <Cloak/>} */}
				{/* <Cloak/> */}
				{/*==================================================*/}
				<a-assets>
					{/* <a-asset-item id="anno-asset" src={this.state.pano_url} crossOrigin="anonymous"/> */}
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
					wasd-controls="enabled: false"
					id="camera"
				>
					<Entity primitive="a-cursor" id="cursor" color="white" />

					{this.props.inCreationMode && (
						<Entity position={{ x: 0, y: 0, z: -5 }} >
							{/* BOX ====================================== */}
							<Entity
								id="new-annotation"
								className="annotation-toggle box ray-intersect"
								geometry={{ 
									primitive: "box", 
									width: 0.24, 
									height: 0.24, 
									depth: 0.24
									}}
								scale={{ x:1 , y:1 , z:1 }}
								material={{ 
									color: "#f1c40f", 
									opacity: 0.8 
								}}
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
			</a-scene>
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
