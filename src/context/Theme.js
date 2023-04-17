import { createContext } from 'react'

const themes = {
    dark: {
        backgroundColor: '#171823',
        cardBgColor: '#25273D',
        cardBorder: '1px solid #393A4B',
        todosColor: '#C8CBE7',
        footerColor: '#5B5E7E'
    },
    light: {
        backgroundColor: '#FAFAFA',
        cardBgColor: '#FFFFFF',
        cardBorder: '1px solid #E3E4F1',
        todosColor: '#494C6B',
        footerColor: '#9495A5'
    }
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={themes}>
            {children}
        </ThemeContext.Provider>
    )
}   