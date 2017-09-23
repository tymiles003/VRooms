import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Living1 = props => {
    return (
        <a-scene embedded>
            
            <Entity 
                crossOrigin="anonymous"
                primitive="a-sky"
                src="https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/property-living1.jpg"
            />
            <a-text
                font="kelsonsans"
                value="Real Estate Living Room Demo"
                width="6"
                position="-2 4.3 -3.5"
                rotation="0 15 0"
            />
        </a-scene>
    );
};

export default Living1;
