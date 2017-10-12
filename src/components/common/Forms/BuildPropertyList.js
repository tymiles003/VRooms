import React from "react";
import { Entity } from "aframe-react";

const BuildPropertyList = props => {
	let propertyList = props.data;
	console.log("propertyList", propertyList);

	return (
		<Entity>
			{propertyList.map((ea, index) => {
				let num = index+1;

				return (
				<li key={index} >
					<a href="#" id={ea._id} >{ ea.street }</a>
				</li>
				);
				
			})}
		</Entity>
	);
};
export default BuildPropertyList;
