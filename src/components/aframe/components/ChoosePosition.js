import React, {Component} from 'react';
import 'aframe-layout-component'

class ChoosePosition extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	render(){
		return (
			<Entity>
				{props.children}
			</Entity>
		)
	}
}
export default ChoosePosition;