import React, { Component } from "react";
import { Entity } from "aframe-react";



class Raycaster extends React.Component {
constructor(props){
	super(props);
	this.state={

	}
}

// handleRay = () => {
// 	// document.addEventListener('raycaster-intersected', function () {
	  
		
// 		const ray = document.getElementById("ray");
// 		const rc = ray.components;
// 		let { position, rotation, raycaster, scale, visible } = ray.components;
		
// 		console.log("position", position);
// 		console.log("rotation", rotation);
// 		// // console.log('raycaster',raycaster);
// 	// });

// 	this.props.port({
// 		rayPosition: position,
// 		rayRotation: rotation,
// 	})

// 	document.removeEventListener('raycaster-intersected', this.handleRay);
// };

// getPosition = event => {
// 	event.preventDefault();

// 	// this.handleRay;

// 	document.addEventListener('raycaster-intersected', this.handleRay)
// }

// raycaster="objects: #sky; near: 0; origin 0 1 0; showLine: true"
render(){
	return (
		<Entity
			id="ray"
			raycaster={{
				objects: '#sky', 
				near: 0, 
				origin: '0 1 0', 
				showLine: true,
			}}
			position="0 -0.9 0"
			rotation="90 0 0"
		/>
	);
}
};
export default Raycaster;
