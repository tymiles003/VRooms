import React from "react";
import { Entity } from "aframe-react";
import "aframe-animation-component";
import 'aframe-mouse-cursor-component';

// const handleMouse = () => {
// 	console.log('mouseenter!')
// 	document.getElementById('cursor').setAttribute('color', 'red')
// }

const Ground = props => {
	return (
		<Entity
			id="ground"
			geometry={{
					primitive: 'plane',
					height: 10,
					width: 10,
				}}
			position={{ x: 0, y: -2, z: 0 }}
			rotation={{ x: 90, y: 0, z: 0 }}
			material= {{ 
					color: "#ffffff", 
					opacity: 0.1,
					side: 'double'
				}}
		/>
	);
};
export default Ground;