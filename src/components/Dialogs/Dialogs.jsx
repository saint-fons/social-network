import React from 'react'
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Alexandra"},
        { id: 2, name: "Dmitri"},
        { id: 3, name: "Masha"},
        { id: 4, name: "Michael"},
        { id: 5, name: "Alexei"}
    ]


    let dialogElement = dialogsData.map( d => <Dialog name={ d.name } id={ d.id } /> );

    let messageData = [
        { id: 1, message: "hello"},
        { id: 2, message: "we"},
        { id: 3, message: "can"},
        { id: 4, message: "try"},
        { id: 5, message: "again"}
    ]

    let messageElement = messageData.map( m => <Message message={ m.message} />)


    return (
        <div className={style.dialogs}>
            <div className={style.items}>
                { dialogElement }
            </div>
            <div className="messages">
                { messageElement }
            </div>
        </div>
    )
};



export default Dialogs;