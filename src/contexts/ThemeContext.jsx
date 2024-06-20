/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

const Themes = createContext()

export const ThemeContext = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    const myThemes = {
        color : darkMode ? 'dark' : 'light' ,
        background : darkMode ? 'white' : 'dark'
    }

    return (
        <Themes.Provider value={{myThemes, setDarkMode}}>
            {children}
        </Themes.Provider>
    )
}
