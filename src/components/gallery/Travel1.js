import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Travel1 = props => {
    return (
        <a-scene embedded>
            <Entity 
                crossOrigin="anonymous"
                primitive="a-sky"
                src="https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/travel-fairmont-le-chateau-frontenac.jpg"
            />
            <a-text
                font="kelsonsans"
                value="Fairmont Le Chateau Frontenac"
                width="6"
                position="-2 4.3 -3.5"
                rotation="0 15 0"
            />
        </a-scene>
    );
};

export default Travel1;
