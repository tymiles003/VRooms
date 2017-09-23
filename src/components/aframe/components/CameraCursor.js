import React from "react";
import { Entity } from "aframe-react";
import "aframe-animation-component";
import 'aframe-mouse-cursor-component';

// const handleMouse = () => {
// 	console.log('mouseenter!')
// 	document.getElementById('cursor').setAttribute('color', 'red')
// }

const CameraCursor = props => {
	return (
		<Entity 
			primitive="a-camera"
			look-controls="reverseMouseDrag: true"
			mouse-cursor
			id="camera"
			>
			<Entity
				primitive="a-cursor"
				id="cursor"
				color="white"
			/>
		</Entity>
	);
};
export default CameraCursor;


// animation="startEvents: click; property: scale; from: 0.1 0.1 0.1; to: 1 1 1; dur: 1500;"
// animation__click={{
// 	startEvents: "click",
// 	property: "scale",
// 	from: "0.1 0.1 0.1",
// 	to: "1 1 1",
// 	dur: 150
// }}
// animation__cursorfusing={{
// 	startEvents: "cursor-fusing",
// 	property: "scale",
// 	easeIn: true,
// 	from: "0.1 0.1 0.1",
// 	to: "1 1 1",
// 	dur: 1500
// }}