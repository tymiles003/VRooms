import React from "react";
import Annotation from "./Annotation";
import { Entity } from "aframe-react";

const BuildAnnotations = props => {
	// const annos = props.annotations;
	// console.log('annos',annos);
	let annotationsToBuild = props.annotations;
	console.log("annotationsToBuild", annotationsToBuild);

	return (
		<Entity>
			{annotationsToBuild.map((ea, index) => {
				return <Annotation data={ea} key={index}/>;
			})}
		</Entity>
	);
};
export default BuildAnnotations;

