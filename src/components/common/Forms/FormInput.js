import React, { Component } from "react";

// const FormInput = (props) => {
class FormInput extends Component {
	constructor(props) {
		super(props);
		this.handleChange=this.handleChange.bind(this);
	}

	handleChange = event => {
		const value = event.target.value;
		const name = event.target.name;

		this.props.onXChange(name,value);
	};
	
	render() {
		const value = this.props.value;
		const name = this.props.name;
		return (
			<div className="input-wrap input-full-width input-test ws-input-wrap">
				{/* <label className="legend">{this.props.label}</label> */}
				<input
					id="extracted_input"
					className="input ws-input"
					type="text"
					name={name}
					placeholder="extracted input"
					value={this.props.value}
					onChange={this.handleChange}
				/>
			</div>
			// <div className="input-wrap">
			// 	<label className="label"> {this.props.label} </label>
			// 	<div className="">
			// 		<input
			// 			className="input ws-input"
			// 			type={this.props.type}
			// 			placeholder={this.props.placeholder}
			// 			value={this.props.value}
			// 			onChange={this.props.handleInputChange}
			// 		>
			// 			{/* <span className="icon is-small is-left">
			// 				<i className="fa fa-user" />
			// 			</span>
			// 			<span className="icon is-small is-right">
			// 				<i className="fa fa-check" />
			// 			</span> */}
			// 		</input>
			// 	</div>
			// 	<p className="form-field-notification fineprint">
			// 		{this.props.fieldNotification}
			// 	</p>
			// </div>
		);
	}
}

export default FormInput;
