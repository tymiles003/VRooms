import React, {Component} from "react";
import { Entity } from "aframe-react";
import 'aframe-look-at-component';
import 'aframe-mouse-cursor-component';

////////////////////////////////////////////////////
class Portal extends React.Component {
	////////////////////////////////////////////////////
	constructor(props){
		super(props);
		this.state={ }
	}
	////////////////////////////////////////////////////
	teleport = event => {
		event.preventDefault();
		
		let dest = event.target.getAttribute("to");
		console.log("---- teleport --->", dest);
		this.props.port(dest)

	};

	handleMouse = () => {
		console.log('mouseenter!')
		let cursor = document.getElementById('cursor');
		cursor.setAttribute('color', '#f1c40f');
		cursor.setAttribute('scale', '1.5 1.5 1.5');
	}

	handleMouseLeave = () => {
		console.log('mouseleave!');
		let cursor = document.getElementById('cursor');
		cursor.setAttribute('color', 'white');
		cursor.setAttribute('scale', '1 1 1');
	}


	render () {
		let { 
			to,position,
			label,textScale,textPos,
			primitive,height,width,
			color,opacity,side 
		} = this.props;

			return (
				<Entity
					geometry={{ primitive, height, width }}
					to={to}
					material={{ side, color, opacity }}
					className="portal-link"
					look-at="#camera"
					events={{
						click: this.teleport,
						mouseenter: this.handleMouse,
						mouseleave: this.handleMouseLeave,
					}}
				>
					<a-text
						value={ label ? label : to.substring(1) } // If label, use that. But if not, use this.props.to (minus the hashtag),
						align="center"
						scale={textScale}
						position={textPos}
					events={{
						mouseenter: this.handleMouse,
						mouseleave: this.handleMouseLeave,
					}}
					/>
				</Entity>
			);
		}
	
};

Portal.defaultProps = {
	color: '#3498db',
	side: 'double',
	opacity: 1,
	primitive: 'plane',
	height: 0.5,
	width: 1.5,
	textScale: '1 1 1',
	textPos: '0 0 0',
}


export default Portal;
