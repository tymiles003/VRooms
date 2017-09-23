import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Kitchen = props => {

    const room_url = "https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/property-kitchen.jpg?v=132";
    
    return (
        <a-scene embedded>
             <a-assets>
             <img
               id="asset-scene-url"
               src= {room_url}
              
             />
           </a-assets>
           <a-sky ng-click="print()" src="#asset-scene-url" />

            <a-text
                font="kelsonsans"
                value="Real Estate Kitchen Demo"
                width="6"
                position="-2 4.3 -3.5"
                rotation="0 15 0"
            />
        </a-scene>
    );
};

export default Kitchen;
