import React, { Component } from "react";
import { Link } from "react-router-dom";
import propertyAPI from "../../utils/propertyAPI";

import { Entity, Scene } from "aframe-react";

import BuildAnnotations from "../aframe/components/BuildAnnotations";

// const Navbar = (this.props) => (
class AFDemoContent extends Component {
  constructor(props) {
    super(props);

    //init states
    this.state = {
      initProperties: [],
      allProperties: [],
      annotations: [ 
        {
            "_id" : "59dbc801cfb7cb5e0cece238",
            "zAxis" : -0.0988976712517386,
            "yAxis" : 0.506491212307324,
            "xAxis" : -4.75484654122049,
            "width" : 8,
            "link" : "",
            "image" : "",
            "label" : "Fresh Bread",
            "text" : "Artisan breads, glorious pies, wholesome muffins and cookies"
        }, 
        {
            "_id" : "59dbc871cfb7cb5e0cece239",
            "zAxis" : 2.80910739477399,
            "yAxis" : 0.957709398650007,
            "xAxis" : 3.9383700669975,
            "width" : 8,
            "link" : "",
            "image" : "",
            "label" : "Deli Bar",
            "text" : "Convenient, semi-gourmet food stop"
        }, 
        {
            "_id" : "59dbc8a4cfb7cb5e0cece23a",
            "zAxis" : 3.62114957926902,
            "yAxis" : 1.25868036173708,
            "xAxis" : -3.25345571380885,
            "width" : 8,
            "link" : "",
            "image" : "",
            "label" : "Dairy",
            "text" : "Blue milk"
        }
    ]
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

    let fresh360VR = document.querySelector('a-sky');
    fresh360VR.addEventListener('click', function () {
        console.log("YOU ARE CLICKED!");
        fresh360VR.setAttribute('visible', false);
    });
  }

  getAllProperty = () => {
    propertyAPI.getAllProperties().then(response => {
      console.log("inside showContentV2", response);
      this.setState({
        initProperties: response.data,
        allProperties: response.data
      });
    });
  };

  filterList = event => {
    var updatedList = this.state.initProperties;
    updatedList = updatedList.filter(function(allProperties) {
      return (
        allProperties.street
          .toLowerCase()
          .indexOf(event.target.value.toLowerCase()) !== -1 ||
        allProperties.city
          .toLowerCase()
          .indexOf(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({
      allProperties: updatedList
    });
  };

  componentWillMount() {
    this.getAllProperty();
    // this.setState({allProperties: this.state.testdata})
  }

     // getPosition =====================================
    getPosition = event => {
        console.log("---- getPosition --->");

    };

    stopRotate() {
        // this.refs.vidRef.play();
        console.log("Stop rotate");
        document.getElementsByTagName("a-animation")[0].setAttribute("attribute", "false");
        // attribute="rotation"

    }

  render() {
    return (
      <div className="showcase-amazon">
          <main>
          <section className="row introduction">
            <div className="small-centered small-12 medium-11 large-11 columns showcase-header-amazon">
              <div className="row expanded">
                <div className="small-12 medium-12 columns onerow flex-row flex-row-off">
                  <div className="title onerow flex-center flex-center-off text-center">
                    AmazonFreshDemo
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
            </div>
          </section>
          
        </main>

      <div id="a-page">

        <div id="fresh-storefront-container" data-app="lp" data-page="hybrid" data-page-construction="sx" className="a-section a-spacing-none">
            <div id="topStatic" className="a-section a-spacing-none a-padding-none"></div>
            <div id="top" className="a-section a-spacing-large a-padding-none"></div>
            <div className="a-fixed-left-grid two-columns">
                <div className="a-fixed-left-grid-inner" style={{paddingLeft:200+ "px"}}>
                    <div className="a-fixed-left-grid-col a-col-left">
                        <div id="preLeft" className="a-section"></div>
                        <div id="postLeft" className="a-section">
                          <div className="left_nav browseBox">
                                <h3>About AmazonFresh 360</h3>
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                </ul>
                            </div>
                            <div className="left_nav_footer">&nbsp;</div>
                            <div className="left_nav browseBox">
                                
                                <h3>More Ways to Shop</h3>
                                <ul>
                                    <li>Fresh Deals</li>
                                    <li>Past Purchases</li>
                                    <li>Whole Foods Products</li>
                                    <li>Tailgating Essentials</li>
                                    <li>Halloween Essentials</li>
                                    <li>Gifting Store</li>
                                    <li>Produce Buying Guides</li>
                                    <li>Grocery Lists</li>
                                </ul>
                            </div>
                            <div className="left_nav_footer">&nbsp;</div>
                            
                            <div className="left_nav browseBox">
                                
                                <h3>Produce</h3>
                                <ul>
                                    <li>Fruits</li>
                                    <li>Vegetables</li>
                                    <li>Fresh Herbs</li>
                                    <li>Packaged Produce</li>
                                    <li>Nuts, Seeds &amp; Snack Mixes</li>
                                    <li>Dried Fruits &amp; Vegetables</li>
                                    <li>&raquo;View All</li>
                                </ul>
                                <h3>Star Wars</h3>
                                <ul>
                                    <li>Blue Milk</li>
                                    <li>Paddy Frogs</li>
                                    <li>Rootleaf Stew</li>
                                    <li>Shuura</li>
                                    <li>Jawa Juice</li>
                                    <li>Tonitran Jerky</li>
                                    <li>Yoba</li>
                                    <li>Choya</li>
                                </ul>
                            </div>
                            <div className="left_nav_footer">&nbsp;</div>
                            
                            <div className="left_nav browseBox">
                                
                                <h3>Grocery</h3>
                                <ul>
                                    <li>Snacks</li>
                                    <li><a href="#">Beverages</a></li>
                                    <li><a href="#">Breakfast</a></li>
                                    <li><a href="#">Candy &amp; Chocolate</a></li>
                                    <li><a href="#">Canned &amp; Packaged Foods</a></li>
                                    <li><a href="#">Cooking &amp; Baking</a></li>
                                    <li><a href="#">Condiments &amp; Dressings</a></li>
                                    <li><a href="#">Dried Beans, Grains &amp; Rice</a></li>
                                    <li><a href="#">Herbs, Spices &amp; Seasonings</a></li>
                                    <li><a href="#">Pasta &amp; Noodles</a></li>
                                    <li><a href="#">Packaged Meals &amp; Side Dishes</a></li>
                                </ul>
                            </div>
                            <div className="left_nav_footer">&nbsp;</div>
                            
                            <div className="left_nav browseBox">
                                
                                <h3>Household, Health &amp; Beauty</h3>
                                <ul>
                                    <li><a href="#">Baby</a></li>
                                    <li><a href="#">Healthcare</a></li>
                                    <li><a href="#">Household Supplies</a></li>
                                    <li><a href="#">Beauty &amp; Personal Care</a></li>
                                    <li><a href="#">Pet Care</a></li>
                                    <li><a href="#">Sports Nutrition</a></li>
                                </ul>
                            </div>
                            <div className="left_nav_footer">&nbsp;</div>
                            
                        </div>
                        <div id="DA_leftnav">
                        </div>
                    </div>
                    <div className="a-fixed-left-grid-col a-col-right">
                        <div id="centerSlots" className="a-section">
                            <div id="search-js-btf">
                            </div>
                            
                            <div className="acsUxWidget">
                                <div id="contentGrid_279183" className="acswidget acswidget-content-grid celwidget US bxw-content-grid  a-spacing-large  bxc-grid--light" cel_widget_id="acsux-widgets-content-grid" data-is-mobile="false">
                                    <div className="bxc-grid__container bxc-grid__container--width-1500">
                                        <div className='bxc-grid__row   bxc-grid__row--light '>
                                            <div className='bxc-grid__column  bxc-grid__column--12-of-12   bxc-grid__column--light'>
                                                <div className='bxc-grid__content   bxc-grid__content--light'>
                                                    <div className='bxc-grid__image   bxc-grid__image--light fresh360-header'>

                                                    <a href="#">
                                                        <img src="assets/img/fresh/360intro.jpg" alt="360 Intro Header"/>
                                                    </a>

                                                    <section
                                                      id="fresh-section"
                                                      className="small-up-1 medium-up-2 large-up-3"
                                                    >
                                                        
                                                        <a-scene embedded crossOrigin="anonymous">
                                                        <a-assets>
                                                            <img id="asset-scene-url" src="assets/img/fresh/store1.jpg" alt="Grocery Store" />
                                                            {/* <a-animation end="click" attribute="rotation" fill="forwards" easing="linear" dur="350000" from="0 0 0" to="0 360 0"></a-animation> */}
                                                        </a-assets>
                                                        <a-sky 
                                                            id="fresh360VR" 
                                                            crossOrigin="anonymous" 
                                                            src="#asset-scene-url"
                                                            events={{
                                                                click: this.getPosition
                                                            }}
                                                        >
                                                        </a-sky>
                                                        
                                                        {/* <a-text
                                                                            font="kelsonsans"
                                                                            value={annotationtxt}
                                                                            width={width}
                                                                            position={txtPosition}
                                                                            rotation="0 15 0"
                                                                        /> */}


                                                        <Entity
                                                            primitive="a-camera"
                                                            look-controls="reverseMouseDrag: true"
                                                            mouse-cursor
                                                            wasd-controls="enabled: false"
                                                            id="camera"
                                                        >
                                                            <Entity primitive="a-cursor" id="cursor" color="white" />

                                                            {/* {this.props.inCreationMode && (
                                                                <Entity position={{ x: 0, y: 0, z: -5 }} >
                                                                    
                                                                    <Entity
                                                                        id="new-annotation"
                                                                        className="annotation-toggle box ray-intersect"
                                                                        geometry={{ 
                                                                            primitive: "box", 
                                                                            width: 0.24, 
                                                                            height: 0.24, 
                                                                            depth: 0.24
                                                                            }}
                                                                        scale={{ x:1 , y:1 , z:1 }}
                                                                        material={{ 
                                                                            color: "#f1c40f", 
                                                                            opacity: 0.8 
                                                                        }}
                                                                        animation__rotate={{ 
                                                                            property: "rotation", 
                                                                            dur: 4000, 
                                                                            loop: true, 
                                                                            to: "360 360 360" 
                                                                            }}
                                                                        events={{
                                                                            click: this.getPosition,
                                                                            mouseenter: this.getPosition,
                                                                        }}
                                                                    />
                                                                        
                                                                </Entity>

                                                                
                                                            )} */}
                                                            
                                                        </Entity>

                                                            {/* <Buttons stopRotate={this.stopRotate.bind(this)} /> */}
                                                        
                                                            <Entity>
                                                                <BuildAnnotations annotations={this.state.annotations} />
                                                            </Entity>   

                                                            {/* LIGHTS ==========================================*/}
                                                            <Entity
                                                                primitive="a-light"
                                                                type="ambient"
                                                                color="#eee"
                                                                intensity="1"
                                                                position={{ x: 0, y: 3, z: 0 }}
                                                            />
                                                            <Entity
                                                                primitive="a-light"
                                                                type="directional"
                                                                color="#fff"
                                                                intensity="1"
                                                                position={{ x: -0.5, y: 3, z: 1 }}
                                                            /> 
                                                            
                                                        </a-scene>
                                                        </section>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="acsUxWidget">
                                <div id="contentGrid_217291" className="acswidget acswidget-content-grid celwidget US bxw-content-grid  a-spacing-large  bxc-grid--light" cel_widget_id="acsux-widgets-content-grid" data-is-mobile="false">
                                    <div className="bxc-grid__container bxc-grid__container--width-1500">
                                        <div className='bxc-grid__row   bxc-grid__row--light '>
                                            <div className='bxc-grid__column  bxc-grid__column--12-of-12   bxc-grid__column--light'>
                                                <div className='bxc-grid__content   bxc-grid__content--light'>
                                                    <div className='bxc-grid__image   bxc-grid__image--light fresh360-header'>
                                                        <a href="#">
                <img src="assets/img/fresh/gum.jpg" alt="Chewing gum"/>
            </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="acsUxWidget">
                                <div id="contentGrid_106615" className="acswidget acswidget-content-grid celwidget US bxw-content-grid  a-spacing-large  bxc-grid--light" cel_widget_id="acsux-widgets-content-grid" data-is-mobile="false">
                                    <div className="bxc-grid__container bxc-grid__container--width-1500">
                                        <div className='bxc-grid__row   bxc-grid__row--light '>
                                            <div className='bxc-grid__column  bxc-grid__column--2-of-12   bxc-grid__column--light'>
                                                <div className='bxc-grid__content   bxc-grid__content--light'>
                                                    <div id="bxc-grid__button bxc-grid__button--r-c1">
                                                        <span className="a-button a-button-span12 bxc-button  bxc-grid__button--light">
                <span className="a-button-inner bxc-button-inner">
                    <a className="a-button-text bxc-button-text " href="#" title="Dairy" role="button">
                        Dairy
                    </a>
                </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bxc-grid__column  bxc-grid__column--2-of-12   bxc-grid__column--light'>
                                                <div className='bxc-grid__content   bxc-grid__content--light'>
                                                    <div id="bxc-grid__button bxc-grid__button--r-c2">
                                                        <span className="a-button a-button-span12 bxc-button  bxc-grid__button--light">
                <span className="a-button-inner bxc-button-inner">
                    <a className="a-button-text bxc-button-text " href="#" title="Deli" role="button">
                        Deli
                    </a>
                </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bxc-grid__column  bxc-grid__column--2-of-12   bxc-grid__column--light'>
                                                <div className='bxc-grid__content   bxc-grid__content--light'>
                                                    <div id="bxc-grid__button bxc-grid__button--r-c3">
                                                        <span className="a-button a-button-span12 bxc-button  bxc-grid__button--light">
                <span className="a-button-inner bxc-button-inner">
                    <a className="a-button-text bxc-button-text " href="#" title="Bakery" role="button">
                        Bakery
                    </a>
                </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bxc-grid__column  bxc-grid__column--2-of-12   bxc-grid__column--light'>
                                                <div className='bxc-grid__content   bxc-grid__content--light'>
                                                    <div id="bxc-grid__button bxc-grid__button--r-c4">
                                                        <span className="a-button a-button-span12 bxc-button  bxc-grid__button--light">
                <span className="a-button-inner bxc-button-inner">
                    <a className="a-button-text bxc-button-text " href="#" title="Fresh Fruit" role="button">
                        Fresh Fruit
                    </a>
                </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bxc-grid__column  bxc-grid__column--2-of-12   bxc-grid__column--light'>
                                                <div className='bxc-grid__content   bxc-grid__content--light'>
                                                    <div id="bxc-grid__button bxc-grid__button--r-c5">
                                                        <span className="a-button a-button-span12 bxc-button  bxc-grid__button--light">
                <span className="a-button-inner bxc-button-inner">
                    <a className="a-button-text bxc-button-text " href="#" title="Meal Kits" role="button">
                        Meal Kits
                    </a>
                </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bxc-grid__column  bxc-grid__column--2-of-12   bxc-grid__column--light'>
                                                <div className='bxc-grid__content   bxc-grid__content--light'>
                                                    <div id="bxc-grid__button bxc-grid__button--r-c6">
                                                        <span className="a-button a-button-span12 bxc-button  bxc-grid__button--light">
                <span className="a-button-inner bxc-button-inner">
                    <a className="a-button-text bxc-button-text " href="#" title="Beverages" role="button">
                        Beverages
                    </a>
                </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                           
                            <div className="acsUxWidget">
                                <div id="contentGrid_260443" className="acswidget acswidget-content-grid celwidget US bxw-content-grid  a-spacing-large  bxc-grid--light" cel_widget_id="acsux-widgets-content-grid" data-is-mobile="false">
                                    <div className="bxc-grid__container bxc-grid__container--width-1500">
                                        <div className='bxc-grid__row   bxc-grid__row--light '>
                                            <div className='bxc-grid__column  bxc-grid__column--4-of-12   bxc-grid__column--light'>
                                                <div className='bxc-grid__content   bxc-grid__content--light'>
                                                    <div className='bxc-grid__image   bxc-grid__image--light'>
                                                        <a href="#">
                <img src="assets/img/fresh/taylor.jpg" alt="Taylor Farms"/>
            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bxc-grid__column  bxc-grid__column--4-of-12   bxc-grid__column--light'>
                                                <div className='bxc-grid__content   bxc-grid__content--light'>
                                                    <div className='bxc-grid__image   bxc-grid__image--light'>
                                                        <a href="#">
                <img src="assets/img/fresh/singlecowburger.jpg" alt="Single Cow Burger"/>
            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bxc-grid__column  bxc-grid__column--4-of-12   bxc-grid__column--light'>
                                                <div className='bxc-grid__content   bxc-grid__content--light'>
                                                    <div className='bxc-grid__image   bxc-grid__image--light'>
                                                        <a href="#">
                <img src="assets/img/fresh/housebread.jpg" alt="House Bread"/>
            </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>            
        </div>
      </div>


        {/* End of fresh-storefront-container Left    */}

        


        
        <section className="benefits-header cta-module">
          <div className="row expanded">
            <div className="small-12 medium-12 columns cta-content">
              <h3>Want to find out more?</h3>
              <a className="button" href="/contact" id="marketing-contact">
                Get in Touch!
              </a>
            </div>
          </div>
        </section>
      </div>



      
    );
  }
}

class Buttons extends React.Component {
	render(){
	  return(
		<div>
		  <button id='stopButton' onClick={this.props.stopRotate}>Stop</button>
		</div>
	  );
	}
  }

export default AFDemoContent;
