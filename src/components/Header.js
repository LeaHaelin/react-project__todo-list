import React from 'react';
import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";

export const Header = ({ isDarkMode, setIsDarkMode }) => {
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className='header'>
            <h1 className="logo">todo</h1>
            <img className='mode' src={isDarkMode ? iconSun : iconMoon} alt="screen theme switch" onClick={toggleTheme} />
        </div>
    )
}
