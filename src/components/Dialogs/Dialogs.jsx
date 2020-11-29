import React from 'react'
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import Settings from "../Settings/Settings";


const Dialogs = (props) => {

    let DialogData = props.state.DialogElement.map( d  => <Dialog name={d.name} id={d.id} age={d.age} />)
    let MessageData = props.state.MessageElement.map( m => <Message message={m.message} number={m.number}   />)


    return (
        <div className={style.dialogs}>
            <div className={style.items}>
                { DialogData }
            </div>
            <div className="messages">
                { MessageData }
            </div>
        </div>
    )
};



export default Dialogs;