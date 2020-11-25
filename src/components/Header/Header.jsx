import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return <header className={style.header}>
        <NavLink to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Go-home-2.svg"/></NavLink>
    </header>

}


export default Header;