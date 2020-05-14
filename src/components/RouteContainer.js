import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

// Pages
import Home from "../pages/Home"
import Map from "../pages/map"
import ItemtoDonate from '../pages/ItemtoDonate';
import NeededItems from '../pages/NeededItems';

function RouteContainer({ location }) {
  return (

    <Switch location={location}>
        <Route exact path="/" component={Home}/>
        <Route path="/Map" component={Map}/>
        <Route path="/ItemtoDonate" component={ItemtoDonate}/>
        <Route path="/NeededItems" component={NeededItems}/>
    </Switch>
    
  );
}

export default withRouter(RouteContainer);   
