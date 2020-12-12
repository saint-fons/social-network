import React from 'react';
import nav from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={nav.nav}>
        <div className={nav.item}>
            <NavLink to='/profile' activeClassName={nav.activeLink}>Profile</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink to='dialogs' activeClassName={nav.activeLink}>Messages</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink to='music' activeClassName={nav.activeLink}>Music</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink to='settings' activeClassName={nav.activeLink}>Settings</NavLink>
        </div><div className={nav.item}>
            <NavLink to='users' activeClassName={nav.activeLink}>Users</NavLink>
        </div>
    </nav>
}


export default Navbar;