import React from 'react';
import ReactDOM from 'react-dom';
// import 'aframe';
// import 'aframe-animation-component';
// import 'aframe-particle-system-component';
// import 'babel-polyfill';
// import {Entity, Scene} from 'aframe-react';
import {Helmet} from "react-helmet";

// Showcasing gallery list of real estate
class Showroom extends React.Component {
  constructor(props) {
    super(props);
  //   this.state = {
  //     quotes: []
  //   };
  //   // Binding getQuotes to this component since we'll be passing this method to 
  //   // other components to use
  //   this.getQuotes = this.getQuotes.bind(this);
  // }
  // // Getting all quotes once the component has mounted
 
    this.removejscssfile = this.removejscssfile.bind(this);
	
  }

  removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"; //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"; //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement);

    for (var i=allsuspects.length; i>=0; i--)
    { //search backwards within nodelist for matching elements to remove
      if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]); //remove element by calling parentNode.removeChild()
    }
  }

  componentDidMount = () => {
    this.removejscssfile("drift.js", "js"); //remove all occurences of "drift.js" on VR page
    this.removejscssfile("https://js.driftt.com/include/1505206200000/9ubdvirh8v4g.js", "js");
    
  }

  render() {
    return (
      <a-scene>
        <Entity primitive='a-sky' src="assets/img/gallery/test-world3.jpg"/>
        <a-text font="kelsonsans" value="321 Ocean Dr, Miami Beach, Florida" width="6" position="-2 4.3 -3.5"
              rotation="0 15 0"></a-text>       
      </a-scene>
    );
  }
}

export default Showroom;




// <a-scene>

//         <a-sky src="assets/img/gallery/test-world3.jpg" rotation="0 -130 0"></a-sky>
//         <a-text font="kelsonsans" value="Wayne's Home in Miami" width="6" position="-2.5 0.25 -1.5"
//               rotation="0 15 0"></a-text>       
//       </a-scene>