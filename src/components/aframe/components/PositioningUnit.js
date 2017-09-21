import React, {Component} from 'react';
import {Entity} from 'aframe-react';


class PositioningUnit extends Component {
	constructor(props){
		super(props);
		this.state = { }
	}


	handleRay = (event) => {
		event.preventDefault();

		const pos = event.target.getAttribute('position');
		console.log('pos',pos);
		event.target.removeEventListener('raycaster-intersected',this.handleRay);

	};


	getPosition = event => {
		event.preventDefault();

		event.target.addEventListener('raycaster-intersected', this.handleRay);
		
		const pos = event.target.getAttribute('position');
		console.log('getPosition -------> '+pos);
		
		event.target.removeEventListener('raycaster-intersected',this.handleRay);
	};

	
	render(){
		return (
			<Entity
				geometry={{ primitive: "plane", height: 0.3, width: 0.3 }}
				material="side: double; color: #fff; opacity: .5"
				look-at="#camera"
				events={{
					click: this.getPosition,
				}}
			/>
		)
	}
}
export default PositioningUnit;
