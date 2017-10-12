import React, { Component } from "react";
import { Entity } from "aframe-react";
import "aframe-look-at-component";
import "aframe-mouse-cursor-component";
import "aframe-animation-component";
import "aframe-rounded";
import RotatingBox from "./RotatingBox";
import Spotlight from "./Spotlight";

////////////////////////////////////////////////////
	// animation__rotate={{property: 'rotation', dur: 4000, loop: true, to: '360 360 360'}}
	const rotationAnimationData = { 
		property: 'rotation', 
		dur: 6000, 
		loop: true, 
		to: '360 360 360'
	};

	const wrapper = {
		scale: {
			x: 1.2,
			y: 1.2,
			z: 1.2,
		}
	}
	const box = {
		geometry: {
				primitive: "box",
				width: 0.2,
				height: 0.2,
				depth: 0.2
			},
		rotation: { 
				x: 0, 
				y: 0, 
				z: 0 
			},
		scale: { 
				x: 1, 
				y: 1, 
				z: 1 
			},
		material: { 
				color: "#f39c12", 
				opacity: 0.8 
			},
		animation__rotate: { 
				property: 'rotation', 
				dur: 6000, 
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
		position: { 
				x: 0, 
				y: 0.3, 
				z: 0 
			},
		scale: { 
				x: 3, 
				y: 3, 
				z: 3 
			},
		material: { 
				color: "#242424", 
				opacity: 0.7 
			},
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
		position: { 
				x: 0, 
				y: -0.24, 
				z: 0 
			},
		scale: { 
				x: 3, 
				y: 3, 
				z: 3 
			},
		material: { 
				color: "#ffffff", 
				opacity: 1,
				side: 'double'
			}
	};

////////////////////////////////////////////////////
class Annotation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			label: ""
		};
	}

	componentWillMount = () => {
		// console.log('this.props.key',this.props.key);
		console.log('this.props.idx',this.props.idx);

		let id = "anno-box-"+this.props.idx;
		console.log('id',id);
	}
// handleClick =====================================
	handleClick = event => {
		event.preventDefault();
		let el = event.target;
		let parent = el.parentElement;
		let boxEl = parent.querySelector('.anno-toggle');
		let labelEl = parent.querySelector('.anno-label');
		let textEl = parent.querySelector('.anno-text');
		let cursorEl = document.getElementById('cursor');

		labelEl.setAttribute( 'material',{'color': '#242424', opacity: 1} );
		boxEl.setAttribute( 'visible', false );
		textEl.setAttribute( 'visible', true );
		cursorEl.setAttribute('visible', false);
		
	};

// handleMouseEnter ================================
	handleMouseEnter = event => {
		event.preventDefault();
		console.log('---- mouse ENTER --->');
		let parent = event.target.parentElement;
		let labelEl = parent.querySelector('.anno-label');
		let boxEl = parent.querySelector('.anno-toggle');
		
		// boxEl.removeAttribute('animation__rotate');
		// boxEl.setAttribute('animation__rotate', rotationAnimationData )
		boxEl.setAttribute( 'material',{
			color: 'white', 
			opacity: 0.9,
		});
	};

// handleMouseLeave ================================
	handleMouseLeave = event => {
		event.preventDefault();
		console.log('---- mouse LEAVE --->');
		let parent = event.target.parentElement;
		this.resetAttributes(parent)
	};

// resetAttributes =================================
	resetAttributes = (parent) => {
		let boxEl = parent.querySelector('.anno-toggle');
		let labelEl = parent.querySelector('.anno-label');
		let textEl = parent.querySelector('.anno-text');
		let cursorEl = document.getElementById('cursor');

		labelEl.setAttribute( 'material', label.material );
		boxEl.setAttribute( 'visible', true );
		textEl.setAttribute( 'visible', false );
		cursorEl.setAttribute('visible', true);

		// boxEl.removeAttribute( 'animation__rotate' );
		// boxEl.setAttribute( 'animation__rotate', rotationAnimationData );
		boxEl.setAttribute( 'material', box.material )
	}

////////////////////////////////////////////////////
	render() {
		let { data } = this.props;
		let { xAxis, yAxis, zAxis } = this.props.data;
		let { primitive, textScale, textPos, height, width, tScale, tPos } = this.props;
		// let { to,position, label,textScale,textPos, primitive,height,width, color,opacity,side } = this.props;
		
		return (
			<Entity 
				position={{ x: xAxis, y: yAxis, z: zAxis }} 
				scale={wrapper.scale}
			>
			{/* LIGHT ==================================================*/}
						{/* primitive="a-light" */}
						{/* type="spot" */}
						{/* color="#fff" */}
				<Spotlight target={ "#anno-box-" + this.props.idx } />
				{/* <Entity
						id={'anno-light-'+this.props.idx}
						light={{
							type: 'spot',
							color: '#fff',
							angle: 5,
							target: "#anno-box-"+this.props.idx
						}}
						position={{ 
							x: 0, 
							y: 3, 
							z: 0 
						}}
					/> */}
				{/* BOX ====================================== */}
					<Entity
						className="anno-toggle box"
						id={"anno-box-"+this.props.idx}
						geometry={box.geometry}
						rotation={box.rotation}
						scale={box.scale}
						material={box.material}
						animation__rotate={box.animation__rotate}
						events={{ 
							click: this.handleClick, 
							mouseenter: this.handleMouseEnter, 
							mouseleave: this.handleMouseLeave, 
							}}
					/>
					
				{/* LABEL ==================================== */}
					<Entity
						className="anno-label"
						id={'anno-label-'+this.props.idx}
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
					<Entity
						className="anno-text"
						id={'anno-text-'+this.props.idx}
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
					/>

					{/* <Entity
						geometry={{ primitive, height, width }}
						material={{ color: "#9b59b6" }}
						className="anno-text"
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
