import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Entity, Scene } from "aframe-react";
import { Helmet } from "react-helmet";

import propertyAPI from "../utils/propertyAPI";

// Showcasing gallery list of real estate
class Showroom extends React.Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     quotes: []
    //   };
    //   // Binding getQuotes to this component since we'll be passing this method to
    //   // other components to use
    //   this.getQuotes = this.getQuotes.bind(this);
    // }
    // // Getting all quotes once the component has mounted

    //init states
    this.state = {
      selectedProperty: []
    };
  }

  componentWillMount() {
    // To pass/retrieve id from showcase gallery
    this.getSelectedProperty("59c53629778a8b0012433cf4");
  }

  getSelectedProperty = propID => {
    propertyAPI.getProperty(propID).then(response => {
      console.log(response);
      this.setState({
        selectedProperty: response.data
      });
    });
  };

  componentDidMount = () => {};

  render() {
    return (

      <a-scene embedded>
      
        {this.state.selectedProperty.map((property, i) => (
            <Entity key={ i } crossOrigin="anonymous" primitive="a-sky" src={property.thumbnail_url} />      
        ))}

        <a-text
          font="kelsonsans"
          value="321 Ocean Dr, Miami Beach, Florida"
          width="6"
          position="-2 4.3 -3.5"
          rotation="0 15 0"
        />
      </a-scene>
    );
  }
}

export default Showroom;
