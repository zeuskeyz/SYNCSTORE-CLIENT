/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import Axios from 'axios'

export const OpenTasksContext = createContext()

export const OpenTasksContextProvider = ({ children }) => {
    const [openTasks, setOpenTasks] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    useEffect(() => {
        Axios.get(`${URL}/tasks-open`).then(({data}) => setOpenTasks(data)).then(setIsLoading(true))
    }, [openTasks, isLoading])

    return (

        <>
            <OpenTasksContext.Provider value = {{isLoading, openTasks}}>
                {children}
            </OpenTasksContext.Provider>

        </>
    )
}
