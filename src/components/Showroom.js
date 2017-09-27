import React, { Component } from "react";
import { Entity, Scene } from "aframe-react";
import io from 'socket.io-client';

const socket = io();


class Showroom extends Component{

  constructor(props){
    super(props);
    this.socket = io();
    this.state={
        message:1
    };
  }

  componentDidMount() {
    /**
     * While browser tab getting closed, below event listener is called.
     */
    window.addEventListener("beforeunload", (ev) => {  
      ev.preventDefault();

      socket.emit('close', {
          room: this.props.selectedProperty.rooms[0].pano_url
        });
      });
      socket.emit('open', {room: this.props.selectedProperty.rooms[0].pano_url});

      /** 
       * Message reeived from server
       */
      socket.on('message', (data) => {
          console.log("Message ==== ",data);
          this.setState({message:data});
      });
  }

  componentWillUnmount(){
      socket.emit('close', {
          room: this.props.selectedProperty.rooms[0].pano_url
        });
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
      <a-text
            font="kelsonsans"
            value={this.state.message}
            width="7"
            position="6 5 -5"
            rotation="0 0 0"
            geometry="primitive:plane"
          />
    </a-scene>
  );
  }

}


export default Showroom;
