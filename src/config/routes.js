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

import Noviaroom from "../components/Noviaroom";

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

            <Route path="/noviaroom" component={Noviaroom} />            
        </Switch>
    </BrowserRouter>
);

export default routes;
