import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Showroom = (props) => {
    console.log("Showroom.props: ", props);
    
    let xAxis = -2;
    let yAxis = 4;
    let zAxis = -3;
    let annotationtxt = " ";
    let width = 8;

    if (props.selectedProperty.rooms[0].annotations[0]){
       xAxis = props.selectedProperty.rooms[0].annotations[0].xAxis;
       yAxis = props.selectedProperty.rooms[0].annotations[0].yAxis;
       zAxis = props.selectedProperty.rooms[0].annotations[0].zAxis;
       annotationtxt = props.selectedProperty.rooms[0].annotations[0].text;
       width = props.selectedProperty.rooms[0].annotations[0].width;
    }

    const room_url = props.selectedProperty.rooms[0].pano_url + "?v=1230";
    const txtPosition = xAxis + " " + yAxis + " " + zAxis;
    
    return (
    <a-scene crossOrigin="anonymous">
    
      <a-assets>
        <img id="asset-scene-url" src={room_url} />
      </a-assets>
      <a-sky crossOrigin="anonymous" src="#asset-scene-url" />
      <a-text
        font="kelsonsans"
        value={annotationtxt}
        width={width}
        position={txtPosition}
        rotation="0 15 0"
      />
    </a-scene>

    
  );
  }



export default Showroom;
