import React, { Component } from "react";
import { Entity } from "aframe-react";

const handleRay = () => {
	// document.addEventListener('raycaster-intersected', function () {
	//   console.log('hit something!');
	// });

	const ray = document.getElementById("ray");
	const rc = ray.components;
	let { position, rotation, raycaster, scale, visible } = ray.components;

	console.log("position", position);
	console.log("rotation", rotation);
	// // console.log('raycaster',raycaster);
};

const Raycaster = props => {
	return (
		<Entity
			id="ray"
			raycaster="objects: #sky; near: 0; origin 0 1 0; showLine: true"
			raycaster={{
				objects: '#sky', 
				near: 0, 
				origin: '0 1 0', 
				showLine: true
			}}
			position="0 -0.9 0"
			rotation="90 0 0"
		/>
	);
};
export default Raycaster;
