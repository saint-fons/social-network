import React from 'react'
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.items}>
                <Dialog name="Alexandra" id="1" />
                <Dialog name="Drimitri" id="2" />
                <Dialog name="Masha" id="3" />
            </div>
            <div className="messages">
                <Message message="my" />
                <Message message="1" />
                <Message message="message" />
            </div>
        </div>
    )
};



export default Dialogs;