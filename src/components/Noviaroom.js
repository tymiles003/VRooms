import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Noviaroom = props => {
    console.log("Showroom.props: ", props);
    return (
        <a-scene embedded>
            <Entity 
                primitive="a-sky"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f4/360-degree_Panorama_of_the_Southern_Sky.jpg"
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

export default Noviaroom;
