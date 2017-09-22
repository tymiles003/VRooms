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
<<<<<<< HEAD
		this.state = { };

	};
=======
		this.state = {
		};

	};	
	////////////////////////////////////////////////////
	componentWillMount(){
		
	}
>>>>>>> 2c02b4cb93833ea3020cb8b6942ab8def89ae14d
	////////////////////////////////////////////////////
	setImage = (e) => {
		e.preventDefault();
		// Locate the desired destination using filter, which returns an array
		let dest = destinations.filter( ea => ea.name === this.props.to );
		let{path,position} = dest[0];
		console.log('this.props.to',this.props.to);
		console.log('path',path);
		console.log('position',position);

<<<<<<< HEAD
		// this.setState({
		// 	name: this.props.to,
		// 	path: dest[0].path,
		// 	position: dest[0].position,
		// })

		this.props.teleport(this.props.to);
=======
		this.setState({
			name: this.props.to,
			path: path,
			position: position,
		})

		this.props.teleport(path);
>>>>>>> 2c02b4cb93833ea3020cb8b6942ab8def89ae14d
	};
	
	////////////////////////////////////////////////////
	render(){
		return (
			<Entity
				primitive="a-circle"
				className="teleport-link"
<<<<<<< HEAD
				radius="0.3"
=======
				radius=".3"
>>>>>>> 2c02b4cb93833ea3020cb8b6942ab8def89ae14d
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
<<<<<<< HEAD


=======
// mousedown: 'scale: 1 1 1',
// mouseenter: 'scale: 1.2 1.2 1',
// const TeleportLink = props => {


>>>>>>> 2c02b4cb93833ea3020cb8b6942ab8def89ae14d
export default TeleportLink;
