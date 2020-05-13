import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

// Pages
import Home from "../pages/Home"
import Map from "../pages/map"
import ItemtoDonate from '../pages/ItemtoDonate';
import NeededList from '../pages/NeededList';

function RouteContainer({ location }) {
  return (

    <Switch location={location}>
        <Route exact path="/" component={Home}/>
        <Route path="/Map" component={Map}/>
        <Route path="/ItemtoDonate" component={ItemtoDonate}/>
        <Route path="/NeededList" component={NeededList}/>
    </Switch>
    
  );
}

export default withRouter(RouteContainer);   
