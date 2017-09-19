import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

// const Navbar = (this.props) => (
class ShowcaseContent extends Component {
  constructor(props) {
    super(props);

    //init states
    this.state = {
      allProperties: []
    };
  }

  componentDidMount() {
    this.getAllProperty();

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
    let testdata = [
      {
        _id: "59c0885668a4a81b82c94430",
        thumbnail_url:
          "https://s3-us-west-1.amazonaws.com/transported-content/tours/xjjIM4Fg/Media/hero.jpg",
        street: "1605 Viewmont Drive",
        city: "Los Angeles",
        state: "CA",
        zip: 90069,
        country: "United States",
        bedrooms: 3,
        baths: 3,
        built_year: 2011,
        price: 11000000,
        square_feet: 3000
      },
      {
        _id: "59c0885668a4a81b82c94431",
        thumbnail_url:
          "https://s3-us-west-1.amazonaws.com/transported-content/tours/BKgSBxGX/hero.jpg",
        street: "11808 Kearsarge Street",
        city: "Los Angeles",
        state: "CA",
        zip: 90049,
        country: "United States",
        bedrooms: 4,
        baths: 5,
        built_year: 2011,
        price: 4895000,
        square_feet: 3739
      },
      {
        _id: "59c0885668a4a81b82c94432",
        thumbnail_url:
          "https://s3-us-west-1.amazonaws.com/transported-content/tours/BKgSBxGX/hero.jpg",
        street: "18207 El Brazo Rd",
        city: "Rancho Santa Fe",
        state: "CA",
        zip: 92067,
        country: "United States",
        bedrooms: 4,
        baths: 5,
        built_year: 2011,
        price: 4895000,
        square_feet: 3739
      }
    ];

    this.setState({ allProperties: testdata });
    // });

    // API.getAllProperties().then((response) => {
    //     // if (response.data !== this.state.savedArticles) {
    //     //     this.setState({ savedArticles: response.data });
    //     // }
    // });
  };

  render() {
    return (
      <div className="marketing">
        <main>
          <section className="row introduction">
            <div className="small-centered small-12 medium-11 large-10 columns">
              <h1 className="title">VRooms Showcase Gallery</h1>
              <p>
                Experience VRooms tours of outstanding properties in virtual
                reality both in our web-compatible player or if you have a VR
                headset, check these out in VR.
              </p>
            </div>
          </section>

          <section className="row small-up-1 medium-up-2 large-up-3">            
            <div id="our-results" className="panel-body">
              {this.state.allProperties.map((propertys, i) => (

                <div key={i} id={"result_"+(i+1)} className="column column-block tour--block">
                  <div className="content-block">
                    <a
                      target="_blank"
                      href="#"
                    >
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

                ))
              }              
            </div>
          </section>

          <section className="row small-up-1 medium-up-2 large-up-3">
            <div className="column column-block tour--block">
              <div className="content-block">
                <a
                  target="_blank"
                  href="5904-village-drive-playa-vista-ca-90094/t/ZLeAxL1k.html"
                >
                  <img
                    className="tour--image"
                    src="../s3-us-west-1.amazonaws.com/transported-content/tours/ZLeAxL1k/Media/hero.jpg"
                    alt="Hero"
                  />
                  <h4 className="tour--title">Street Name (1060 Palms Blvd)</h4>
                </a>{" "}
                <h6 className="tour--city">City (New York)</h6>
              </div>
            </div>
            <div className="column column-block tour--block">
              <div className="content-block">
                <a
                  target="_blank"
                  href="200-east-66th-st-new-york-ny-10065/t/1U2xWpfR.html"
                >
                  <img
                    className="tour--image"
                    src="../s3-us-west-1.amazonaws.com/transported-content/tours/1U2xWpfR/hero.jpg"
                    alt="Hero"
                  />
                  <h4 className="tour--title">Street Name</h4>
                </a>{" "}
                <h6 className="tour--city">City</h6>
              </div>
            </div>
            <div className="column column-block tour--block">
              <div className="content-block">
                <a
                  target="_blank"
                  href="150-central-park-south-new-york-ny-10019/t/JnXBCecs.html"
                >
                  <img
                    className="tour--image"
                    src="../s3-us-west-1.amazonaws.com/transported-content/tours/JnXBCecs/hero.jpg"
                    alt="Hero"
                  />
                  <h4 className="tour--title">Street Name</h4>
                </a>{" "}
                <h6 className="tour--city">City</h6>
              </div>
            </div>
            <div className="column column-block tour--block">
              <div className="content-block">
                <a
                  target="_blank"
                  href="1542-n-easterly-terrace-los-angeles-ca-90026/t/Hl372O6Y.html"
                >
                  <img
                    className="tour--image"
                    src="../s3-us-west-1.amazonaws.com/transported-content/tours/Hl372O6Y/hero.jpg"
                    alt="Hero"
                  />
                  <h4 className="tour--title">Street Name</h4>
                </a>{" "}
                <h6 className="tour--city">City (Los Angeles)</h6>
              </div>
            </div>
            <div className="column column-block tour--block">
              <div className="content-block">
                <a
                  target="_blank"
                  href="18207-el-brazo-rd-rancho-santa-fe-ca-92067/t/xuhXmR7p.html"
                >
                  <img
                    className="tour--image"
                    src="../s3-us-west-1.amazonaws.com/transported-content/tours/xuhXmR7p/hero.jpg"
                    alt="Hero"
                  />
                  <h4 className="tour--title">Street Name</h4>
                </a>{" "}
                <h6 className="tour--city">City</h6>
              </div>
            </div>
          </section>
        </main>
        <section className="cta-module showcase-cta">
          <div className="row expanded">
            <div className="small-12 medium-12 columns cta-content">
              <h3>See how you can get started and create your tour today!</h3>
              <a
                className="button"
                id="ga-cta-button-agents"
                href="agents.html"
              >
                AGENTS
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ShowcaseContent;
