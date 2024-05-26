/* eslint-disable react/prop-types */
import { createContext } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    return (
        <UserContext.Provider value = {"Context works"}>
            {children}
        </UserContext.Provider>
    )
}


