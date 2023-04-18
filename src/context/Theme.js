import { createContext, useState } from 'react'



export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const themes = {
        backgroundColor: isDarkMode ? '#171823' : '#FAFAFA',
        inputTextColor: isDarkMode ? '#9495A5' : '#767992',
        inputListBgColor: isDarkMode ? '#25273D' : '#FFFFFF',
        todoRadioBorder: isDarkMode ? '1px solid #393A4B' : '1px solid #E3E4F1',
        todoTextColor: isDarkMode ? '#C8CBE7' : '#494C6B',
        footerColor: isDarkMode ? '#5B5E7E' : '#9495A5'
    }

    return (
        <ThemeContext.Provider value={{ themes, isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}   