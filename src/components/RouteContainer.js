import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { useAuthContext } from "../components/Auth";

// Pages
import Home from "../pages/Home"
import Map from "../pages/map"

function RouteContainer({ location }) {
  return (

    <Switch location={location}>
        <Route exact path="/" component={Home}/>
        <Route path="/Map" component={Map}/>
    </Switch>
    
  );
}

export default withRouter(RouteContainer);   
