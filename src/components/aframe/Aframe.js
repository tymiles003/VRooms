import React from "react";
import ReactDOM from "react-dom";
import { Entity, Scene } from "aframe-react";
import "aframe-layout-component";
import "aframe-look-at-component";
// import "aframe-click-drag-component";
import CameraCursor from "./components/CameraCursor";
import Raycaster from "./components/Raycaster";
import RotatingBox from "./components/RotatingBox";
// import 'aframe-gridhelper-component';
// import "aframe-inspector";
import Portal from "./components/Portal";
import PhotoAssets from "./components/PhotoAssets";


class Aframe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sky_source: "#img-kitchen"
		};
		// this.handlePhotoAssets(this.props.photos)
	}

	componentWillMount = () => {
		console.log("---- componentWillMount --->");
		
		// Import photo assets
		const photos = this.props.photos;
		// this.handlePhotoAssets(photos);
		this.setState(photos)
		console.log('this.state.photos',this.state.photos);
		// Build elements for current page
	}
	// componentDidMount = () => console.log("---- componentDidMount --->");


	handlePhotoAssets = (allPhotos) => {
		// const allPhotos = this.state.photos;
		console.log('allPhotos',allPhotos);
		// <img id="balcony-1" src="assets/img/aframe/balcony-1.jpg" />
		// For each photo in the array, import into a-asset
		allPhotos.map( (photo) => {
			let{pano_url,name,id} = photo;
			
			// create id to be used in aframe
			let imgID = 'img-' + name.replace(/[^a-zA-Z0-9-]/g,'-');

			console.log('imgID',imgID);

			return (
				<img id={imgID} src={pano_url}/>
			)
		})
	}

	buildAsssets = roomPhotos => {
		
	};

	handleBoxState = boxState => { this.setState(boxState); }


	handlePortalState = portalState => {
		// console.log('---- handlePortalState --->', portalState);
		this.setState(portalState)
	}


	render() {

		return (
			<Scene embedded vr-mode-ui="enabled: false" inspector>
				{/*==================================================*/}
					<PhotoAssets photos={this.props.photos}/>
				{/*==================================================*/}
				<Entity layout={{ type: 'circle', radius: 5, plane: 'xz', angle: 20, }}
					position={{ x:0, y:0.25, z:0.1 }} rotation={{ x:0, y:165, z:0 }}
				>
					{/* <Portal to="#kitchen" label="Kitchen" position={{x: -1.56, y: 1.8, z: -4.6}}/>
					<Portal to="#bathroom" label="Bathroom" position={{x: -6, y: 1.5, z: 0}}/>
					<Portal to="#living-room" label="Living Room" position={{x: 4, y: 1.3, z: 0}}/> */}
					<Portal to="#balcony-1" label="balcony-1" port={this.handlePortalState}/>
					<Portal to="#balcony-2" label="balcony-2" port={this.handlePortalState} />
					<Portal to="#balcony-3" label="balcony-3" port={this.handlePortalState} />
					<Portal to="#balcony-4" label="balcony-4" port={this.handlePortalState} />
					<Portal to="#balcony-5" />
				</Entity>
				{/*==================================================*/}
				<Entity primitive="a-sky" id="sky" src={this.state.sky_source} />
				<Raycaster/>
				<CameraCursor />
				{/*==================================================*/}
				{/* <RotatingBox handleBoxState={this.handleBoxState}/> */}
			</Scene>
		);
	}
}

export default Aframe;

// x: -4.531538935158687, y: 1, z: -2.0130913087561733
// x: 0.8682408884128335, y: 1, z: -4.824038765047255
// x: 4.698463103962513, y: 1, z: -1.6101007165377579
// x: -2.5517059836284813e-11, y: 1, z: 5.1