import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Showroom = props => {
  console.log("Showroom.props: ", props);

  const room_url = props.selectedProperty.rooms[0].pano_url + "?v=1230";
  const xAxis = props.selectedProperty.rooms[0].annotations[0].xAxis || -2;
  const yAxis = props.selectedProperty.rooms[0].annotations[0].yAxis || 4;
  const zAxis = props.selectedProperty.rooms[0].annotations[0].zAxis || -3;
  const txtPosition = xAxis + " " + yAxis + " " + zAxis;
  const width = props.selectedProperty.rooms[0].annotations[0].width || 8;
  const annotationtxt = props.selectedProperty.rooms[0].annotations[0].text || " ";
  
  return (
    <a-scene embedded crossOrigin="anonymous">
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
};

export default Showroom;
