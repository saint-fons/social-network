import React from 'react'
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElement = [
        { name: "Alexandra", id: 1, age: 18},
        { name: "Dmitri", id: 2, age: 25},
        { name: "Masha", id: 3, age: 17},
    ]


    return (
        <div className={style.dialogs}>
            <div className={style.items}>
                <Dialog name={ dialogElement[0].name} id={ dialogElement[0].id } age={dialogElement[0].age } />
                <Dialog name={ dialogElement[1].name} id={ dialogElement[1].id } age={dialogElement[1].age } />
                <Dialog name={ dialogElement[2].name} id={ dialogElement[2].id } age={dialogElement[2].age } />
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