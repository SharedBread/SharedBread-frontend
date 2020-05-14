import React, { createContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";

// create initial context to hold the value that gets passed into components
export const UserContext = createContext(null)

// this function is the controller for authorising users and passing
// the data into the UserContext.
function AuthProvider() {
    
    const [authData, setAuthData] = useState(null)

    // run once to get the current user from Amplify
    useEffect(() => {

        Auth.currentUserInfo()
            .then((user) => setAuthData(user))
            .catch((err) => setAuthData(null))
        
    }, []);
    

    return (
        <></>
    )

}

export default AuthProvider;