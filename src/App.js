import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar.js";

import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifyConfirmSignIn,
  AmplifySignOut,
} from "@aws-amplify/ui-react";

import RouteContainer from "./components/RouteContainer";

function App() {
  return (
    <div>
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: "email",
              label: "Enter your email",
              placeholder: "Enter your email",
              required: true,
            },
            {
              type: "name",
              label: "Enter your name",
              placeholder: "First or full name",
              required: true,
            },
            {
              type: "password",
              label: "Enter your password",
              placeholder: "Password should be at least 6 characters",
              required: true,
            },
            {
              type: "custom:postcode",
              label: "Enter your postcode",
              placeholder: "Used for providing local information",
              required: true,
            },
          ]}
        >
          <AmplifyConfirmSignIn
            headerText="Please verify the code sent to your email"
            slot="confirm-sign-up"
          />
        </AmplifySignUp>
        <AmplifySignOut />
        <Router>
          <Container>
            <RouteContainer />
          </Container>
        </Router>
        <NavBar />
      </AmplifyAuthenticator>
    </div>
  );
}

export default App;
