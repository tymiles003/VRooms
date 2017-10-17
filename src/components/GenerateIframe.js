import React, { Component } from "react";
import ExternalRoomViewer from './common/ExternalRoomViewer';



class GenerateIframe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			roomID: ""
		};
	}

	handleInputChange = event => {
		event.preventDefault();
		let { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	render() {
		const iframeHTML =
			`<iframe id="vrooms-iframe"
	style="height: 90vh; width: 90vw; display: none; visibility: hidden; z-index:-9999" 
	src="http://www.vrooms.us/show/` +
			this.state.roomID +
			`"
	allowfullscreen="yes"
	allowvr="yes"
/>`;

		return (
			<div>
				<form className="ws-form">
					<div className="input-wrap">
						<input
							id="roomID"
							className="input ws-input"
							type="text"
							name="roomID"
							placeholder="Room ID"
							value={this.state.roomID}
							onChange={this.handleInputChange}
						/>
					</div>
				</form>
				
				<section className="ws-hero">
					<ExternalRoomViewer/>
				</section>
				<section className="ws-code-section">
					<div class="code-wrap">
						<pre>
							<code>{iframeHTML}</code>
						</pre>
					</div>
				</section>
			</div>
		);
	} 
}
export default GenerateIframe;
