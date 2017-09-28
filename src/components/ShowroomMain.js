// import 'aframe';
// import "babel-polyfill";
import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Entity, Scene } from "aframe-react";
// import { Helmet } from "react-helmet";
// import Showroom from "./Showroom";
import AnnotationAframe from "./aframe/AnnotationAframe";
import Cloak from './common/Elements/Cloak';

import propertyAPI from "../utils/propertyAPI";
import roomAPI from "../utils/roomAPI";

import io from 'socket.io-client';
const socket = io();

// Showcasing gallery list of real estate
class ShowroomMain extends React.Component {
	constructor(props) {
		super(props);

		//init states
		this.state = {
			selectedProperty: [],
			room_url: "",
			pano_url: "",
			annotations: [],
			message: 1
		};
	}

	// componentWillMount() {
	// 	// To pass/retrieve id from showcase gallery
	// 	//this.getSelectedProperty("59c53629778a8b0012433cf4");

	// 	// Set property using location object passed from <Link>
	// 	console.log("this.props.location: ", this.props.location);
	// 	console.log(
	// 		"this.props.location.state.property: ",
	// 		this.props.location.state.property
	// 	);
	// 	this.setState({
	// 		selectedProperty: this.props.location.state.property
	// 	});
	// }

	// componentDidMount ===============================
	componentDidMount = () => {
		// this.getProperty(); // not super essential. for extra info on page.
		

		 /**
     * While browser tab getting closed, below event listener is called.
     */
    window.addEventListener("unload", (ev) => {  
			ev.preventDefault();
			
    /**
     * Close a connection, if any browser tab is closed or page is refreshed.
     */
      socket.emit('close', {
          room: this.props.location.state.property.rooms[0]._id
        });
	});
		
      socket.emit('open', {room: this.props.location.state.property.rooms[0]._id});

      /** 
       * Message reeived from server
       */
      socket.on('message', (data) => {
          console.log("Message ==== ",data);
          this.setState({message:data});
      });
	};
// portAframe =============================
	portAframe = aframeState => {
		this.setState(aframeState);
	};
// getSelectedProperty =====================
	getSelectedProperty = propID => {
		propertyAPI.getProperty(propID).then(response => {
			this.setState({
				selectedProperty: response.data,
				room_url: response.data[0].thumbnail_url
			});
		});
	};

componentWillMount(){

    let rID;
		let propsID = this.props.roomID;
		let urlID = this.props.match.params.roomID;

		if (urlID) {
			rID = urlID;
		} else {
			rID = propsID;
		}

        if(rID){
            console.log("rID", rID);

            // this.setState({roomID})

            roomAPI.getRoom(rID).then(response => {
                console.log(response);
                let { roomID, pano_url, annotations } = response.data[0];
                console.log("roomAPI room response >>>>", response.data[0]);
                console.log("pano_url >>>>", pano_url);
                console.log("annotations >>>>", annotations);

                this.setState({
                    roomID,
                    pano_url,
                    annotations
                });
            });
        }

}    
// componentWillUnmount ============================
componentWillUnmount(){
	socket.emit('close', {
			room: this.props.location.state.property.rooms[0]._id
		});
}
//==================================================
	render() {
		return (
			
			
				<div className="aframe-wrap">
          <Cloak/>
					<AnnotationAframe
						inCreationMode={false}
						port={this.portAframe}
						annotations={this.state.annotations}
						pano_url={this.state.pano_url}
						selectedProperty={(this.props.location.state.property) ? (this.props.location.state.property) : ""} 
						message={this.state.message}
					/>
					<span className="fixed-info"># {this.state.message} viewer(s) online</span>
				</div>
			
		);
	}
}

export default ShowroomMain;
	
  //   constructor(props) {
  //       super(props);

  //       //init states
  //       this.state = {
  //           selectedProperty: [],
  //           room_url: "",
  //           message:1
  //       };
  //   }

  //   componentDidMount() {
  //   /**
  //    * While browser tab getting closed, below event listener is called.
  //    */
  //   window.addEventListener("unload", (ev) => {  
  //     ev.preventDefault();

  //     /**
  //      * Close a connection, if any browser tab is closed or page is refreshed.
  //      */
  //     socket.emit('close', {
  //         room: this.props.location.state.property.rooms[0].pano_url
  //       });
  //     });

  //   //   document.addEventListener("pagehide", (ev) => {  
  //   //   ev.preventDefault();

  //   //   /**
  //   //    * Close a connection, if any browser tab is closed or page is refreshed.
  //   //    */
  //   //   socket.emit('close', {
  //   //       room: this.props.location.state.property.rooms[0].pano_url
  //   //     });
  //   //   });

  //     socket.emit('open', {room: this.props.location.state.property.rooms[0].pano_url});

  //     /** 
  //      * Message reeived from server
  //      */
  //     socket.on('message', (data) => {
  //         console.log("Message ==== ",data);
  //         this.setState({message:data});
  //     });
  // }

    // componentWillMount() {
    //     // To pass/retrieve id from showcase gallery
    //     //this.getSelectedProperty("59c53629778a8b0012433cf4");

    //     // Set property using location object passed from <Link>
    //     console.log("this.props.location: ", this.props.location);
    //     console.log("this.props.location.state.property: ", this.props.location.state.property);
    //     // this.setState({
    //     //     selectedProperty: this.props.location.state.property
    //     // });
    // }

  //   getSelectedProperty = propID => {
  //       propertyAPI.getProperty(propID).then(response => {
  //           this.setState({
  //               selectedProperty: response.data,
  //               room_url: response.data[0].thumbnail_url
  //           });
  //       });
  //   };


  //   componentWillUnmount(){
  //     socket.emit('close', {
  //         room: this.props.location.state.property.rooms[0].pano_url
  //       });
  // }
    

    // render() {
    //     return (
    //         <span>
    //             <span style={{position:"absolute", bottom:0,zIndex:1000, left:0}}>Number of People Viewing this Property: {this.state.message}</span>
    //             <Showroom 
    //             selectedProperty={(this.props.location.state.property) ? (this.props.location.state.property) : ""} 
    //             message={this.state.message}
    //             />
    //         </span>       
    //     );
    // }
// return <Showroom selectedProperty={(this.props.location.state.property) ? (this.props.location.state.property) : ""} />;
