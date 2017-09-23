import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Travel2 = props => {
    return (
        <a-scene embedded>
            <Entity 
                crossOrigin="anonymous"
                primitive="a-sky"
                src="https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/travel-place-des-jacobins-tn.jpg"
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
