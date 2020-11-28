import React from 'react'
import {NavLink} from "react-router-dom";


const Message = (props) => {
    return (
        <div>
            <div>
                <div>{props.message}</div>
                <div>{props.number}</div>
            </div>
        </div>
    )
};


export default Message;