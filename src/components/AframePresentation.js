import React, { Component } from "react";
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';

const imageSlides = [
	{
		title: 'user',
		file: 'user'
	},
	{
		title: 'camera',
		file: 'camera'
	},
	{
		title: 'raycaster',
		file: 'raycaster'
	},
	{
		title: 'sky',
		file: 'sky'
	},
	{
		title: 'entities',
		file: 'entities'
	},
	{
		title: 'positioning',
		file: 'positioning'
	},
	{
		title: 'canvas',
		file: 'canvas'
	}
]

const AframePresentation = (props) => {

	const settings = {
		dots: false,
		infinite: false,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<div className="ws-presentation">
			<Helmet>
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			</Helmet>
			<Slider {...settings}>
				{imageSlides.map( (ea,index) => {
					let {title,file} = ea;
					let src = `assets/slides/aframe-deck-${ea.file}.png`;

					return (
						<div className="ws-slide">
							{/* <h3 className="slide-label">{ea.title}</h3> */}
							<div className="slide-fig">
								<img className="slide-pic" src={src} key={index} />
							</div>
						</div>
					)
				})}
			</Slider>
		</div>
	);

}
export default AframePresentation;


// import React, { Component } from "react";
// import Slider from 'react-slick';
// import { Helmet } from 'react-helmet';

// class AframePresentation extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 	}

// 	render() {

// 		const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };

// 		return (
// 			<div>
// 				<Helmet>
// 					<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
// 					<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
// 				</Helmet>
// 				<Slider {...settings}>
//         <div><h3>1</h3></div>
//         <div><h3>2</h3></div>
//         <div><h3>3</h3></div>
//         <div><h3>4</h3></div>
//         <div><h3>5</h3></div>
//         <div><h3>6</h3></div>
//       </Slider>
// 			</div>
// 		);
// 	}
// }
// export default AframePresentation;
