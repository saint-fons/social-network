import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={style.header}>
        <NavLink to='/'><img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"/>
        </NavLink>

        <div className={style.loginBlock}>
            { props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}


export default Header;