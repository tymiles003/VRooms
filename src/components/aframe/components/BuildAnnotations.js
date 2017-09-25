import React from 'react';
import Annotation from './Annotation';
import {Entity} from 'aframe-react';

const BuildAnnotations = (props) => {

	// const annos = props.annotations;
	// console.log('annos',annos);
	let annotationsToBuild = props.annotations;
	console.log('annotationsToBuild',annotationsToBuild);

	return (
		<Entity>
			{ annotationsToBuild.map( (ea,index) => {

				return(
					<Annotation data={ea} key={ea.label} />
				)
			})}
		</Entity>
	)
}
export default BuildAnnotations;

// {this.props.annotations.map((ea, index) => (
// 	<Annotation data={ea} key={index} />
// ))}