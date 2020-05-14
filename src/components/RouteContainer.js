import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Map from "../pages/map";
import Profile from "../pages/Profile";

function RouteContainer({ location }) {
  return (

    <Switch location={location}>
        <Route exact path="/" component={Home}/>
        <Route path="/Map" component={Map}/>
        <Route path="/Profile" component={Profile}/>
    </Switch>
    
  );
}

export default withRouter(RouteContainer);   
