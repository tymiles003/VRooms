import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
import Showcase from "../components/Showcase";
import About from "../components/About";
import Login from "../components/authentication/login";
import Signup from "../components/authentication/Signup";
import NewVRoom from "../components/NewVRoom";


const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/showcase" component={Showcase} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/new-vroom" component={NewVRoom} />
        </Switch>
    </BrowserRouter>
);

export default routes;
