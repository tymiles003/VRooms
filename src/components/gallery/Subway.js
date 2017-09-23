import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Subway = props => {
    
    return (
        <a-scene embedded>
             
           <a-sky crossOrigin="anonymous" src="https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/directions-subway.jpg?v=132" />

            <a-text
                font="kelsonsans"
                value="Directions - NYC Subway"
                width="6"
                position="-2 4.3 -3.5"
                rotation="0 15 0"
            />
        </a-scene>
    );
};

export default Subway;
