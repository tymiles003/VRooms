import React from "react";
import Aframe from './aframe/Aframe';
// import {Helmet} from 'react-helmet';

// Fetch photos for this property and load the assets onto the page
let roomPhotos = [];


const AframePage = props => {
	//   render() {
	return (
		<div className="aframe-wrap">

			<Aframe photos={roomPhotos}/>

		</div>
	);
};

export default AframePage;


// <Helmet>
// <link href="/css/aframe.css" rel="stylesheet"/>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/aframe/0.6.1/aframe-master.min.js"></script>
// </Helmet>