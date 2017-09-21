import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import 'aframe-animation-component'

class RotatingBox extends Component {
	constructor(props){
		super(props);
		this.state = { }
	}
	changeColor = () => {
		const colors = ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6'];
		
		this.setState({
			color: '#3498db'
		})

		this.props.handleBox(this.state);
	}

	render(){
		return (
				
		<Entity id="box"
			geometry={{primitive: 'box', width: 0.3, height: 0.3, depth: 0.3}}
			material={{color: this.state.color, opacity: 0.6}}
			animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
			events={{click: this.changeColor}}>
		</Entity>		
		)
	}
}
export default RotatingBox;


// Original
		// <Entity id="box"
		// 	geometry={{primitive: 'box'}}
		// 	material={{color: this.state.color, opacity: 0.6}}
		// 	animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
		// 	animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
		// 	position={{x: 0, y: 1, z: -3}}
		// 	events={{click: this.changeColor.bind(this)}}>
		// 	<Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
		// 					geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
		// 					material={{color: '#24CAFF'}}/>
		// </Entity>