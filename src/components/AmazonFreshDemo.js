import React from 'react';
import {Helmet} from "react-helmet";

import AFDemoContent from "./content/AFDemoContent";
// import ShowcaseContent from "./content/ShowcaseContent";
// import AboutCSS from './styles/About.css';
// require('./styles/About.css');

// class About extends React.Component {
	// constructor(props) {
	//   super(props);
  
	//  }
	// render() {
	//   return (
const AmazonFreshDemo = (props) => {
	return (
      <div className="application">
        {/* Helmet =========================================================*/}
          <Helmet>
            <title>AmazonFresh Demo</title>
			
            {/* CSS links for this page */}
            <link rel="stylesheet" href="/css/pages/About.css"></link>
			
          </Helmet>

              <div className="pageWrapper">  

			          <AFDemoContent />

              </div>  
      </div>
    // );
//   }
	)
}

export default AmazonFreshDemo;


// <header className="header header--main js-header a-page" data-landing="yes" data-page="Home" data-page-name="Main">
//   <div className="description">
//     <h1 className="description__headline text--white emerge" data-duration="600" data-effect="slide" data-down="64px" data-hold="100">
//       Virtual Reality for Real Estate
//     </h1>
//     <span className="description__sub_headline text--white emerge" data-duration="600" data-effect="slide" data-down="64px" data-hold="100" data-continue="true">
//       Use VR to <strong>win</strong> more listings and <br />
//       <strong>stay ahead</strong> of your competition
//     </span>
      
//   </div>

// </header>



