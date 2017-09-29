import React, { Component } from "react";
import { Entity } from "aframe-react";
import "aframe-look-at-component";
import "aframe-mouse-cursor-component";
import "aframe-animation-component";
// import RotatingBox from "./RotatingBox";
import { Link, withRouter } from "react-router-dom";

////////////////////////////////////////////////////
	// animation__rotate={{property: 'rotation', dur: 4000, loop: true, to: '360 360 360'}}
	const rotationAnimationData = {
		property: "rotation",
		dur: 5000,
		to: { x: 360, y: 360, z: 360},
		easing: "easeInOutCubic",
	};

	const wrapper = {
		scale: {
			x: 1.5,
			y: 1.5,
			z: 1.5,
		}
	}
	const box = {
		geometry: {
			primitive: "box",
			width: 0.24,
			height: 0.24,
			depth: 0.24
		},
		rotation: { x: 0, y: 0, z: 0 },
		scale: { x: 1, y: 1, z: 1 },
		material: { 
			color: "#e74c3c", 
			opacity: 0.8 
		},
		animation__rotate: { 
			property: 'rotation', 
			dur: 4000, 
			loop: true, 
			to: '360 360 360'
		},
	}
	const label = {
		geometry: {
			primitive: 'plane',
			height: 0.08,
			width: 0.24,
		},
		text: {
				align: 'center',
				color: 'white',
				width: 1,
		},
		position: { x: 0, y: 0.3, z: 0 },
		scale: { x:3 , y:3, z:3 },
		material: { color: "#242424", opacity: 0.7 },
	}
	const text = {
		geometry: {
			primitive: 'plane',
			height: 0.25,
			width: 0.5,
		},
		text: {
			align: 'center',
			color: '#333333',
			width: 0.5,
			wrapCount: 24
		},
		position: { x: 0, y: -0.24, z: 0 },
		scale: { x: 3, y: 3, z: 3 },
		material: { 
			color: "#ffffff", 
			opacity: 1,
			side: 'double'
		}
	};

////////////////////////////////////////////////////
class AnnoLink extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			label: ""
		};
	}
// handleClick =====================================
	handleClick = event => {
		event.preventDefault();
		let el = event.target;
		let parent = el.parentElement;
		// let boxEl = parent.querySelector('.annotation-toggle');
		// let labelEl = parent.querySelector('.annotation-label');
		// let textEl = parent.querySelector('.annotation-text');
		// let cursorEl = document.getElementById('cursor');

		// labelEl.setAttribute( 'material',{'color': '#242424', opacity: 1} );
		// boxEl.setAttribute( 'visible', false );
		// textEl.setAttribute( 'visible', true );
		// cursorEl.setAttribute('visible', false);

		history.push('/my-new-location')
		
	};

// handleMouseLeave ================================
	handleMouseLeave = event => {
		event.preventDefault();
		let parent = event.target.parentElement;
		this.resetAttributes(parent)
	};

// resetAttributes =================================
	resetAttributes = (parent) => {
		let boxEl = parent.querySelector('.annotation-toggle');
		let labelEl = parent.querySelector('.annotation-label');
		let textEl = parent.querySelector('.annotation-text');
		let cursorEl = document.getElementById('cursor');

		labelEl.setAttribute( 'material', label.material );
		boxEl.setAttribute( 'visible', true );
		textEl.setAttribute( 'visible', false );
		cursorEl.setAttribute('visible', true)
	}

////////////////////////////////////////////////////
	render() {
		let { data } = this.props;
		let { xAxis, yAxis, zAxis, link } = this.props.data;
		let { primitive, textScale, textPos, height, width, tScale, tPos } = this.props;
		// let { to,position, label,textScale,textPos, primitive,height,width, color,opacity,side } = this.props;
		
		return (
			<Entity 
				position={{ x: xAxis, y: yAxis, z: zAxis }} 
				scale={wrapper.scale}
			>
				<Link to={{ pathname: "/show/" + link }} >
					{/* BOX ====================================== */}
						<Entity
							className="annotation-toggle box"
							geometry={box.geometry}
							rotation={box.rotation}
							scale={box.scale}
							material={box.material}
							animation__rotate={box.animation__rotate}
							events={{ 
								click: this.handleClick, 
								}}
						/>
					{/* LABEL ==================================== */}
						<Entity
							className="annotation-label"
							geometry={label.geometry}
							text={Object.assign({},label.text, {value: data.label})}
							position={label.position}
							scale={label.scale}
							material={label.material}
							look-at="#camera"
							events={{ 
								click: this.handleClick, 
								}}
						/>
					{/* TEXT ===================================== */}
						{/* <Entity
							className="annotation-text"
							geometry={text.geometry}
							text={Object.assign({},text.text, {value: data.text})}
							position={text.position}
							scale={text.scale}
							material={text.material}
							visible='false'
							look-at="#camera"
							events={{
								mouseleave: this.handleMouseLeave
							}}
						/> */}
					</Link>
			</Entity>
		);
	}
}

AnnoLink.propTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

AnnoLink.defaultProps = {
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

export default withRouter(AnnoLink);
