import React, { Component } from "react";
import { Entity } from "aframe-react";
import "aframe-look-at-component";
import "aframe-mouse-cursor-component";
import "aframe-animation-component";
import RotatingBox from "./RotatingBox";

////////////////////////////////////////////////////

const rotationAnimationData = {
	property: "rotation",
	dur: 5000,
	to: { x: 360, y: 360, z: 360},
	easing: "easeInOutCubic",
};

// loop: true,
// to: "338 260 356",

// const rotationXYZ = { x: -22, y: 100, z: 4 };
const rotationXYZ = { x: 0, y: 0, z: 0};
////////////////////////////////////////////////////
class Annotation extends React.Component {
	////////////////////////////////////////////////////
	constructor(props) {
		super(props);
		this.state = {
			label: ""
		};
	}
	////////////////////////////////////////////////////
	handleClick = event => {
		event.preventDefault();
		let el = event.target;
		let parent = el.parentElement;
		let box = parent.querySelector('.annotation-toggle');
		let label = parent.querySelector('.annotation-label');
		let text = parent.querySelector('.annotation-text');

		label.setAttribute( 'material',{'color': '#3498db', opacity: 0.8} );
		box.setAttribute( 'visible', false );
		text.setAttribute( 'visible', true );
		
		document.getElementById('cursor').setAttribute('visible', false);
	};

	handleMouseLeave = event => {
		event.preventDefault();
		let parent = event.target.parentElement;
		this.resetAttributes(parent)
	};


	handleBoxHover = event => {
		event.preventDefault();
		// event.target.setAttribute( 'animation__rotate', {property: 'rotation', dur: 4000, to: '360 360 360'} )
		// event.target.removeAttribute( 'animation__rotate' )
	}


	resetAttributes = (parent) => {
		let box = parent.querySelector('.annotation-toggle');
		let label = parent.querySelector('.annotation-label');
		let text = parent.querySelector('.annotation-text');

		label.setAttribute( 'material',{'color': '#333333', opacity: 0.5 } );
		box.setAttribute( 'visible', true );
		text.setAttribute( 'visible', false );

		document.getElementById('cursor').setAttribute('visible', true)

	}


	render() {
		console.log("Annotation render() --->");
		let { label, text, image, link, xAxis, yAxis, zAxis } = this.props.data;
		let { primitive, textScale, textPos, height, width, tScale, tPos } = this.props;
		// let { to,position, label,textScale,textPos, primitive,height,width, color,opacity,side } = this.props;

		// animation__rotate={{property: 'rotation', dur: 4000, loop: true, to: '360 360 360'}}

		return (
			<Entity position={{ x: xAxis, y: yAxis, z: zAxis }} >
				{/* BOX ====================================== */}
					<Entity
						className="annotation-toggle box"
						geometry={{
							primitive: "box",
							width: 0.24,
							height: 0.24,
							depth: 0.24
						}}
						rotation={rotationXYZ}
						scale={{ x: 1, y: 1, z: 1 }}
						material={{ color: "#3498db", opacity: "0.8" }}
						animation__rotate={{property: 'rotation', dur: 4000, loop: true, to: '360 360 360'}}
						events={{
							click: this.handleClick,
						}}
					/>
				{/* LABEL ==================================== */}
					<Entity
						className="annotation-label"
						geometry={{
							primitive: 'plane',
							height: 0.08,
							width: 0.24,
							segmentsWidth: 0.24
						}}
						text={{
							value: label,
							align: 'center',
							color: 'white',
							width: 1,
						}}
						position={{ x: 0, y: 0.3, z: 0 }}
						scale={{ x:3 , y:3, z:3 }}
						material={{ color: "#333333", opacity: 0.7 }}
						look-at="#camera"
						events={{
							click: this.handleClick
						}}
					/>
				{/* TEXT ===================================== */}
					<Entity
						className="annotation-text"
						geometry={{
							primitive: 'plane',
							height: 0.24,
							width: 0.5,
							segmentsWidth: 0.24
						}}
						text={{
							value: text,
							align: 'center',
							color: '#333333',
							width: 1,
						}}
						position={{ x: 0, y: -0.24, z: 0 }}
						scale={{ x: 3, y: 3, z: 3 }}
						material={{ 
							color: "#ffffff", 
							opacity: 1,
							side: 'double'
						}}
						visible='false'
						look-at="#camera"
						events={{
							mouseleave: this.handleMouseLeave
						}}
					/>
					{/* <Entity
						geometry={{ primitive, height, width }}
						material={{ color: "#9b59b6" }}
						className="annotation-text"
						look-at="#camera"
						scale={{ x: 0, y: 0, z: 0 }}
					>
						<a-text
							value={text}
							align="center"
							scale={textScale}
							position={textPos}
						/>
					</Entity> */}
			</Entity>
		);
	}
}

Annotation.defaultProps = {
	color: "#3498db",
	side: "double",
	opacity: 1,
	primitive: "plane",
	height: 0.7,
	width: 2.5,
	textScale: "1 1 1",
	textPos: "0 0 0",
	tScale: { x: 1, y: 1, z: 1 },
	tPos: { x: 0, y: 0, z: 0 }
};

export default Annotation;

{
	/* <a-text
	value={ label ? label : to.substring(1) } // If label, use that. But if not, use this.props.to (minus the hashtag),
	align="center"
	scale={textScale}
	position={textPos}
events={{
	mouseenter: this.handleMouseEnter,
	mouseleave: this.handleMouseLeave,
}} 
/>
*/
}

{/* <Entity text={{
	value: text,
	align: 'center',
	scale: textScale,
	position: textPos
}}/> */}
