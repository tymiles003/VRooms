import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Showroom = props => {
    console.log("Showroom.props: ", props);
    return (
        <a-scene embedded>
            <a-assets>
                <img id="asset-scene-url" src={props.selectedProperty.rooms[0].pano_url} 
                crossOrigin="anonymous" />
            </a-assets>
            <a-sky ng-click="print()" src="#asset-scene-url"></a-sky>
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
