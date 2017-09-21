import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

// const Navbar = (this.props) => (
class ShowcaseContentV2 extends Component {
  constructor(props) {
    super(props);

    //init states
    this.state = {
      initProperties:[],
      allProperties: []
    };
  }

  componentDidMount() {
    // this.getAllProperty();

    const ele = document.getElementById("ipl-progress-indicator");
    if (ele) {
      setTimeout(() => {
        ele.classList.add("available");
        setTimeout(() => {
          ele.outerHTML = "";
        }, 1000);
      }, 500);
    }
  }

  getAllProperty = () => {

    API.getAllProperties().then((response) => {
      console.log(response);
      this.setState({ initProperties: response.data, allProperties: response.data });
      
    });
  };

  filterList = (event) => {

    var updatedList = this.state.initProperties;
    updatedList = updatedList.filter(function(allProperties) {
      return (
        allProperties.street.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
        allProperties.city.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 
      );
    });
    this.setState({ allProperties: updatedList });
  };


  componentWillMount(){

    this.getAllProperty();
    // this.setState({allProperties: this.state.testdata})
  }


  render() {
    return (
      <div className="showcase">
        <main>
          <section className="row introduction">
            <div className="small-centered small-12 medium-11 large-11 columns showcase-header">

            <div className="row expanded">
                <div className="small-12 medium-12 columns onerow flex-row flex-row-off">
                    <div className="title onerow flex-center flex-center-off text-center">VRooms Showcase Gallery                
                    </div>
                    <form className="onerow searchform flex-right flex-right-off">
                            <fieldset className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Search"
                                onChange={this.filterList}
                            />
                            </fieldset>
                        </form>
                </div>
            </div>

            <div className="small-12 medium-12 columns onerow flex-row flex-row-off">  
              <p className="flex-row-off">
                Experience VRooms tours of outstanding properties in virtual
                reality both in our web-compatible player or if you have a VR
                headset, check these out in VR.
              </p>
            </div>
             

              
            </div>
          </section>

          <section
            id="our-results"
            className="row small-up-1 medium-up-2 large-up-3"
          >
            {this.state.allProperties.map((propertys, i) => (
              <div
                key={i}
                id={"result_" + (i + 1)}
                className="column column-block tour--block"
              >
                <div className="content-block">
                  <a target="_blank" href="#">
                    <img
                      className="tour--image"
                      src={propertys.thumbnail_url}
                      alt="Thumbnail"
                    />
                    <h4 className="tour--title">{propertys.street}</h4>
                  </a>{" "}
                  <h6 className="tour--city">{propertys.city}</h6>
                </div>
              </div>
            ))}
          </section>
        </main>

        <section className="benefits-header cta-module">
          <div className="row expanded">
            <div className="small-12 medium-12 columns cta-content">
              <h3>See how you can get started and create your tour today!</h3>
              <a className="button" href="/signup" id="marketing-signup">
                Sign Up
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ShowcaseContentV2;
