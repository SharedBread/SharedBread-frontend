import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { useAuthContext } from "../components/Auth";

// Pages
import Home from "../pages/Home"
import Map from "../pages/map"

// PrivateROute function created to wrap router-router (Route) with
// conditions to check if 'user' is available or not.
// If no user object is available, (user not signed in), the route 
// goes to an authorisation page.
const PrivateRoute = ({ component, ...options }) => {
  const { user } = useAuthContext();
  const redirectToComponent = user ? component : "required";

  return <Route {...options} component={redirectToComponent} />;
};

function RouteContainer({ location }) {
  return (

    <Switch location={location}>
        <Route exact path="/" component={Home}/>
        <Route path="/Map" component={Map}/>
    </Switch>
    
  );
}

export default withRouter(RouteContainer);   
