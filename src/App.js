import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar.js";

import RouteContainer from "./components/RouteContainer"

function App() {
  return (
    <div style={{marginBottom: 86}}>
      <Router>
        <Container>
          <RouteContainer />
        </Container>
      </Router>
      <div className="col"> <hr />
            Data provided by  
            <a target="rel=noopener" href="https://www.givefood.org.uk/"><strong>Give Food</strong></a>
      </div> 
      <NavBar />
    </div>


  );
}

export default App;
