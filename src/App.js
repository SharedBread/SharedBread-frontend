import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar.js";
import AuthProvider from "./components/Auth";


import RouteContainer from "./components/RouteContainer";

function App() {
  return (
    <div>
        <Router>
          <AuthProvider>
          <Container>
            <RouteContainer />
          </Container>
          </AuthProvider>
        </Router>
        <NavBar />
    </div>
  );
}

export default App;
