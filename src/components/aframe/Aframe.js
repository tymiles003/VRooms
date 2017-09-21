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


class Aframe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sky_source: "#balcony-1"
		};
		// this.teleport = this.teleport.bind(this);
		// this.getBearings = this.getBearings.bind(this);
	}

	// componentWillMount = () => console.log("---- componentWillMount --->");
	// componentDidMount = () => console.log("---- componentDidMount --->");


	buildAsssets = roomPhotos => {};

	// getBearings = event => {
	// 	console.log("getBearings --->");
	// 	event.preventDefault();
	// 	// Camera Rotation Data
	// 	const cam = document.getElementById("camera");
	// 	let components = cam.components;
	// 	let { rotation, position, scale } = components;
	// 	let { x, y, z } = rotation.data;
	// 	console.log("x", x, "y", y, "z", z);
	// };

	// handleRay = (event) => {
	// 	event.preventDefault();

	// 	const pos = event.target.getAttribute('position');
	// 	console.log('pos',pos);
	// 	event.target.removeEventListener('raycaster-intersected',this.handleRay);

	// 	// const ray = document.getElementById("ray");
	// 	// const rc = ray.components;
	// 	// let { position, rotation, raycaster, scale, visible } = ray.components;
	// 	// console.log("position", position);
	// 	// console.log("rotation", rotation);
	// 	// // console.log('raycaster',raycaster);
	// };


	// getPosition = event => {
	// 	event.preventDefault();
	// 	console.log('getPosition ------->');
	// 	event.target.addEventListener('raycaster-intersected', this.handleRay);
	// };

	handleBoxState = boxState => {
		// console.log('---- handleBoxState --->')
		this.setState(boxState);
	}


	handlePortalState = portalState => {
		// console.log('---- handlePortalState --->', portalState);
		this.setState(portalState)
	}


	render() {
		// const portalTextScale = "1 1 1";
		// const portalTextPos = "0 0 0";
		// const portalDimensions = "height: .5; width: 1.5";
		// const portalHeight = 0.5;
		// const portalWidth = 1.5;

		// Extract this later
		// const Portal = props => {
		// 	return (
		// 		<Entity
		// 			geometry={{
		// 				primitive: "plane",
		// 				height: portalHeight,
		// 				width: portalWidth
		// 			}}
		// 			value={props.to}
		// 			material="side: double; color: #3498db; opacity: 1"
		// 			className="teleport-link"
		// 			look-at="[camera]"
		// 			position={props.position}
		// 			events={{
		// 				click: this.teleport
		// 			}}
		// 		>
		// 			<a-text
		// 				value={props.label}
		// 				align="center"
		// 				scale={portalTextScale}
		// 				position={portalTextPos}
		// 			/>
		// 		</Entity>
		// 	);
		// };

		// 'raycaster-intersected': this.handleRay,


		return (
			<Scene embedded vr-mode-ui="enabled: false" inspector>
				{/*==================================================*/}
				<a-assets>
					{/* <img id="living-room" src="assets/img/aframe/living-room.jpg" />
					<img id="kitchen" src="assets/img/aframe/kitchen.jpg" />
					<img id="bathroom" src="assets/img/aframe/bathroom.jpg" />
					<img id="driveway" src="assets/img/aframe/driveway.jpg" /> */}
					<img id="balcony-1" src="assets/img/aframe/balcony-1.jpg" />
					<img id="balcony-2" src="assets/img/aframe/balcony-2.jpg" />
					<img id="balcony-3" src="assets/img/aframe/balcony-3.jpg" />
					<img id="balcony-4" src="assets/img/aframe/balcony-4.jpg" />
					<img id="balcony-5" src="assets/img/aframe/balcony-5.jpg" />
					
				</a-assets>
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