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
import Annotation from "./components/Annotation";
import PhotoAssets from "./components/PhotoAssets";
import RoomElements from "./components/RoomElements";
import propertyAPI from "../../utils/propertyAPI";
import roomAPI from "../../utils/roomAPI";


class AnnotationAframe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sky_source: 'annotation-photo',
			photo_url: '',
			selectedProperty: {
				thumbnail_url: ''
			},
			room: {
				pano_url: ''
			}
		};
		// sky_source: this.props.photo_url
		// this.handlePhotoAssets(this.props.photos)
	}
	
	getProperty = () => {
		propertyAPI.getProperty(this.props.propID).then(response => {
			console.log(response);
			this.setState({
				selectedProperty: response.data[0]
			});
			console.log("this.state", this.state);
		});
	}

	getRoom = () => {
		roomAPI.getRoom(this.props.roomID).then(response => {
			console.log(response);
			this.setState({
				room: response.data[0]
			});
			console.log("getRoom.state", this.state);
		});
	}


	buildAnnotations = () => {
		// let { label, text, image, link, width, xAxis, yAxis, zAxis } = this.state;
		annotations.map( (ea,i) => {
			console.log('label', ea.label);
			return <Entity text={{value: 'yolo'+i}} />
		})
	}


	componentDidMount = () => {
		console.log("---- componentDidMount --->");
		// this.getProperty();

		// Fetch the room if roomID is provided, but if it isn't
		// Use this default one for now. Will need to handle error
		// later on.
		if(this.props.roomID){
			this.getRoom();
		}
		else {
			this.setState({
				room: {
					pano_url: 'assets/img/gallery/test-world6.jpg'
				}
			})
		}
	};

	// handlePortalState = dest => { this.setState({ sky_source: dest }) }
	// handleRoomStates = state => { this.setState(state) }


	render() {

		return (
			<Scene embedded inspector>
				{/*==================================================*/}
					<a-assets timeout="5000">
						{/* <img id="annotation-photo" src={this.state.room.pano_url} crossOrigin="anonymous"/> */}
						<img id="annotation-photo" src={this.state.room.pano_url}/>
					</a-assets>
				{/*==================================================*/}
				<Entity primitive="a-sky" id="sky" src='#annotation-photo' />
				<Raycaster/>
				<CameraCursor />
				{/*==================================================*/}
				{ this.props.addedAnnotations.map( (ea,index) => {
					let { label, text, image, link, width, xAxis, yAxis, zAxis } = ea;
	
					return(
						<Annotation data={ea} key={index}/>
					)
				})}
				{/* <RotatingBox handleBoxState={this.handleBoxState}/> */}
			</Scene>
		);
	}
}


AnnotationAframe.defaultProps = {
	selectedProperty: {
		thumbnail_url: null,
	},
	sky_source: '',
	photo_url: '',
}

export default AnnotationAframe;

