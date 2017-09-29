import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Showroom = props => {
    console.log("Showroom.props: ", props);

    let xAxis = -2;
    let yAxis = 4;
    let zAxis = -3;
    let annotationtxt = " ";
    let width = 8;

    if (props.annotations) {
        xAxis = props.annotations[0].xAxis;
        yAxis = props.annotations[0].yAxis;
        zAxis = props.annotations[0].zAxis;
        annotationtxt = props.annotations[0].text;
        width = props.annotations[0].width;
    }

    const room_url = props.pano_url + "?v=1230";
    const txtPosition = xAxis + " " + yAxis + " " + zAxis;

    return (
        <a-scene embedded crossOrigin="anonymous">
            <a-assets>
                <img id="asset-scene-url" src={room_url} />
            </a-assets>
            <a-sky crossOrigin="anonymous" src="#asset-scene-url" />
            <a-text
                font="kelsonsans"
                value={annotationtxt}
                width={width}
                position={txtPosition}
                rotation="0 15 0"
            />
        </a-scene>
    );
};

export default Showroom;
