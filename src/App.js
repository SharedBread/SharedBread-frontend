import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

import RouteContainer from "./components/RouteContainer"

function App() {
  return (
    <Router>
      <Container>
        <RouteContainer /> 
      </Container>
    </Router>
    
    
  );
}

export default App;
