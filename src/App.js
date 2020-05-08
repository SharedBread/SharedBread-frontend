import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import RouteContainer from "./components/RouteContainer"

function App() {
  return (
    <Router>

      <RouteContainer /> 

    </Router>
    
    
  );
}

export default App;
