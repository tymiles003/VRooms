import React, { Component } from "react";
import ReactDOM from "react-dom";
import API from "../../../utils/API";
import Dropzone from "react-dropzone";

class FileDrop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: "",
			bits: "",
			fileStatus: "no-file"
		};
	}

	handleInputChange = event => {
		event.preventDefault();
		const value = event.target.value;
		const name = event.target.name;
		console.log(name, value);

		this.setState({
			[name]: value
		});
	};

	onDrop = acceptedFiles => {
		console.log(">>> onDrop");
		console.log("acceptedFiles.length", acceptedFiles.length);
		const file = acceptedFiles[0];

		const reader = new FileReader();
		reader.onload = () => {
			const raw = reader.result;
			let bits = raw;

			this.setState({
				bits: bits,
				fileStatus: "photo-ready"
			});
		};
		reader.onabort = () => console.log("file reading was aborted");
		reader.onerror = () => console.log("file reading has failed");
		if (file) {
			reader.readAsDataURL(file);
		}
	};

	render() {
		return (
			<div className="filedrop-wrap">
				<Dropzone onDrop={this.onDrop.bind(this)} className="dropzone">
					<div className="dropzone-content">
						<div className="feature-icon">
							{/* <i className="fa fa-picture-o"></i> */}
							<img
								className="img-icon"
								src="/assets/graphics/360-photo-o-black.svg"
							/>
							{/* <img className='img-icon' src="/assets/graphics/360-photo-black.svg"></img> */}
							{/* <img className='img-icon' src="/assets/graphics/360-photo-white.svg"></img> */}
						</div>
						<div className="direction-wrap">
							<h4 className="direction-headline">
								{" "}
								Drag & Drop{" "}
							</h4>
							<p className="direction-subheadline">
								or click to browse your files.
							</p>
						</div>
					</div>
				</Dropzone>
				{this.state.files.map(f => ( <span key={f.name}> {f.name} - {f.size} bytes </span> ))}
				<figure
					id="filedrop-preview"
					className={"img-canvas " + this.state.fileStatus}
					style={{ backgroundImage: `url("${this.state.bits}")` }}
				/>
			</div>
		);
	}
}

export default FileDrop;
