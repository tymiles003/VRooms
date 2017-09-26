import React, { Component } from "react";
import ReactDOM from "react-dom";
import API from "../../../utils/API";
import FileDrop from "./FileDrop";
import ZillowFetch from "./ZillowFetch";
import Btn from "../Elements/Btn";
import PreviewWindow from "../PreviewWindow";
import cookie from "react-cookies";
import axios from "axios";

import propertyAPI from "../../../utils/propertyAPI";
import roomAPI from "../../../utils/roomAPI";
const s3API = require("../../../utils/s3API");

const ReactToastr = require("react-toastr");
const { ToastContainer } = ReactToastr; // This is a React Element.

let ToastMessageFactory = React.createFactory(
  ReactToastr.ToastMessage.animation
);

class NewVRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: "James Bond",

      street: "",
      city: "",
      state: "",
      zip: "",

      beds: "",
      baths: "",
      year: "",
      sqft: "",
      price: "",

      query_type: "",
      zpid: "",
      zillow_url: "",
      fetch_query: "",

      bits: "",
      fileStatus: "no-file",

      extracted_input: ""
    };
  }

  addAlert = this.addAlert.bind(this);
  clearAlert = this.clearAlert.bind(this);

  addAlert(message) {
    this.refs.container.success(message, `Success`, {
      timeOut: 3000,
      extendedTimeOut: 2000,
      closeButton: true
    });
  }

  clearAlert() {
    this.refs.container.clear();
  }

  handleFileUpload = fileDropState => {
    this.setState(fileDropState);
  };

  handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    console.log(name, value);

    // if (name === 'fetch_query') {
    // 	this.detectQueryType(value.trim())
    // }
    // else {
    this.setState({
      [name]: value
    });
    // }
  };

  portZillowState = stateData => this.setState(stateData);

  /**
	 * - Creates a new Property and Room document
	 * - Uploads image to S3 and saves link in Room document
	 */
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    let { agent, street, city, state, zip } = this.state;
    console.log("this.state", this.state);

    // Get signed request from express server and use it to upload to S3
    s3API.getSignedRequest(
      {
        fileName: this.state.fileName,
        data: this.state.bits
      },
      url => {
        // If upload successful then create new Property and Room
        if (url) {
          let property = {
            thumbnail_url: url,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            country: this.state.country,
            bedrooms: this.state.beds,
            baths: this.state.baths,
            built_year: this.state.year,
            price: this.state.price,
            square_feet: this.state.sqft
          };
          let room = {
            pano_url: url
          };
          let userID = cookie.load("userId");
          console.log("cookie userId: ", userID);
          console.log("property: ", property);
          // Add new property to signed-in user, then add new room
          // to the property that was just added
          propertyAPI.addNewProperty(userID, property, addedProperty => {
            console.log("addedProperty: ", addedProperty.data);
            roomAPI.addNewRoom(addedProperty.data._id, room);
            this.addAlert("File uploaded successfully");
          });
        }
      }
    );
  };

  render() {
    return (
      <div className="pg-contains-aframe">
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref="container"
          className="toast-top-right"
        />

        {/* <PreviewWindow /> */}
        <form id="new-vroom-form" className="form ws-form">
          <div className="form-row">
            <ZillowFetch port={this.portZillowState} />
          </div>
          <div className="form-row">
            <fieldset>
              <legend>Address</legend>
              <div className="form-field-row">
                <div className="input-wrap input-full-width input-street ws-input-wrap">
                  <input
                    id="street"
                    className="input ws-input"
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={this.state.street}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-field-row">
                <div className="input-wrap input-city validated">
                  <input
                    id="city"
                    className="input ws-input"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="input-wrap input-state error">
                  <input
                    id="state"
                    className="input ws-input"
                    type="text"
                    name="state"
                    placeholder="State"
                    value={this.state.state}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="input-wrap input-zip">
                  <input
                    id="zip"
                    className="input ws-input"
                    type="text"
                    name="zip"
                    placeholder="Zip"
                    value={this.state.zip}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </fieldset>
          </div>
          <div className="form-row">
            <fieldset>
              <legend>Property Info</legend>

              <div className="form-field-row">
                <div className="input-wrap input-beds">
                  <input
                    id="beds"
                    className="input ws-input"
                    type="text"
                    name="beds"
                    placeholder="Beds"
                    value={this.state.beds}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="input-wrap input-baths">
                  <input
                    id="baths"
                    className="input ws-input"
                    type="text"
                    name="baths"
                    placeholder="Baths"
                    value={this.state.baths}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="input-wrap input-year">
                  <input
                    id="year"
                    className="input ws-input"
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={this.state.year}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-field-row">
                <div className="input-wrap input-price icon-prefix">
                  <i className="fa fa-usd" />
                  <input
                    id="price"
                    className="input ws-input"
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={this.state.price}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="input-wrap input-sqft">
                  <input
                    id="sqft"
                    className="input ws-input"
                    type="text"
                    name="sqft"
                    placeholder="Square Feet"
                    value={this.state.sqft}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </fieldset>
          </div>
          <div className="form-row stack-vertical">
            <FileDrop handleFileUpload={this.handleFileUpload} />
            <Btn
              text="Annotate"
              theme="disabled"
              classes={["ws-mini", "bump-top"]}
              isOutlined
            />
          </div>
          <div className="form-row">
            <button
              id="submit"
              className="ws-btn"
              type="submit"
              onClick={this.handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewVRoomForm;


