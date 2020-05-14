import React, { createContext, useState, useEffect } from "react";

// create initial context to hold the value that gets passed into components
export const UserContext = createContext(null)

// this function is the controller for authorising users and passing
// the data into the UserContext.
function AuthProvider() {
    
    const [authData, setAuthData] = useState(null)
    

    return (
        <></>
    )

}

export default AuthProvider;