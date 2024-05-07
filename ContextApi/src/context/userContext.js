
// Step 1

// Very easy to understand if you will try to relate it with context of real life ..

import React from "react";

const UserContext=React.createContext();

export default UserContext;  // UserCOntext is providing Context about User


// now UserContext Provide a very major thing that is UserCOntext Provider ... it basically provides the context of User to others


// Now every COmponent to which we wants to provide Context we need to wrap it inside the Provider
