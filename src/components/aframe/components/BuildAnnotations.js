import React from "react";
import { withRouter } from 'react-router-dom';
import Annotation from "./Annotation";
import AnnoLink from "./AnnoLink";
import ConstAnnoLink from "./ConstAnnoLink";
import { Entity } from "aframe-react";

const BuildAnnotations = ( props ) => {
	// const annos = props.annotations;
	// console.log('annos',annos);
	let annotationsToBuild = props.annotations;
	console.log("annotationsToBuild", annotationsToBuild);

	return (
		<Entity>
			{annotationsToBuild.map((ea, index) => {
				{/* console.log('ea',ea); */}
				{/* console.log('ea.link',ea.link); */}
				{/* if ( ea.link !== '' ) { */}
				if ( ea.link ) {
					{/* return <ConstAnnoLink data={ ea } key={ index } /> */}
					return <AnnoLink location={props.location} history={props.history} data={ ea } key={ index } />
					{/* let LinkRouter = withRouter(AnnoLink); */}
					{/* return <LinkRouter  data={ea}  key={index} />; */}
				}
				else {
					return <Annotation data={ea} key={index}/>;
				}
			})}
		</Entity>
	);
};
export default withRouter(BuildAnnotations);

