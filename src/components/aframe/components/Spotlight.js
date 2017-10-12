import React from "react";
import { Entity } from "aframe-react";
import "aframe-animation-component";
import 'aframe-mouse-cursor-component';

const Spotlight = props => {
	return (
		<Entity
				light={{
					type: 'spot',
					color: '#fff',
					angle: 12,
					distance: 4,
					decay: 0,
					target: props.target,
				}}
				position={{ 
					x: 0, 
					y: 3, 
					z: 0 
				}}
			/>
	);
};
export default Spotlight;