import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import propertyAPI from "../../utils/propertyAPI";
import roomAPI from "../../utils/roomAPI"; 

class EditShowcaseContent extends Component {
    constructor(props) {
        super(props);

         //init states
         this.state = {
            initDBProperties: [],
            allDBProperties: [],
            initDBRooms: [],
            allDBRooms: []
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

        roomAPI.getAllRooms().then(response => {
            console.log('roomAPI room response >>>>',response.data);
            this.setState({
                initDBRooms: response.data,
                allDBRooms: response.data
            });
        });

        // propertyAPI.getAllProperties().then(response => {
        //     console.log("inside showContentV2", response);
        //     this.setState({
        //         initDBProperties: response.data,
        //         allDBProperties: response.data
        //     });

        //     console.log("parents ID : >>>>>>>>>> " +response.data._id);

            // Use propertyID from roomData to make API call to find all other rooms in property

			// roomAPI.getAllRoomsInProperty(parent_propertyID, (response) => {
			// 	console.log('getAllRoomsInProperty ===>',response);
			// 	this.setState({
			// 		roomArray: response
			// 	})
			// })
        // });

    };

    filterList = event => {

        // var updatedDBList = this.state.initDBProperties;
        // updatedDBList = updatedDBList.filter(function(allProperties) {
        //     return (
        //         allProperties.street
        //             .toLowerCase()
        //             .indexOf(event.target.value.toLowerCase()) !== -1 ||
        //         allProperties.city
        //             .toLowerCase()
        //             .indexOf(event.target.value.toLowerCase()) !== -1
        //     );
        // });
        // this.setState({
        //     allDBProperties: updatedDBList
        // });


    };

    componentWillMount() {
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
                                    <div className="title onerow flex-center flex-center-off text-center">
                                        Edit VRooms
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
                                    Edit your virtual rooms and add labels or portals
                                </p>
                            </div>
                        </div>
                    </section>
                  
                    {/* <section
                        id="our-results"
                        className="row small-up-1 medium-up-2 large-up-3"
                    >
                        {this.state.allDBProperties.map((properties, i) => (
                            <div
                                key={i}
                                id={"result_" + (i + 1)}
                                className="column column-block tour--block"
                            >
                                <div className="content-block">
                                    <Link to={{
                                            pathname: "/show/" + properties.rooms[0]._id,
                                        }}
                                    >
                                        <img
                                            className="tour--image"
                                            src={properties.thumbnail_url}
                                            alt="Thumbnail"
                                        />
                                    </Link>
                                        <h4 className="tour--title">
                                            {properties.street}
                                        </h4>
                                    
                                    <h6 className="tour--city">
                                        {properties.city}
                                    </h6>
                                </div>
                            </div>
                        ))}
                    </section> */}

                    <section
                        id="our-results"
                        className="row small-up-1 medium-up-2 large-up-3"
                    >
                        {this.state.allDBRooms.map((rooms, i) => (
                            
                            <div
                                key={i}
                                id={"result_" + (i + 1)}
                                className="column column-block tour--block"
                            >
                                <div className="content-block">
                                    <Link to={{
                                            pathname: "/edit/" + rooms._id,
                                        }}
                                    >
                                        <img
                                            className="tour--image"
                                            src={rooms.pano_url}
                                            alt="Thumbnail"
                                        />
                                    </Link>
                                        <h4 className="tour--title">
                                            {rooms.name}
                                        </h4>
                                    
                                    {/* <h6 className="tour--city">
                                        {properties.city}
                                    </h6> */}
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
               
            </div>
        );
    }
}

export default EditShowcaseContent;
