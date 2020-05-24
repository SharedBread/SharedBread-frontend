import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar.js";

import Routes from "./components/Routes"

function App() {
  return (
    <div style={{ marginBottom: 86 }}>
      <Router>
          <Container>
            <Routes />
          </Container>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
