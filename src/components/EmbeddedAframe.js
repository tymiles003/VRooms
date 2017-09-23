import React, {Component} from "react";
import Aframe from "./aframe/Aframe";
// import {Helmet} from 'react-helmet';


// Fetch photos for this property and load the assets onto the page

let roomPhotos = [
	{
		name: "kitchen",
		id: "kitchen",
		pano_url: "assets/img/gallery/test-world6.jpg",
		annotations: [
			{
				label: "living room",
				link: "living-room",
				xAxis: -2,
				yAxis: 2,
				zAxis: -5
			},
			{
				label: "bathroom",
				link: "bathroom",
				xAxis: 0,
				yAxis: 2,
				zAxis: -5
			},
			{
				label: "fridge",
				text: "Fridgey McFridgeface",
				xAxis: 2,
				yAxis: 2,
				zAxis: -5
			}
		]
	},
	{
		name: "bathroom",
		id: "bathroom",
		pano_url: "assets/img/gallery/test-world1.jpg",
		annotations: [
			{
				label: "living room",
				link: "living-room",
				xAxis: -2,
				yAxis: 2,
				zAxis: -5
			},
			{
				label: "kitchen",
				link: "kitchen",
				xAxis: 0,
				yAxis: 2,
				zAxis: -5
			},
			{
				label: "bath",
				text: "Bathy McBathface",
				xAxis: 2,
				yAxis: 2,
				zAxis: -5
			}
		]
	},
	{
		name: "Living Room",
		id: "living-room",
		pano_url: "assets/img/gallery/test-world7.jpg",
		annotations: [
			{
				label: "Bathroom",
				link: "bathroom",
				xAxis: -2,
				yAxis: 2,
				zAxis: -5
			},
			{
				label: "kitchen",
				link: "kitchen",
				xAxis: 0,
				yAxis: 2,
				zAxis: -5
			},
			{
				label: "TV",
				text: "Stevie, the TV",
				xAxis: 2,
				yAxis: 2,
				zAxis: -5
			}
		]
	}
];


class AframePage extends React.Component {
	constructor(props){
		super(props);
		this.state;

	}

	render() {
		return (
			<div className="aframe-wrap">
				<Aframe propID='59c53629778a8b0012433cf4' photos={roomPhotos} />
			</div>
		);
	}
}

export default AframePage;

// <Helmet>
// <link href="/css/aframe.css" rel="stylesheet"/>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/aframe/0.6.1/aframe-master.min.js"></script>
// </Helmet>
