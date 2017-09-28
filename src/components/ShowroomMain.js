// import 'aframe';
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Entity, Scene } from "aframe-react";
import { Helmet } from "react-helmet";
import Showroom from "./Showroom";
import io from 'socket.io-client';
import propertyAPI from "../utils/propertyAPI";

const socket = io();


// Showcasing gallery list of real estate
class ShowroomMain extends React.Component {
    constructor(props) {
        super(props);

        //init states
        this.state = {
            selectedProperty: [],
            room_url: "",
            message:1
        };
    }

    componentDidMount() {
    /**
     * While browser tab getting closed, below event listener is called.
     */
    window.addEventListener("beforeunload", (ev) => {  
      ev.preventDefault();

      /**
       * Close a connection, if any browser tab is closed or page is refreshed.
       */
      socket.emit('close', {
          room: this.props.location.state.property.rooms[0].pano_url
        });
      });

      document.addEventListener("pagehide", (ev) => {  
      ev.preventDefault();

      /**
       * Close a connection, if any browser tab is closed or page is refreshed.
       */
      socket.emit('close', {
          room: this.props.location.state.property.rooms[0].pano_url
        });
      });

      socket.emit('open', {room: this.props.location.state.property.rooms[0].pano_url});

      /** 
       * Message reeived from server
       */
      socket.on('message', (data) => {
          console.log("Message ==== ",data);
          this.setState({message:data});
      });
  }

    componentWillMount() {
        // To pass/retrieve id from showcase gallery
        //this.getSelectedProperty("59c53629778a8b0012433cf4");

        // Set property using location object passed from <Link>
        console.log("this.props.location: ", this.props.location);
        console.log("this.props.location.state.property: ", this.props.location.state.property);
        // this.setState({
        //     selectedProperty: this.props.location.state.property
        // });
    }

    getSelectedProperty = propID => {
        propertyAPI.getProperty(propID).then(response => {
            this.setState({
                selectedProperty: response.data,
                room_url: response.data[0].thumbnail_url
            });
        });
    };


    componentWillUnmount(){
      socket.emit('close', {
          room: this.props.location.state.property.rooms[0].pano_url
        });
  }
    

    render() {
        return (
            <span>
                <span style={{position:"absolute", bottom:0,zIndex:1000, left:0}}>Number of People Viewing this Property: {this.state.message}</span>
                <Showroom 
                selectedProperty={(this.props.location.state.property) ? (this.props.location.state.property) : ""} 
                message={this.state.message}
                />
            </span>       
        );
    }
}

export default ShowroomMain;
