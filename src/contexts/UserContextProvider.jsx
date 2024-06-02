/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import Axios from 'axios'
import { URL } from "../App";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        Axios.get(`${URL}/homepage`).then(({data}) => setUser(prev=> {return {...prev, ...data}}) )
    }, [user])


    return (
        <UserContext.Provider value= {user}>
            {children}
        </UserContext.Provider>
    )
}


