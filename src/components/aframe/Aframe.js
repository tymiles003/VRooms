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
import RoomElements from "./components/RoomElements";


class Aframe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sky_source: "kitchen"
		};
		// this.handlePhotoAssets(this.props.photos)
	}

	componentWillMount = () => {
		console.log("---- componentWillMount --->");
		
		// Import photo assets
		const photos = this.props.photos;
		// this.handlePhotoAssets(photos);
		this.setState(photos)
		// console.log('this.state.photos',this.state.photos);
		// Build elements for current page
	}
	
	
	
	componentDidMount = () => {
		console.log("---- componentDidMount --->");
		// console.log('this.state.photos',this.state.photos);
	}



	buildAsssets = roomPhotos => {
		
	};

	handleBoxState = boxState => { this.setState(boxState); }


	handlePortalState = dest => {
		// console.log('---- handlePortalState --->', portalState);
		this.setState({ sky_source: dest })
	}
	handleRoomStates = state => {
		// console.log('---- handleElementState --->', state);
		this.setState(state)
	}


	render() {

		return (
			<Scene embedded vr-mode-ui="enabled: false" inspector>
				{/*==================================================*/}
					<PhotoAssets photos={this.props.photos}/>
				{/*==================================================*/}
				<Entity layout={{ type: 'circle', radius: 5, plane: 'xz', angle: 20, }} position={{ x:0, y:0.25, z:0.1 }} rotation={{ x:0, y:165, z:0 }} >
					<Portal to="kitchen" label="Kitchen" port={this.handlePortalState}/>
					<Portal to="bathroom" label="Bathroom" port={this.handlePortalState}/>
					<Portal to="living-room" label="Living Room" port={this.handlePortalState}/>
					{/* <Portal to="balcony-1" label="balcony-1" port={this.handlePortalState}/> */}
					{/* <Portal to="balcony-2" label="balcony-2" port={this.handlePortalState} /> */}
					{/* <Portal to="#balcony-3" label="balcony-3" port={this.handlePortalState} /> */}
					{/* <Portal to="#balcony-4" label="balcony-4" port={this.handlePortalState} /> */}
					{/* <Portal to="#balcony-5" /> */}
				</Entity>

				{/* <RoomElements current={this.state.sky_source} data={this.props.photos} port={this.handleRoomStates} /> */}
				
				{/*==================================================*/}
				<Entity primitive="a-sky" id="sky" src={'#'+this.state.sky_source} />
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