import React, {Component} from 'react';
import { Entity } from "aframe-react";
import Portal from './Portal';
import 'aframe-layout-component';

class RoomElements extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			current: this.props.current
		}
	}


	handlePortalState = dest => {
		// console.log('---- handlePortalState --->', dest);

		this.props.port({
			sky_source: '#'+dest
		})
		// Pass the new destination up to parent, which will update state, 
		// which will trigger RoomElement to change its prop 'current',
		// which is passed back here and update the 'current' state,
		// triggering a rebuild.
	}


	// {/* <Portal to="#balcony-4" label="balcony-4" port={this.handlePortalState} /> */}
	buildPortals = () => {
		console.log('this.state.current',this.state.current);
		const data = this.props.data;

		// Find room in array
		const currentData = data.filter( (photo) => photo.id === this.state.current );

		currentData.annotations.map( (el) => {
			return(
				<Portal to={el.link} label={el.label} port={this.handlePortalState}/>
			)
		})
	}
	
	render(){
		// return (
			<Entity layout={{ type: 'circle', radius: 5, plane: 'xz', angle: 20, }}
			position={{ x:0, y:0.25, z:0.1 }} rotation={{ x:0, y:165, z:0 }}
			>
				{this.buildPortals}
			</Entity>
		// )
	}
}
export default RoomElements;