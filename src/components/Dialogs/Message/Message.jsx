import React from 'react'
import {NavLink} from "react-router-dom";
import AddMessage from "./AddMessage/AddMessage";
import Settings from "../../Settings/Settings";


const Message = (props) => {
    return (
        <div>
            <div>
                <div>{props.message}</div>
                <div>{props.number}</div>
                <AddMessage post={ "message" } addPost={props.addPost}  />
            </div>
        </div>
    )
};


export default Message;