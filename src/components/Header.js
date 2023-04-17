import React from 'react';
import logo from "../images/logo-todo.svg";
import iconMoon from "../images/icon-moon.svg";
import iconSun from "../images/icon-sun.svg";

export const Header = ({ isDark }) => {

    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <img className='mode' src={isDark ? iconMoon : iconSun} alt="screen theme switch" />
        </div>
    )
}
