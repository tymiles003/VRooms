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
			accepted: [],
			rejected: [],
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

	onDrop = (acceptedFiles,rejectFiles, event) => {
		console.log('event.target',event.target);

		console.log(">>> onDrop");
		const file = acceptedFiles[0];

		const acceptedTypes = ['image/jpeg','image/png'];
		const mimetype = file.type;
		
		// Continue if file's type is accepted
		if (acceptedTypes.indexOf(mimetype) >= 0){
			const reader = new FileReader();
			reader.onload = () => {
				const raw = reader.result;
				let bits = raw;
				this.setState({
					bits: bits,
					fileStatus: 'photo-ready',
					fileName: file.name,
					fileSize: file.size,
					file,
				});
				// Send this.state to parent handler, which inserts 
				// all of these states into the parent's state
				this.props.handleFileUpload(this.state);
			};
			reader.onabort = () => console.log("file reading was aborted");
			reader.onerror = () => console.log("file reading has failed");
			if (file) {
				reader.readAsDataURL(file);
			}
		}
		else {
			alert('invalid file type');
		}
	};

	render() {
		return (
			<div className={'filedrop-wrap ' + this.props.id }>
				<Dropzone 
					className="dropzone" 
					onDrop={this.onDrop}
					id={this.props.id}
				>
				{ this.props.id === 'pano-upload' ? (
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
				):(
					<div className="dropzone-content">
						<div className="feature-icon">
							<i className="fa fa-picture-o" aria-hidden="true"></i>
							{/* <img className="img-icon" src="/assets/graphics/360-photo-o-black.svg" /> */}
						</div>
						<div className="direction-wrap">
							<h4 className="direction-headline"> Upload Thumbnail </h4>
							<p className="direction-subheadline">
								
							</p>
						</div>
					</div>
				)}
				</Dropzone>
				<figure
					id="filedrop-preview"
					className={"filedrop-preview img-canvas " + this.state.fileStatus}
					style={{ backgroundImage: `url("${this.state.bits}")` }}
				/>
			</div>
		);
	}
}

export default FileDrop;