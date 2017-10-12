import React, { Component } from "react";
import { Entity } from "aframe-react";
import "aframe-look-at-component";
import "aframe-mouse-cursor-component";
import "aframe-animation-component";
import "aframe-rounded";
import RotatingBox from "./RotatingBox";
import Spotlight from "./Spotlight";

const ReactToastr = require("react-toastr");
const { ToastContainer } = ReactToastr; // This is a React Element.

let ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

////////////////////////////////////////////////////
	// animation__rotate={{property: 'rotation', dur: 4000, loop: true, to: '360 360 360'}}
	const rotationAnimationData = { 
		property: 'rotation', 
		dur: 6000, 
		loop: true, 
		to: '360 360 360'
	};
	// animation__scale="property: scale; dir: alternate; dur: 200;
	// easing: easeInSine; loop: true; to: 1.2 1 1.2"
	const wrapScale = 1;
	const wrapper = {
		scale: { x: wrapScale, y: wrapScale, z: wrapScale, }
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
	const upScale = 1.5;
	const scaleUp = {
		property: 'scale',
		dur: 300,
		delay: 0,
		loop: false,
		to: { x: upScale, y: upScale, z: upScale }
	};

	const downScale = 1;
	const scaleDown = {
		property: 'scale',
		dur: 1000,
		delay: 0,
		loop: false,
		to: { x: downScale, y: downScale, z: downScale }
	};


////////////////////////////////////////////////////
class Annotation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			label: "",
			count: 0
		};
	}

	addAlert = this.addAlert.bind(this);
    clearAlert = this.clearAlert.bind(this);

    addAlert(message) {
        this.refs.container.success(message, `Success`, {
            timeOut: 3000,
            extendedTimeOut: 2000,
            closeButton: true
        });
    }

    clearAlert() {
        this.refs.container.clear();
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
		let parent = event.target.parentElement;
		let labelEl = parent.querySelector('.anno-label');
		let boxEl = parent.querySelector('.anno-toggle');
		
		// boxEl.setAttribute( 'material',{
		// 	color: 'white', 
		// 	opacity: 0.9,
		// });

		// Box Scale
		boxEl.removeAttribute( 'animation__scale' );
		boxEl.setAttribute( 'animation__scale', scaleUp );

		// let animation__scale = boxEl.getAttribute("animation__scale");
		// console.log('animation__scale.to ===>', animation__scale.to);

	};

// handleMouseLeave ================================
	handleMouseLeave = event => {
		event.preventDefault();

		let parent = event.target.parentElement;

		// reset non-animated attributes
		this.resetAttributes(parent)

	};

// handleBoxMouseLeave ================================
	handleBoxMouseLeave = event => {
		event.preventDefault();
		const et = event.target;
		let parent = event.target.parentElement;
		let boxEl = parent.querySelector('.anno-toggle');
		
		
		et.removeAttribute( 'animation__scale' );
		et.setAttribute( 'animation__scale', scaleDown );

		// let animation__scale = boxEl.getAttribute("animation__scale");
		// console.log('animation__scale.to ===>', et.getAttribute("animation__scale").to);

		// reset non-animated attributes
		// this.resetAttributes(parent)

	};


// handleHover =====================================
	handleHover = event => {
		event.preventDefault();
		
		if (this.props.data.text=="Blue milk"){
			this.setState({
				count: this.state.count+1
			})
		}

		if (this.state.count>10){
			this.addAlert("Would you like some blue ice cream and yogurt too?");			
		}
	};

// resetAttributes =================================
	resetAttributes = (parent) => {
		// console.log('---- resetAttributes --->');
		let boxEl = parent.querySelector('.anno-toggle');
		let labelEl = parent.querySelector('.anno-label');
		let textEl = parent.querySelector('.anno-text');
		let cursorEl = document.getElementById('cursor');

		labelEl.setAttribute( 'material', label.material );
		boxEl.setAttribute( 'visible', true );
		textEl.setAttribute( 'visible', false );
		cursorEl.setAttribute('visible', true);


		// Box Rotation ----
		// boxEl.removeAttribute( 'animation__rotate' );
		// boxEl.setAttribute( 'animation__rotate', rotationAnimationData );

		// Box Material (color) ----
		boxEl.setAttribute( 'material', box.material );

		// Box Scale ----
		// boxEl.removeAttribute( 'animation__scale' );
		// boxEl.setAttribute( 'scale', box.scale )
	}

////////////////////////////////////////////////////
	render() {
		let { data } = this.props;
		let { xAxis, yAxis, zAxis } = this.props.data;
		let { primitive, textScale, textPos, height, width, tScale, tPos } = this.props;
		// let { to,position, label,textScale,textPos, primitive,height,width, color,opacity,side } = this.props;
		
		let tailoredWidth = ( data.label.length * 0.02 ) + 0.07;
		let label = {
			geometry: {
					primitive: 'plane',
					height: 0.08,
					width: tailoredWidth,
				},
			text: {
					align: 'center',
					color: 'white',
					width: 1,
				},
			position: { x: 0, y: 0.3, z: 0 },
			scale: { x: 3, y: 3, z: 3 },
			material: { color: "#242424", opacity: 0.7 },
		}


		return (
			<Entity 
				position={{ x: xAxis, y: yAxis, z: zAxis }} 
				scale={wrapper.scale}
			>

  			<ToastContainer
					toastMessageFactory={ToastMessageFactory}
					ref="container"
					className="toast-top-right"
				/>

				{/* LIGHT ==================================================*/}
					<Spotlight target={ "#anno-box-" + this.props.idx } />
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
							mouseleave: this.handleBoxMouseLeave, 
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
