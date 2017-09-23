import React, { Component } from "react";
import { Link } from "react-router-dom";

// const Navbar = (this.props) => (
class Gallery extends Component {
  constructor(props) {
    super(props);

    //init states
    this.state = {
      allExamples: []
    };
  }

  componentDidMount() {
    this.getAllGallery();
  }

  getAllGallery = () => {
    let demodata = [
      {
        _id: "59c0885668a4a81b82c94430",
        thumbnail_url:
          "https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/property-living1-tn.jpg",
        type: "Real Estate",
        title: "Living Room 1",
        link: "/living1"
      },
      {
        _id: "59c0885668a4a81b82c94430",
        thumbnail_url:
          "https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/property-living2-tn.jpg",
        type: "Real Estate",
        title: "Living Room 2",
        link: "/living2"
      },{
        _id: "59c0885668a4a81b82c94430",
        thumbnail_url:
          "https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/property-kitchen-tn.jpg",
        type: "Real Estate",
        title: "Kitchen",
        link: "/kitchen"
      },{
        _id: "59c0885668a4a81b82c94430",
        thumbnail_url:
          "https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/office-tn.jpg",
        type: "Real Estate",
        title: "Office Space",
        link: "/office"
      },{
        _id: "59c0885668a4a81b82c94430",
        thumbnail_url:
          "https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/travel-fairmont-le-chateau-frontenac-tn.jpg",
        type: "Travel",
        title: "Fairmont Le Chateau Frontenac",
        link: "/travel1"
      },{
        _id: "59c0885668a4a81b82c94430",
        thumbnail_url:
          "https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/travel-place-des-jacobins-tn.jpg",
        type: "Travel",
        title: "Place des Jacobins",
        link: "/travel2"
      },
      {
        _id: "59c0885668a4a81b82c94430",
        thumbnail_url:
          "https://s3-ap-southeast-1.amazonaws.com/sea-gallery/vrooms/directions-subway-tn.jpg",
        type: "Directions",
        title: "NYC Subway",
        link: "/subway"
      }
    ];

    this.setState({ allExamples: demodata });
    
  };

  render() {
    return (
      <div className="showcase">
        <main>

          <section className="row introduction">
            <div className="small-centered small-12 medium-11 large-10 columns">
              <h1 className="title">VRooms Showcase Gallery</h1>
              <p>
                Experience VRooms tours of outstanding experience in virtual
                reality both in our web-compatible player or if you have a VR
                headset, check these out in VR!
              </p>
            </div>
          </section>

          <section
            id="our-results"
            className="row small-up-1 medium-up-2 large-up-3"
          >
            {this.state.allExamples.map((examples, i) => (
              <div
                key={i}
                id={"result_" + (i + 1)}
                className="column column-block tour--block"
              >
                <div className="content-block">
                  <a target="_blank" href={examples.link}>
                    <img
                      className="tour--image"
                      src={examples.thumbnail_url}
                      alt="Thumbnail"
                    />
                    <h4 className="tour--title">{examples.type}</h4>
                  </a>{" "}
                  <h6 className="tour--city">{examples.title}</h6>
                </div>
              </div>
            ))}
          </section>
        </main>

        <section className="benefits-header cta-module">
          <div className="row expanded">
            <div className="small-12 medium-12 columns cta-content">
              <h3>Get in touch! See how you can get started and create your experience today!</h3>
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
export default Gallery;
