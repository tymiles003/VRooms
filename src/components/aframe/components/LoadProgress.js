import React, { Component } from "react";
// import ProgressBar from "react-progressbar.js";

class LoadProgress extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 0
		};
	}

	
componentWillReceiveProps = (nextProps) => {
	if (nextProps.progress !== this.props.progress) {
		this.setState(nextProps.progress)
	}
}

	render() {
		let Circle = ProgressBar.Circle;
		let options = {
			strokeWidth: 2
		};
		let containerStyle = {
				width: '24vw',
				height: '24vw',
				'max-width': '200px',
				'max-height': '200px',
				'min-width': '81px',
				'min-height': '81px',

		};
		return (
			<Circle
				progress={this.state.progress}
				text={"test"}
				options={options}
				initialAnimate={true}
				containerStyle={containerStyle}
				containerClassName={".progressbar"}
			/>
		);
	}
}
export default LoadProgress;
