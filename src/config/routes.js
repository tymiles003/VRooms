import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import Main from "../components/Main";
import Showcase from "../components/Showcase";
import ShowroomMain from "../components/ShowroomMain";
import About from "../components/About";
import How from "../components/How";
import Agents from "../components/Agents";
import LoginForm from "../components/authentication/LoginForm";
import Signup from "../components/authentication/Signup";
import NewVRoom from "../components/NewVRoom";
import WaynestrapSandbox from "../components/WaynestrapSandbox";
import EmbeddedAframe from "../components/EmbeddedAframe";
import AnnotationPage from "../components/AnnotationPage";
// import ShowroomMain from "../components/ShowroomMain";
import UploadPage from "../components/UploadPage";
import Contact from "../components/contactUs/Content";

import Gallery from "../components/Gallery";
import Living1 from "../components/gallery/Living1";
import Living2 from "../components/gallery/Living2";
import Kitchen from "../components/gallery/Kitchen";
import Office from "../components/gallery/Office";
import Travel1 from "../components/gallery/Travel1";
import Travel2 from "../components/gallery/Travel2";
import Travel3 from "../components/gallery/Travel3";
import Subway from "../components/gallery/Subway";


import AmazonFreshDemo from "../components/AmazonFreshDemo";
import ShowroomVideoMain from "../components/ShowroomVideoMain";

import EditShowcase from "../components/EditShowcase";

import AframePresentation from "../components/AframePresentation";

import LatestRoom from '../utils/LatestRoom';
import GenerateIframe from '../components/GenerateIframe';

// import createHistory from 'history/createBrowserHistory';
// const history = createHistory();


const routes = (

	// forceRefresh is being used to travel to new page when portal is clicked.
	// - not ideal way to do this, but without forceRefresh, the url will
	//   change but won't go anywhere unless you select it and press enter.
		<BrowserRouter forceRefresh={true}>
		
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/showcase" component={Showcase} />
            <Route path="/showroom" component={ShowroomMain} />
            <Route exact path="/about" component={About} />
            <Route exact path="/how" component={How} />
            <Route exact path="/agents" component={Agents} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/new-vroom" component={NewVRoom} />
            <Route exact path="/embed" component={EmbeddedAframe} />
            <Route path="/contact" component={Contact} />
            <Route path="/upload" component={UploadPage} />

            <Route path="/gallery" component={Gallery} />
            <Route path="/living1" component={Living1} />
            <Route path="/living2" component={Living2} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/office" component={Office} />
            <Route path="/travel1" component={Travel1} />
            <Route path="/travel2" component={Travel2} />
            <Route path="/flowerdome" component={Travel3} />
            <Route path="/subway" component={Subway} />

            <Route path="/fresh" component={AmazonFreshDemo} />
            <Route path="/show/fresh" component={AmazonFreshDemo} />
            <Route path="/showvideo" component={ShowroomVideoMain} />

            <Route path="/editshowcase" component={EditShowcase} />
            
						<Route path="/presentation" component={AframePresentation}/>


						{/* Room Routes */}
            <Route path="/annotate/:roomID" component={AnnotationPage} />
            <Route path="/annotate_:roomID" component={AnnotationPage} />
            <Route path="/edit/:roomID" component={AnnotationPage} />
            <Route path="/edit_:roomID" component={AnnotationPage} />
            <Route path="/show/:roomID" component={ShowroomMain} />
            <Route path="/show_:roomID" component={ShowroomMain} />

						<Redirect from="/portal-demo" to="/show/59e1b4ce41f8990012a65cba"/>
						<Redirect from="/demo" to="/show/59e1b4ce41f8990012a65cba"/>

						<Route path="/latest" component={LatestRoom} />
						<Route path="/iframe" component={GenerateIframe} />
						

        </Switch>
    </BrowserRouter>
);

export default routes;
