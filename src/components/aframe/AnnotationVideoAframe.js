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

import enableInlineVideo from 'iphone-inline-video';

class AnnotationVideoAframe extends React.Component {
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
			annotations: [{
				"_id" : "59d5dbd5a43b5254101bf336",
				"zAxis" : -3.59261166606156,
				"yAxis" : 4.35262777304134,
				"xAxis" : -0.207637030617449,
				"width" : 8,
				"link" : "",
				"image" : "",
				"label" : "Text Label",
				"text" : "Still works in video mode"
			},

			{
				"_id" : "59d5dbd5a43b5254101bf336",
				"zAxis" : -3.59261166606156,
				"yAxis" : 4.35262777304134,
				"xAxis" : -1.807637030617449,
				"width" : 8,
				"link" : "fresh",
				"image" : "",
				"label" : "Teleport",
				"text" : "It's time to teleport"
			}
		
			],

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
			img.addEventListener('load', this.handleLoadState);
			
			// let assets = document.querySelector('a-assets');
			// assets.addEventListener('loaded', console.log('>>>> ASSETS LOADED >>>>'))

			// console.log('a-assets fileLoader', document.querySelector('a-assets').fileLoader);
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
			annotations: this.state.annotations
		});
		console.log(this.state.annotations);

		let video = document.querySelector('video');
		enableInlineVideo(video);
	};
// getPosition =====================================
	getPosition = event => {
		// console.log("---- getPosition --->");
		
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
		

		playVideo() {
			this.refs.vidRef.play();
			console.log("Play video");
		}


// render //////////////////////////////////////////
	render() {
		return (
			<Scene inspector embedded >
				{/* className={this.state.loading ? 'loading' : 'loaded' } */}
				{/* {this.state.loading && <Cloak/>} */}
				{/* <Cloak/> */}
				{/*==================================================*/}
				<a-assets>
					{/* <a-asset-item id="anno-asset" src={this.state.pano_url} crossOrigin="anonymous"/> */}
					{/* <img id="annotation-photo" src={this.state.pano_url} crossOrigin="anonymous"/> */}

					{/* {this.state.pano_url} */}
					{/* <video ref="vidRef" id="video" src="https://s3-us-west-1.amazonaws.com/v-realtor/video/360+Virtual+Reality+Video++Champ+dOr+Real+Estate+Tour+Part1.mp4"
               autoPlay loop playsInline crossOrigin="anonymous"></video> */}

			   {/* <video ref="vidRef" id="video" src="https://s3-us-west-1.amazonaws.com/v-realtor/video/city_halfres.mp4"
               autoPlay loop playsInline="" crossOrigin="anonymous" controls=""></video> */}
			   

			   {/* <video ref="vidRef" id="video" src="/assets/video/city_halfres.mp4" autoPlay="" loop crossOrigin="anonymous" playsInline="" webkit-playsinline="" controls=""></video> */}
			   <video ref="vidRef" id="video" src="/assets/video/VRtour.mp4" autoPlay="" loop crossOrigin="anonymous" playsInline="" webkit-playsinline="" controls=""></video>

					{/* <img id="annotation-photo" src={this.state.pano_url} /> */}
				</a-assets>
				{/*==================================================*/}
				
				<a-videosphere src="#video" rotation="0 180 0"></a-videosphere>

				{/* <a-text font="kelsonsans" value="Puy de Sancy, France" width="6" position="-2.5 0.25 -1.5"
              rotation="0 15 0"></a-text> */}

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
								
						</Entity>

						
					)}
					
				</Entity>

				<BuildAnnotations annotations={this.state.annotations} />

				<Buttons playVideo={this.playVideo.bind(this)} />
				
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

AnnotationVideoAframe.defaultProps = {
	selectedProperty: {
		thumbnail_url: null
	},
	sky_source: "",
	photo_url: ""
};

class Buttons extends React.Component {
	render(){
	  return(
		<div>
		  <button id='playButton' onClick={this.props.playVideo}>Play!</button>
		</div>
	  );
	}
  }

export default AnnotationVideoAframe;
