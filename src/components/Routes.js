import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { useAuthContext } from "./Auth";

// Pages
import Home from "../pages/Home"
import Map from "../pages/map"
import Login from "../pages/Login"
import ItemtoDonate from '../pages/ItemtoDonate';
import NeededItems from '../pages/NeededItems';
import Profile from "../pages/Profile";

// PrivateROute function created to wrap router-router (Route) with
// conditions to check if 'user' is available or not.
// If no user object is available, (user not signed in), the route 
// goes to an authorisation page.
const PrivateRoute = ({ component, ...options }) => {
  const { authData } = useAuthContext();
  const redirectToComponent = authData ? component : Login;

  return <Route {...options} component={redirectToComponent} />;
};

function Routes({ location }) {
  return (

    <Switch location={location}>
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute path="/Map" component={Map}/>
        <PrivateRoute path="/NeededItems" component={NeededItems}/>
        <PrivateRoute path="/ItemtoDonate" component={ItemtoDonate}/>
        <PrivateRoute path="/Profile" component={Profile}/>
    </Switch>
    
  );
}

export default withRouter(Routes);   