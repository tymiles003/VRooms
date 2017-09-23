import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Showroom = (props) => {

    return (

      <a-scene embedded>

      {props.selectedProperty.map((property, i) => (
        <Entity key={ i } crossOrigin="anonymous" primitive="a-sky" src={property.thumbnail_url} />      
      ))
      }              
{/*       
        {this.state.selectedProperty.map((property, i) => (
            <Entity key={ i } crossOrigin="anonymous" primitive="a-sky" src={property.thumbnail_url} />      
        ))} */}

        {/* <Entity primitive='a-sky' src="https://vrooms-s3.s3.amazonaws.com/test-world2.jpg"/> */}

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

export default Showroom;