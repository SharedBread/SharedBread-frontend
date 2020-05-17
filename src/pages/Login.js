import React, { useState } from "react";
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp, AmplifyConfirmSignIn } from "@aws-amplify/ui-react";
import { Hub } from "aws-amplify"
import { Redirect } from "react-router-dom"




function Login() {

  const [ redirect, setRedirect ] = useState(false)

  Hub.listen('auth', (data) => {
    const { payload } = data
    if (payload.event === 'signIn') {
      setRedirect(true)
      window.location.reload(true);
    }
  })
  
  return (
    <>
    {redirect ? <Redirect  push to="/" /> : null}
      <h1>
        We will create a UK without the need for food banks
        <span style={{ fontSize: "12px" }}> - The Trussel Trust</span>
      </h1>
      <p style={{ marginTop: 30 }}>
        Thank you for visiting the SharedBread app. To help your local food
        banks, please sign in or create an account to get started.
      </p>
      <AmplifyAuthenticator>
      <AmplifySignIn />
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
      </AmplifyAuthenticator>
    </>
  );
}

export default Login;
