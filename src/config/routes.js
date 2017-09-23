import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Main from "../components/Main";
import Showcase from "../components/Showcase";
import ShowroomMain from "../components/ShowroomMain";
import About from "../components/About";
import Agents from "../components/Agents";
import LoginForm from "../components/authentication/LoginForm";
import Signup from "../components/authentication/Signup";
import NewVRoom from "../components/NewVRoom";
import WaynestrapSandbox from "../components/WaynestrapSandbox";
import EmbeddedAframe from "../components/EmbeddedAframe";
import AnnotationPage from "../components/AnnotationPage";
import Contact from "../components/contactUs/Content";

import Gallery from "../components/Gallery";
import Living1 from "../components/gallery/Living1";
import Living2 from "../components/gallery/Living2";
import Kitchen from "../components/gallery/Kitchen";
import Office from "../components/gallery/Office";
import Travel1 from "../components/gallery/Travel1";
import Travel2 from "../components/gallery/Travel2";
import Subway from "../components/gallery/Subway";

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/showcase" component={Showcase} />
            <Route path="/showroom" component={ShowroomMain} />
            <Route exact path="/about" component={About} />
            <Route exact path="/agents" component={Agents} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/new-vroom" component={NewVRoom} />
            <Route exact path="/embed" component={EmbeddedAframe} />
            <Route path="/contact" component={Contact} />
            <Route path="/annotate" component={AnnotationPage} />

            <Route path="/gallery" component={Gallery} />            
            <Route path="/living1" component={Living1} />            
            <Route path="/living2" component={Living2} />            
            <Route path="/kitchen" component={Kitchen} />            
            <Route path="/office" component={Office} />            
            <Route path="/travel1" component={Travel1} /> 
            <Route path="/travel2" component={Travel2} />            
            <Route path="/subway" component={Subway} /> 
            
        </Switch>
    </BrowserRouter>
);

export default routes;
