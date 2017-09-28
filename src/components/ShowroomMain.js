// import 'aframe';
import "babel-polyfill";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Entity, Scene } from "aframe-react";
import { Helmet } from "react-helmet";
import Showroom from "./Showroom";
import propertyAPI from "../utils/propertyAPI";
import roomAPI from "../utils/roomAPI";

import AnnotationAframe from "./aframe/AnnotationAframe";

// Showcasing gallery list of real estate
class ShowroomMain extends React.Component {
    constructor(props) {
        super(props);

        //init states
        this.state = {
            selectedProperty: [],
            room_url: "",
            pano_url: "",
            annotations: []
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
        // this.handleAnnotations();
        // this.getProperty(); // not super essential. for extra info on page.
        // console.log("---- componentDidMount (Page) ---> state", this.state.annotations);
        let rID;
        let propsID = this.props.roomID;
        let urlID = this.props.match.params.roomID;

        if (urlID) {
            rID = urlID;
        } else {
            rID = propsID;
        }
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

        // this.getRoom();
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
    //==================================================
    render() {
        return (
            <main>
                <div className="aframe-wrap fullscreen">
                    <AnnotationAframe
                        inCreationMode={false}
                        port={this.portAframe}
                        annotations={this.state.annotations}
                        pano_url={this.state.pano_url}
                    />
                </div>
            </main>
        );
    }
}

export default ShowroomMain;
// return <Showroom selectedProperty={(this.props.location.state.property) ? (this.props.location.state.property) : ""} />;
