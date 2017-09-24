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
			inCreationMode: false
		};
		// sky_source: this.props.photo_url
		// this.handlePhotoAssets(this.props.photos)
	}

	componentWillReceiveProps = nextProps => {
		console.log("---- componentWillReceiveProps --->");
		// console.log('nextProps.creationMode',nextProps.creationMode);
		// console.log('this.props.creationMode',this.props.creationMode);
		// Not called on initial render
		this.setState({
			inCreationMode: nextProps.creationMode
		});
		console.log("this.state", this.state.inCreationMode);
	};

	getProperty = () => {
		propertyAPI.getProperty(this.props.propID).then(response => {
			// console.log(response);
			this.setState({
				selectedProperty: response.data[0]
			});
			console.log("this.state", this.state);
		});
	};

	getRoom = () => {
		roomAPI.getRoom(this.props.roomID).then(response => {
			// console.log(response);
			this.setState({
				room: response.data[0]
			});
			console.log("getRoom.state", this.state);
		});
	};

	// buildAnnotations = () => {
	// 	// let { label, text, image, link, width, xAxis, yAxis, zAxis } = this.state;
	// 	annotations.map( (ea,i) => {
	// 		console.log('label', ea.label);
	// 		return <Entity text={{value: 'yolo'+i}} />
	// 	})
	// }

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

		// if (this.props.creationMode) {
		// 	this.setState({
		// 		inCreationMode: true,
		// 	})
		// }
	};

	// handlePortalState = dest => { this.setState({ sky_source: dest }) }
	// handleRoomStates = state => { this.setState(state) }

	// portRaycaster = rayProps => {
	// 	console.log("---- portRaycaster --->");
	// 	console.log("rayProps", rayProps);
	// };
	handleRay = (event) => {
		event.preventDefault();
		console.log('---- handleRay --->');
		const sky = document.getElementById('sky');
		const ray = document.getElementById("ray");
		// document.addEventListener('raycaster-intersected', function () {
			
			
			// const rc = ray.components;
			// let { position, rotation, raycaster, scale, visible } = ray.components;
			
			// console.log("position", position);
			// console.log("rotation", rotation);
			// // console.log('raycaster',raycaster);
		// });
		const et = sky;
		
		const pos = et.getAttribute('position');
		console.log('pos',pos);

		console.log('ray.components',ray.components);
		
		et.removeEventListener('raycaster-intersected', this.handleRay);
	};
	
	getPosition = event => {
		event.preventDefault();
		console.log('---- getPosition --->');
		// console.log('event.target',event.target);
		
		const sky = document.getElementById('sky');
		const ray = document.getElementById("ray");
		// this.handleRay;
		// const et = document.getElementById('#sky');
		// event.target.addEventListener('raycaster-intersected', this.handleRay)
		
		// sky.addEventListener('raycaster-intersected', function(){
		ray.addEventListener('raycaster-intersection', function(){
			console.log('---- rayCallback --->');
			// document.addEventListener('raycaster-intersected', function () {
				
				
				// const rc = ray.components;
				// let { position, rotation, raycaster, scale, visible } = ray.components;
				
				// console.log("position", position);
				// console.log("rotation", rotation);
				// // console.log('raycaster',raycaster);
			// });
			const et = sky;
			
			const pos = et.getAttribute('position');
			console.log('pos',pos);
	
			console.log('ray.components',ray.components);
		})
	}
	render() {
		return (
			// add embedded to embed
			<Scene 
				inspector
				events={{ click: this.getPosition }}
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

					{this.state.inCreationMode && (
						<Entity
							id="new-annotation"
							className="box annotation-toggle"
							geometry={{
								primitive: "box",
								width: 0.3,
								height: 0.3,
								depth: 0.3
							}}
							material={{ color: "white" }}
							animation__rotate={{
								property: "rotation",
								dur: 5000,
								loop: true,
								to: "360 360 360"
							}}
							events={{
								mouseenter: this.handleMouseEnter,
								click: this.handleClick
							}}
							position={{ x: 0, y: 0, z: 0 }}
						/>
					)}
				</Entity>
				{/*==================================================*/}
				{/*==================================================*/}
				{this.props.addedAnnotations.map((ea, index) => (
					<Annotation data={ea} key={index} />
				))}
				{/*==================================================*/}
				{/* <RotatingBox handleBoxState={this.handleBoxState}/> */}
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
