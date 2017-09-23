import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Travel2 = props => {

    const room_url = props.selectedProperty.rooms[0].pano_url + "?v=1230";

    return (
        <a-scene embedded>
            <Entity 
                crossOrigin="anonymous"
                primitive="a-sky"
                src={room_url}
            />
            <a-text
                font="kelsonsans"
                value="Place des Jacobins"
                width="6"
                position="-2 4.3 -3.5"
                rotation="0 15 0"
            />
        </a-scene>
    );
};

export default Travel2;
