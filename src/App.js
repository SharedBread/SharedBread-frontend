import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "./components/Container"

function App() {
  return (
    <Router>

      <Container /> 

    </Router>
    
    
  );
}

export default App;
