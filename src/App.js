// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes";

import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import { Entity, Scene } from "aframe-react";

ReactDOM.render(routes, document.getElementById("app"));
