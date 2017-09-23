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
import propertyAPI from "../../utils/propertyAPI";


class AnnotationAframe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sky_source: 'annotation-photo',
			photo_url: '',
			selectedProperty: {
				thumbnail_url: ''
			}
		};
		// sky_source: this.props.photo_url
		// this.handlePhotoAssets(this.props.photos)
	}

	componentWillMount = () => {
		console.log("---- componentWillMount --->");
		
		// Import photo assets
		// const photo_url = this.props.photo_url;
		// console.log('photo_url',photo_url)
		// this.setState({photo_url})
		// console.log('this.state.photo_url',this.state.photo_url)
		// Build elements for current page
	}
	
	
	
	// getAllProperty = () => {
	// 	propertyAPI.getAllProperties().then(response => {
	// 		console.log(response);
	// 		this.setState({
	// 			initProperties: response.data,
	// 			allProperties: response.data
	// 		});
	// 	});

	// 	console.log(this.state.initProperties)
	// };

	getProperty = () => {
		propertyAPI.getProperty(this.props.propID).then(response => {
			console.log(response);
			this.setState({
				selectedProperty: response.data[0]
			});
			console.log("this.state", this.state);
		});
	}

	componentDidMount = () => {
		console.log("---- componentDidMount --->");
		// console.log('this.state.photos',this.state.photos);
		this.getProperty();
	};

	// handlePortalState = dest => { this.setState({ sky_source: dest }) }
	// handleRoomStates = state => { this.setState(state) }


	render() {

		return (
			<Scene embedded vr-mode-ui="enabled: false" inspector>
				{/*==================================================*/}
					<a-assets timeout="5000">
						<img id="annotation-photo" src={this.state.selectedProperty.thumbnail_url} crossOrigin="anonymous"/>
					</a-assets>
				{/*==================================================*/}
				<Entity primitive="a-sky" id="sky" src='#annotation-photo' />
				<Raycaster/>
				<CameraCursor />
				{/*==================================================*/}
				{/* <RotatingBox handleBoxState={this.handleBoxState}/> */}
			</Scene>
		);
	}
}


// AnnotationAframe.defaultProps = {
// 	selectedProperty: {
// 		thumbnail_url: null,
// 	},
// 	sky_source: '',
// 	photo_url: '',
// }

export default AnnotationAframe;

