import React from 'react'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <div>
            <div>
                <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
};


export default Dialog;