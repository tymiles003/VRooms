import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";
import io from 'socket.io-client';

const socket = io();


class Showroom extends Component{

  constructor(props){
    super(props);
    this.socket = io();
    this.state={

    };
  }

  componentDidMount() {
    console.log('MOUNTED');

    window.addEventListener("beforeunload", (ev) => {  
      ev.preventDefault();
      console.log("inside add event listener");
      socket.emit('close', {
      room: this.props.selectedProperty.rooms[0].pano_url
    });
    
    // return ev.returnValue = 'Are you sure you want to close?';
    });

      socket.emit('open', {room: this.props.selectedProperty.rooms[0].pano_url});
  }

  render(){
    console.log("Showroom.props: ", this.props);
    
    let xAxis = -2;
    let yAxis = 4;
    let zAxis = -3;
    let annotationtxt = " ";
    let width = 8;

    if (this.props.selectedProperty.rooms[0].annotations[0]){
       xAxis = this.props.selectedProperty.rooms[0].annotations[0].xAxis;
       yAxis = this.props.selectedProperty.rooms[0].annotations[0].yAxis;
       zAxis = this.props.selectedProperty.rooms[0].annotations[0].zAxis;
       annotationtxt = this.props.selectedProperty.rooms[0].annotations[0].text;
       width = this.props.selectedProperty.rooms[0].annotations[0].width;
    }

    const room_url = this.props.selectedProperty.rooms[0].pano_url + "?v=1230";
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
  }

}

// const Showroom = props => {
//   console.log("Showroom.props: ", props);

//   const room_url = props.selectedProperty.rooms[0].pano_url + "?v=1230";
//   const xAxis = props.selectedProperty.rooms[0].annotations[0].xAxis || -2;
//   const yAxis = props.selectedProperty.rooms[0].annotations[0].yAxis || 4;
//   const zAxis = props.selectedProperty.rooms[0].annotations[0].zAxis || -3;
//   const txtPosition = xAxis + " " + yAxis + " " + zAxis;
//   const width = props.selectedProperty.rooms[0].annotations[0].width || 8;
//   const annotationtxt = props.selectedProperty.rooms[0].annotations[0].text || " ";
  
//   return (
//     <a-scene embedded crossOrigin="anonymous">
//       <a-assets>
//         <img id="asset-scene-url" src={room_url} />
//       </a-assets>
//       <a-sky crossOrigin="anonymous" src="#asset-scene-url" />
//       <a-text
//         font="kelsonsans"
//         value={annotationtxt}
//         width={width}
//         position={txtPosition}
//         rotation="0 15 0"
//       />
//     </a-scene>
//   );
// };

export default Showroom;
