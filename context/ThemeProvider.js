import { View, Text } from 'react-native'
import React from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = React.useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(prevDarkMode => !prevDarkMode)
    }

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        {/* Since children property was used,
ThemeProvider will now wrap other components and also state variable isDarkMode and
function toggleDarkMode are accessible for all components it the app. */}
        {children}
    </ThemeContext.Provider>
  )
}