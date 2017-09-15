// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes";

import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import { Entity, Scene } from "aframe-react";


// const reactHelper = require('react-helper');
// const ExpressReactHelperPage = require('./components/authentication/LoginForm');
// reactHelper.register({ExpressReactHelperPage});
// console.log("Inside App..",reactHelper);
ReactDOM.render(routes, document.getElementById("app"));
