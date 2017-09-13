import React, { Component } from "react";

// const FormField = (props) => {
class FormField extends Component {
		state = {
			name: "",
			value: "",
		};

	handleInputChange = event => {
		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	};
	
	render() {
		return (
			<div className="field">
				<label className="label"> {this.props.label} </label>
				<div className="">
					<input
						className="input ws-input"
						type={this.props.type}
						placeholder={this.props.placeholder}
						value={this.props.value}
						onChange={this.props.handleInputChange}
					>
						{/* <span className="icon is-small is-left">
							<i className="fa fa-user" />
						</span>
						<span className="icon is-small is-right">
							<i className="fa fa-check" />
						</span> */}
					</input>
				</div>
				<p className="form-field-notification fineprint">
					{this.props.fieldNotification}
				</p>
			</div>
		);
	}
}

export default FormField;
