// import 'aframe';
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Entity, Scene } from "aframe-react";
import { Helmet } from "react-helmet";
import Showroom from "./Showroom"

import propertyAPI from "../utils/propertyAPI";

// Showcasing gallery list of real estate
class ShowroomMain extends React.Component {
  constructor(props) {
    super(props);

    //init states
    this.state = {
      selectedProperty: [],
      room_url: ""
    };
  }

  componentWillMount() {
    // To pass/retrieve id from showcase gallery
    this.getSelectedProperty("59c53629778a8b0012433cf4");
  }

  getSelectedProperty = propID => {
    propertyAPI.getProperty(propID).then(response => {

      this.setState({
        selectedProperty: response.data, 
        room_url:response.data[0].thumbnail_url
      });
    });
  };

  componentDidMount = () => {
  };

  render() {
    return (    

      <Showroom selectedProperty={this.state.selectedProperty}/>
    );
  }
}

export default ShowroomMain;
