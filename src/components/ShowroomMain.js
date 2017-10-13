// import 'aframe';
// import "babel-polyfill";
import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Entity, Scene } from "aframe-react";
// import { Helmet } from "react-helmet";
// import Showroom from "./Showroom";
import AnnotationAframe from "./aframe/AnnotationAframe";
import Cloak from "./common/Elements/Cloak";

import propertyAPI from "../utils/propertyAPI";
import roomAPI from "../utils/roomAPI";

import io from "socket.io-client";
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
            message: 1,
            roomID: ""
        };
    }

    // componentDidMount ===============================
    componentDidMount = () => {
			console.log('---- componentDidMount (ShowroomMain) --->');
        // this.getProperty(); // not super essential. for extra info on page.

        /**
         * While browser tab getting closed, below event listener is called.
         */
        window.addEventListener("unload", ev => {
            ev.preventDefault();

            /**
             * Close a connection, if any browser tab is closed or page is refreshed.
             */
            socket.emit("close", {
                room: this.state.roomID
            });
        });

        socket.emit("open", { room: this.state.roomID });

        /** 
         * Message reeived from server
         */
        socket.on("message", data => {
            console.log("Message ==== ", data);
            this.setState({ message: data });
        });

        if (this.state.roomID) {
            console.log("rID", this.state.roomID);

            // this.setState({roomID})

            roomAPI.getRoom(this.state.roomID).then(response => {
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
    };
    // portAframe =============================
    portAframe = aframeState => {
        this.setState(aframeState);
    };

    componentWillMount() {
		console.log('---- componentWillMount (ShowroomMain) --->');
        let rID;
        let propsID = this.props.roomID;
        let urlID = this.props.match.params.roomID;

        if (urlID) {
            rID = urlID;
        } else {
            rID = propsID;
        }
        this.setState({
            roomID: rID
        });

        
    }
    // componentWillUnmount ============================
    componentWillUnmount() {
        socket.emit("close", {
            room: this.state.roomID
        });
    }
    //==================================================
    render() {
        return (
            <div className="aframe-wrap">
                <Cloak />
                <AnnotationAframe
                    inCreationMode={false}
                    port={this.portAframe}
                    annotations={this.state.annotations}
                    pano_url={this.state.pano_url}
                    message={this.state.message}
                />
                <span className="fixed-info">
                    {this.state.message} viewer(s) currently
                </span>

								<a 
									id="exit-btn" 
									className='ws-btn' 
									href='/'
								>
									<i className="fa fa-angle-left"/>
									Home
								</a>
            </div>
        );
    }
}

export default ShowroomMain;
