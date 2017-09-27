import React from 'react';

const Cloak = (props) => {
	return (
		<div className="ws-cloak">
			<div className="cloak-content">
				{/* <img className="preloader" src="assets/graphics/rotating-4-squares.gif"/> */}
				<img className="preloader" src="assets/graphics/rubiks-loader.gif"/>
				<h3 className="headline">Loading your VRoom...</h3>
			</div>
		</div>
	)
}
export default Cloak;