import React, { Component } from "react";
import ReactDOM from "react-dom";
import API from "../../../utils/API";
import Dropzone from "react-dropzone";

class FileDrop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fileStatus: "no-file",
			file: "",
			bits: "",
			files: [],
			accepted: [],
			rejected: [],
		};

		// this.onDrop = this.onDrop.bind(this)
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

			// files: acceptedFiles,
			this.setState({
				bits: bits,
				fileStatus: 'photo-ready',
				fileName: file.name,
				fileSize: file.size,
			});
			this.props.handleFileUpload(
				this.state.bits, 
				this.state.fileStatus,
				this.state.fileName,
				this.state.fileSize
			);
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
				<Dropzone className="dropzone" onDrop={this.onDrop.bind(this)} >
				{/* <Dropzone 
					className="dropzone"
					accept="image/jpeg, image/png"
					onDrop={(accepted, rejected) => {
						this.onDrop.bind(this);
						this.setState({ accepted, rejected }); 
					}}
				> */}
					<div className="dropzone-content">
						<div className="feature-icon">
							<img className="img-icon" src="/assets/graphics/360-photo-o-black.svg" />
						</div>
						<div className="direction-wrap">
							<h4 className="direction-headline"> Drag & Drop </h4>
							<p className="direction-subheadline">
								or click to browse your files.
							</p>
						</div>
					</div>
				</Dropzone>
				{this.state.files.map(f => {
					{/* this.setState({
						filename: f.name,
						filesize: f.size,
					}) */}
					return ( 
						<span key={f.name}> {f.name} - {f.size} bytes </span> 
					)
				})}
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
