import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Showroom = props => {
  console.log("Showroom.props: ", props);

  const room_url = props.selectedProperty.rooms[0].pano_url + "?v=1230";
  const xAxis = props.selectedProperty.rooms[0].annotations[0].xAxis;
  const yAxis = props.selectedProperty.rooms[0].annotations[0].yAxis;
  const zAxis = props.selectedProperty.rooms[0].annotations[0].zAxis;
  const txtPosition = xAxis + " " + yAxis + " " + zAxis;
  
  return (
    <a-scene embedded crossOrigin="anonymous">
      <a-assets>
        <img id="asset-scene-url" src={room_url} />
      </a-assets>
      <a-sky crossOrigin="anonymous" src="#asset-scene-url" />
      <a-text
        font="kelsonsans"
        value={props.selectedProperty.rooms[0].annotations[0].text}
        width={props.selectedProperty.rooms[0].annotations[0].width}
        position={txtPosition}
        rotation="0 15 0"
      />
    </a-scene>
  );
};

export default Showroom;
