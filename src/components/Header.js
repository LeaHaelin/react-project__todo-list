import React from 'react';
import logo from "../images/logo-todo.svg";
import iconMoon from "../images/icon-moon.svg";
import iconSun from "../images/icon-sun.svg";

export const Header = ({ isDarkMode, setIsDarkMode }) => {
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="Todo logo" />
            <img className='mode' src={isDarkMode ? iconSun : iconMoon} alt="screen theme switch" onClick={toggleTheme} />
        </div>
    )
}
