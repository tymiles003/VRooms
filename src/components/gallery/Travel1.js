import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";

const Travel1 = props => {

    const room_url = "https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/travel-fairmont-le-chateau-frontenac.jpg?v=132";
    
    return (
        <a-scene embedded>
             <a-assets>
             <img
               id="asset-scene-url"
               src= {room_url}
               crossOrigin="anonymous"
             />
           </a-assets>
           <a-sky ng-click="print()" src="#asset-scene-url" />

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
