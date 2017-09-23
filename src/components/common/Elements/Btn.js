////////////////////////////////////////////////////
// Btn
//--------------------------------------------------
//
// + link styled as a button.
// + not to be confused with Button, which is
//   the <button> element.
//
////////////////////////////////////////////////////

import React, { Component } from "react";
import { Link } from "react-router-dom";

const propScheme = {
	href: "#!",
	theme: "primary|secondary|white|black|light|dark|success|danger|info|warning|disabled",
	flags: [],
	isOutlined: false,
	isDisabled: false,
	isHovered: false,
	isFocused: false,
	isActive: false,
	isInverted: false,
	isTextOnly: false,
	hasIcon: false,
	iconLocation: "left|right",
	icon: "e.g. github, check-circle, check-circle-o",
	classes: [] // additional classes you want to attach
};
const allAvailableFlags = [
	"isOutlined",
	"isDisabled",
	"isHovered",
	"isFocused",
	"isActive",
	"isInverted",
	"isTextOnly",
	"hasIcon"
];


class Btn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			className: '',
		};

		// this.buildClasses();
	}

	getFlags = (props) => {
		let flags = [];
		
		// Loop through props object
		for (let key in props) {
			// Determine if this key belongs to a flag by
			// checking if key is found in allAvailableFlags
			let isFlag = allAvailableFlags.indexOf(key) !== -1;

			if (isFlag) {
				let isFlagged = props[key]; // Get the bool value for this flag, 

				// if true, then push key to flags array.
				if (isFlagged) {
					flags.push(key)		
					
					// Special handling when hasIcon
					// the additional condition isFlagged is redundant since
					// we are inside isFlagged conditional, but I still listed
					// it for easier understanding and extra protection
					// if (key === 'hasIcon' && isFlagged) {
					// 	buildIcon()
					// }
				}
			}
			else if (key === 'icon') {
				let icon = props[key];
				if (icon.trim().length !== 0){
					flags.push('hasIcon')
				}
			}
			else if (key === 'iconLocation') {
				let iconLocation = props[key];
				if (iconLocation.trim().length !== 0){
					flags.push('ws-icon-'+iconLocation)
				}
			}
		}
		
		// console.log(flags);
		return flags;
	}

	buildIcon = () => {
		let {icon, iconLocation} = this.props;

		// Build icon if icon is specified
		if(icon) {
			let className = `fa fa-${icon}`;
			if (iconLocation) {
				className += ` ws-icon-${iconLocation}`
			}
			
			return (
				<i className={className} ></i>
			)
		}
		// else {
		// 	return;
		// }
	}

	buildClasses = () => {
		let { theme = 'primary', classes } = this.props;
		let defaultClasses = ["ws-btn"];
		let classArr = [`ws-${theme}`];

		// Get Flags and add to classArr
		let flags = this.getFlags(this.props);
		for (let i=0; i<flags.length; i++){
			let flag = flags[i];
			// Special handling for icon flag
			// if (flag === 'hasIcon') {
			// 	classArr.push('ws-has-icon');
			// }
			// else {
				classArr.push(flag)
			// }
		}
		
		let allClasses = defaultClasses.concat(classArr,classes);
		let classNameOutput = allClasses.join(' ');
		// console.log('classNameOutput',classNameOutput);

		this.setState({
			className: classNameOutput
		})
		// return classNameOutput;
	};

	componentWillMount() {
		this.buildClasses();
	}
	render() {
		// const { classes, icon } = this.props;
		return (
			<a 
				id={this.props.id}
				href={this.props.href || '#!'}
				className={this.state.className} 
			>
				{this.buildIcon()}
				{this.props.text}
			</a>
		);
	}
}
export default Btn;
