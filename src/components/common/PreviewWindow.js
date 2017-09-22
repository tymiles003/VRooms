import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { Entity, Scene } from "aframe-react";

// import 'aframe';
// import 'aframe-animation-component';
// import 'aframe-particle-system-component';
// import 'babel-polyfill';

class PreviewWindow extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className="aframe-container">
					preview window
			</div>
		);
	}
}

export default PreviewWindow;
