import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Entity, Scene } from "aframe-react";

import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';

class PreviewWindow extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			//	<div className="aframe-container">
			//		<div className="aframe-wrap">
			//<div className="preview-window embedded-window">
						<a-scene 
							embedded 
							vr-mode-ui="enabled: false"
							>
							<Entity
								primitive="a-sky"
								src="assets/img/gallery/test-world3.jpg"
							/>
						</a-scene>
			//</div>
			//		</div>
			//	</div>
		);
	}
}

export default PreviewWindow;
