import React from "react";
import Annotation from "./Annotation";
import AnnoLink from "./AnnoLink";
import { Entity } from "aframe-react";

const BuildAnnotations = props => {
	// const annos = props.annotations;
	// console.log('annos',annos);
	let annotationsToBuild = props.annotations;
	// console.log("annotationsToBuild", annotationsToBuild);

	return (
		<Entity>
			{annotationsToBuild.map((ea, index) => {
				{/* console.log('ea',ea); */}
				{/* console.log('ea.link',ea.link); */}
				if ( ea.link !== '' ) {
					console.log('ea.link',ea.link);
					return <AnnoLink data={ea} key={index} />
				}
				else {
					return <Annotation data={ea} key={index}/>;
				}
			})}
		</Entity>
	);
};
export default BuildAnnotations;

