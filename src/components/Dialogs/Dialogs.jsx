import React from 'react'
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.items}>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1">Alexandra</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Drmitri</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">Svetlana</NavLink>
                </div>
            </div>
            <div className="messages">
                <div className="message">hello</div>
                <div className="message">how a u</div>
                <div className="message">yoy</div>
            </div>
        </div>
    )
};



export default Dialogs;