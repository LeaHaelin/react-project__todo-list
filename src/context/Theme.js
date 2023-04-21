import { createContext, useState } from 'react'



export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const themes = {
        backgroundColor: isDarkMode ? '#171823' : '#FAFAFA',
        inputTextColor: isDarkMode ? '#9495A5' : '#767992',
        contentBgColor: isDarkMode ? '#25273D' : '#FFFFFF',
        todoRadioBorder: isDarkMode ? '1px solid #393A4B' : '1px solid #E3E4F1',
        todoTextColor: isDarkMode ? '#C8CBE7' : '#494C6B',
        todoCompletedColor: isDarkMode ? '#4D5067' : '#D1D2DA',
        listTextColor: isDarkMode ? '#5B5E7E' : '#9495A5',
        listShadow: isDarkMode ? 'none' : '0px 35px 50px -15px rgba(194, 195, 214, 0.5)',
        footerColor: isDarkMode ? '#5B5E7E' : '#9495A5'
    }

    return (
        <ThemeContext.Provider value={{ themes, isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}   