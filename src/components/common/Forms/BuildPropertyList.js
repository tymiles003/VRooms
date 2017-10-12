import React, {Component} from "react";




class BuildPropertyList extends Component {
	constructor(props){
		super(props);
		this.state={}
	}

// handleListSelection =====================================
	handleListSelection = (event) => {
		event.preventDefault();
		console.log('---- handleListSelection --->');
		
		let prev = document.querySelector('.selected.collection-link');
		if ( prev ) {
			prev.classList.remove('selected')
		}
		
		let et = event.target;
		et.classList.add('selected');
		let id = et.getAttribute('id');
		console.log('id',id);

		this.props.port({
			id
		})
	}

// return //////////////////////////////////////////////////
	render(){
		return (
			<ol className="ws-link-collection">
				{this.props.data.map((ea, index) => {
					let num = index+1;

					return (
					<li key={index} >
						<a 
							href="#"
							className="collection-link"
							id={ea._id}
							onClick={this.handleListSelection}	
						>
							{ ea.street }
						</a>
					</li>
					);
					
				})}
			</ol>
		);
}
};
export default BuildPropertyList;
