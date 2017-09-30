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

// import createHistory from 'history/createBrowserHistory';
// const history = createHistory();


const routes = (
		<BrowserRouter forceRefresh={true}>
			{/* <Router history={history}> */}
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

            {/* <Route exact path="/annotate" component={AnnotationPage} /> */}
            <Route path="/annotate/:roomID" component={AnnotationPage} />
            <Route path="/annotate_:roomID" component={AnnotationPage} />
						
            <Route path="/show/:roomID" component={ShowroomMain} />
            <Route path="/show_:roomID" component={ShowroomMain} />

						<Redirect from="/portal-demo" to="/show/59c8544560f9e6001233404c"/>

        </Switch>
		{/* </Router> */}
    </BrowserRouter>
);

export default routes;
