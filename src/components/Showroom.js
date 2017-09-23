import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Showroom = props => {
  console.log("Showroom.props: ", props);

  const room_url = props.selectedProperty.rooms[0].pano_url + "?v=1230";

  return (
    <a-scene embedded>
      {/* <Entity
        crossOrigin="anonymous"
        primitive="a-sky"
        src={props.selectedProperty.rooms[0].pano_url}
      />
      <a-text
        font="kelsonsans"
        value="321 Ocean Dr, Miami Beach, Florida"
        width="6"
        position="-2 4.3 -3.5"
        rotation="0 15 0"
      /> */}
{/* 
      <a-assets>
        <img
          id="asset-scene-url"
          src= {room_url}
          crossOrigin="anonymous"
        />
      </a-assets> */}
      <a-sky crossOrigin="anonymous" src={room_url} />
      <a-text
        font="kelsonsans"
        value="321 Ocean Dr, Miami Beach, Florida"
        width="6"
        position="-2 4.3 -3.5"
        rotation="0 15 0"
      />
    </a-scene>
  );
};

export default Showroom;
