import React, { Component } from "react";
import { Entity } from "aframe-react";



class Raycaster extends React.Component {
constructor(props){
	super(props);
	this.state={

	}
}

render(){
	return (
		<Entity
			id="ray"
			raycaster={{
				objects: '.ray-intersect', 
				near: 0, 
				origin: '0 1 0', 
				showLine: false,
			}}
			position="0 0 0"
			rotation="0 0 0"
		/>
	);
}
};
export default Raycaster;
// position="0 -0.9 0"
