import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Showroom = props => {
    console.log("Showroom.props: ", props);
    return (
        <a-scene embedded>
            <Entity
                primitive="a-sky"
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/SonyCenter_360panorama.jpg"
            />
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
