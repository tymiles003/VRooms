import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from './common/Navbar';
import Loader from "./common/Loader";
import Footer from "./common/Footer";
import EditShowcaseContent from "./content/EditShowcaseContent";


const Showcase = (props) => {
	return (
      <div className="application">
        {/* Helmet =========================================================*/}
          <Helmet>
            <title>Edit VRooms</title>
			
          </Helmet>

              <div className="pageWrapper">  

                <Navbar logo_filename="vrooms-logo-gray" theme="opaque-white-bg" />
                <Loader />

			          <EditShowcaseContent />
                <Footer />

              </div>  
      </div>

	)
}

export default Showcase;


