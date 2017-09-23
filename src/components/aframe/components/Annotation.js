import React, {Component} from "react";
import { Entity } from "aframe-react";
import 'aframe-look-at-component';
import 'aframe-mouse-cursor-component';
import 'aframe-animation-component';
import RotatingBox from './RotatingBox';

////////////////////////////////////////////////////
class Annotation extends React.Component {
	////////////////////////////////////////////////////
	constructor(props){
		super(props);
		this.state={ }
	}
	////////////////////////////////////////////////////
	handleClick = event => {
		event.preventDefault();
		
		let dest = event.target.getAttribute("to");
		console.log("---- teleport --->", dest);
		this.props.port(dest)

	};

	handleMouseOver = () => {
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
		let { label, text, image, link, width, xAxis, yAxis, zAxis } = this.props.data;
		let { primitive,textScale,textPos, tScale, tPos } = this.props;
		// let { to,position, label,textScale,textPos, primitive,height,width, color,opacity,side } = this.props;

			return (
				<Entity
					geometry={{ primitive, width }}
					material={{ color: '#9b59b6', }}
					position={{ x: xAxis, y: yAxis, z: zAxis }}
					className="annotation-link"
					look-at="#camera"
					events={{
						click: this.handleClick,
						mouseenter: this.handleMouseOver,
						mouseleave: this.handleMouseLeave,
					}}
					animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
				>
				{/* <Entity
					text={{ value: label }}
						align="center"
						scale={tScale}
						position={tPos}
					events={{
						mouseenter: this.handleMouse,
						mouseleave: this.handleMouseLeave,
					}}
					/> */}
					<a-text
						value={ label } // If label, use that. But if not, use this.props.to (minus the hashtag),
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

Annotation.defaultProps = {
	color: '#3498db',
	side: 'double',
	opacity: 1,
	primitive: 'plane',
	height: 0.5,
	width: 1.5,
	textScale: '1 1 1',
	textPos: '0 0 0',
	tScale: { x:1, y:1, z:1 },
	tPos: { x:0, y:0, z:0 }
}


export default Annotation;

{/* <a-text
	value={ label ? label : to.substring(1) } // If label, use that. But if not, use this.props.to (minus the hashtag),
	align="center"
	scale={textScale}
	position={textPos}
events={{
	mouseenter: this.handleMouseOver,
	mouseleave: this.handleMouseLeave,
}} 
/>
*/}