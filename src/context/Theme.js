import { createContext, useState, useEffect } from "react";

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

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () => {
        localStorage.setItem("isDark", JSON.stringify(!isDark))
        setIsDark(!isDark)
    }
    useEffect(() => {
        const isDark = localStorage.getItem("isDark") === "true"
        setIsDark(isDark)
    }, [])

    return (
        <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}
