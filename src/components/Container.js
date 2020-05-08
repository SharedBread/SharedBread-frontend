import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

// Pages
import Home from "./Pages/Home";

function Container({ location }) {
  return (

    <Switch location={location}>
        <Route exact path="/" component={Home} />
    </Switch>
    
  );
}

export default withRouter(Container);
