import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
import Showcase from "../components/Showcase";
import About from "../components/About";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="favorites" component={Favorites} />
      <IndexRoute component={Home} />
    </Route>
    <Route path="/showcase" component={Showcase}>
    </Route>
    <Route path="/about" component={About}>
    </Route>
    
  </Router>
);

export default routes;
