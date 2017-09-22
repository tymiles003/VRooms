import React, {Component} from 'react';
import 'aframe-layout-component'
import PositioningUnit from './PositioningDot';

class ChoosePosition extends Component {
	constructor(props){
		super(props);
		this.state = { }
	}

	render(){
		return (
			<Entity
			layout={{
				type: "circle",
				radius: 5,
				plane: "xz",
				angle: 5
			}}
			position={{ x: 0, y: 1, z: 0.1 }}
		>
			<PositionUnit />
		</Entity>
		)
	}
}
export default ChoosePosition;
