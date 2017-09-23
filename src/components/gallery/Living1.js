import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Living1 = props => {
    return (
        <a-scene embedded>

            <a-assets>

            <img id="asset-scene-url" src="https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/property-living1.jpg" />>
            </a-assets>
            <a-sky ng-click="print()" src="#asset-scene-url"></a-sky>

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
