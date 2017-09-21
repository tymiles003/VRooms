// import { Entity } from "aframe-react";
import React from "react";

////////////////////////////////////////////////////
// const destinations = [
// 	{
// 		name: 'home',
// 		path: 'img/gallery/test-world7.jpg',
// 		position: '0 0 5',
// 	},
// 	{
// 		name: 'kitchen',
// 		path: 'img/gallery/test-world4.jpg',
// 		position: '1 0 5',
// 	},
// 	{
// 		name: 'master',
// 		path: 'img/gallery/test-world2.jpg',
// 		position: '2 0 5',
// 	}
// ];
////////////////////////////////////////////////////
const Portal = props => {
	////////////////////////////////////////////////////
	// setImage = (e) => {
	// 	e.preventDefault();
	// 	// Locate the desired destination using filter, which returns an array
	// 	let dest = destinations.filter( ea => ea.name === this.props.to );
	// 	let{path,position} = dest[0];
	// 	console.log('this.props.to',this.props.to);
	// 	console.log('path',path);
	// 	console.log('position',position);

	// 	this.props.teleport(this.props.to);
	// };

	return (
		<a-entity
			geometry={"primitive: plane; height: .5; width: 1.5"}
			material="side: double; color: #e74c3c"
			position="0 0 -4"
			className="teleport-link"
			onClick={this.props.teleport}
			value="#room2"
		>
			<a-text
				value="Kitchen"
				align="center"
				scale={props.portalTextScale || "1 1 1"}
				position={props.portalTextPos || "0 0 0"}
			/>
		</a-entity>
	);
};

export default Portal;
