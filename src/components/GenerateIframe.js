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
		let iframeHTML = `<iframe src="http://www.vrooms.us/show/${this.state.roomID}" style="height:100vh; width:100vw; display:none; position:fixed; top:0; left:0; zIndex:2147483646" allowfullscreen="yes" allowvr="yes" crossorigin="true"></iframe>`;

		return (
			<main className="expand-and-center">
				<h2 style={{ textAlign: 'center' }}>
					Embed a VRoom
				</h2>
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
				
				<section className="ws-code-section">
					<div className="code-wrap">
						<div className="pre-tag">
							<div className="code-tag">
								{'<iframe'}
								<span className="text-orange"> 
								{' src'}
								</span>
								{'='}
								<span className="green">
									{'"http://www.vrooms.us/show/'+ this.state.roomID +'" '}
								</span>
								{'style="height: 100vh; width: 100vw; position:fixed; top:0; left:0;" frameborder="0" allowfullscreen="yes" allowvr="yes" crossorigin="true">'}
								{'</iframe>'}
							</div>
						</div>
						
					</div>
				</section>
			</main>
		);
	} 
}
export default GenerateIframe;
