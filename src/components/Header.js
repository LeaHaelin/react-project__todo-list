import React from 'react';
import logo from "../images/logo-todo.svg";
import iconMoon from "../images/icon-moon.svg";
import iconSun from "../images/icon-sun.svg";

export const Header = (isLight) => {

    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <img className='mode' src={iconMoon} alt="" />
        </div>
    )
}
