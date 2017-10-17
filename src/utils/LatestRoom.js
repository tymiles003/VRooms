import React, { Component } from "react";
import roomAPI from "./roomAPI";

class LatestRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		// this.props.history.push(nextURL);
		roomAPI.getAllRooms().then(response => {
			console.log("getAllRooms ===>", response.data);

			let arr = response.data;
			// let latest = arr[arr.length - 1];
			let latest = arr.pop();
			console.log('latest',latest);
			console.log('latest._id',latest._id);

			this.props.history.push('/show/'+latest._id);
		});
	}
	
	render() {
		return (
			<div>
				Redirecting you to latest VRoom ...
			</div>
		)
	}
}
export default LatestRoom;
