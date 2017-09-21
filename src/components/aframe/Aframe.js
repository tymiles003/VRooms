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
// import Portal from "./components/Portal";


class Aframe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sky_source: "#driveway",
			destination: ""
		};
		// this.teleport = this.teleport.bind(this);
		// this.getBearings = this.getBearings.bind(this);
	}

	componentWillMount = () => {
		console.log("---- componentWillMount --->");
	};
	componentDidMount = () => {
		console.log("---- componentDidMount --->");
	};

	buildAsssets = roomPhotos => {};

	teleport = event => {
		event.preventDefault();
		console.log("---- teleport --->");

		let dest = event.target.getAttribute("value");
		console.log("dest", dest);

		this.setState({
			sky_source: dest
		});
	};

	getBearings = event => {
		console.log("getBearings --->");
		event.preventDefault();
		// Camera Rotation Data
		const cam = document.getElementById("camera");
		let components = cam.components;
		let { rotation, position, scale } = components;
		let { x, y, z } = rotation.data;
		console.log("x", x, "y", y, "z", z);
	};

	handleRay = (event) => {
		event.preventDefault();

		const pos = event.target.getAttribute('position');
		console.log('pos',pos);

		// const ray = document.getElementById("ray");
		// const rc = ray.components;
		// let { position, rotation, raycaster, scale, visible } = ray.components;
		// console.log("position", position);
		// console.log("rotation", rotation);
	
		// // console.log('raycaster',raycaster);
		event.target.removeEventListener('raycaster-intersected',this.handleRay);
	};


	getPosition = event => {
		event.preventDefault();
		console.log('getPosition ------->');
		event.target.addEventListener('raycaster-intersected', this.handleRay);
	};



	render() {
		const portalTextScale = "1 1 1";
		const portalTextPos = "0 0 0";
		// const portalDimensions = "height: .5; width: 1.5";
		const portalHeight = 0.5;
		const portalWidth = 1.5;

		// Extract this later
		const Portal = props => {
			return (
				<Entity
					geometry={{
						primitive: "plane",
						height: portalHeight,
						width: portalWidth
					}}
					value={props.linkTo}
					material="side: double; color: #3498db; opacity: 1"
					className="teleport-link"
					look-at="[camera]"
					events={{
						click: this.teleport
					}}
				>
					<a-text
						value={props.label}
						align="center"
						scale={portalTextScale}
						position={portalTextPos}
					/>
				</Entity>
			);
		};

		// 'raycaster-intersected': this.handleRay,
		const Panel = () => {
			return (
				<Entity
					geometry={{ primitive: "plane", height: 0.3, width: 0.3 }}
					material="side: double; color: #fff; opacity: .5"
					look-at="#camera"
					events={{
						click: this.getPosition,
					}}
				/>
			);
		};
		const ChoosePosition = props => {
			return (
				<Entity
					layout={{
						type: "circle",
						radius: 5,
						plane: "xz",
						angle: 5
					}}
					position={{ x: 0, y: 1, z: 0.1 }}
					rotation={{ x: 0, y: 90, z: 0 }}
				>
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
					<Panel /> <Panel /> <Panel /> <Panel /> <Panel /> <Panel />
				</Entity>
			);
		};

		return (
			<Scene embedded vr-mode-ui="enabled: false" inspector>
				{/*==================================================*/}
				<a-assets>
					<img id="living-room" src="assets/img/aframe/living-room.jpg" />
					<img id="kitchen" src="assets/img/aframe/kitchen.jpg" />
					<img id="bathroom" src="assets/img/aframe/bathroom.jpg" />
					<img id="driveway" src="assets/img/aframe/driveway.jpg" />
					{/* <img id="front-entrance" src="assets/img/aframe/front-entrance.jpg" /> */}
					{/* <img id="vineyard" src="assets/img/aframe/vineyard.jpg" /> */}
					{/* <img id="theater" src="assets/img/aframe/theater.jpg" /> */}
					{/* <img id="museum" src="assets/img/aframe/museum.jpg" /> */}
					{/* <img id="garden" src="assets/img/aframe/garden.jpg" /> */}
					{/* <img id="sports-field" src="assets/img/aframe/soccer-field.jpg" /> */}
				</a-assets>
				{/* SKY =============================================*/}
				<Entity
					primitive="a-sky"
					id="sky"
					src={this.state.sky_source}
				/>
				{/*==================================================*/}
				<Raycaster/>
				<CameraCursor />
				{/*==================================================*/}
				{/* <ChoosePosition /> */}
				<Entity layout={{
					type: 'circle',
					radius: 5,
					plane: 'xz',
					angle: 30,
				}}
					position={{ x:0, y:1, z:0.1 }}
					rotation={{ x:0, y:90, z:0 }}
				>
					<Portal linkTo="#kitchen" label="Kitchen" />
					<Portal linkTo="#bathroom" label="Bathroom" />
					<Portal linkTo="#living-room" label="Living Room" />
				</Entity>
				{/*==================================================*/}
			</Scene>
		);
	}
}

export default Aframe;
