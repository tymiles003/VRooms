import { Entity } from "aframe-react";
import React, {Component} from "react";

////////////////////////////////////////////////////
	const destinations = [
		{
			name: 'home',
			path: 'img/gallery/test-world7.jpg',
			position: '0 0 5',
		},
		{
			name: 'kitchen',
			path: 'img/gallery/test-world4.jpg',
			position: '1 0 5',
		},
		{
			name: 'master',
			path: 'img/gallery/test-world2.jpg',
			position: '2 0 5',
		}
	];
////////////////////////////////////////////////////
class TeleportLink extends React.Component {
	constructor(props) {
		super(props);
		this.state = { };

	};
	////////////////////////////////////////////////////
	setImage = (e) => {
		e.preventDefault();
		// Locate the desired destination using filter, which returns an array
		let dest = destinations.filter( ea => ea.name === this.props.to );
		let{path,position} = dest[0];
		console.log('this.props.to',this.props.to);
		console.log('path',path);
		console.log('position',position);

		this.setState({
			name: this.props.to,
			path: path,
			position: position,
		})

		this.props.teleport(path);
	};
	
	////////////////////////////////////////////////////
	render(){
		return (
			<Entity
				primitive="a-circle"
				className="teleport-link"
				radius="0.3"
				color="#3498db"
				to={this.props.to}
				events={{
					click: [this.setImage],
				}}
			>
				<Entity
					primitive="a-text"
					value={this.props.to}
					align='center'
					scale='3 3 1'
					position={{x:0, y:0.5, z:0}}
				/>


			</Entity>
		)
	}
};


export default TeleportLink;
