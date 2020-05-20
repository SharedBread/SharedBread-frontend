import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar.js";
import AuthProvider from "./components/Auth";

import RouteContainer from "./components/RouteContainer";

// AuthProvider wraps around all routes to provide
// user authentication and user info at each route
// passing the data down with react context.
// see components/Auth for implementation.
function App() {
  return (
    <div style={{ marginBottom: 86 }}>
      <Router>
        <AuthProvider>
          <Container>
            <RouteContainer />
          </Container>
        </AuthProvider>
        <NavBar />
      </Router>
      <div className="col">
        {" "}
        <hr />
        Data provided by&nbsp;
        <a target="rel=noopener" href="https://www.givefood.org.uk/">
          <strong>Give Food</strong>
        </a>
      </div>
 
    </div>
  );
}

export default App;
