import React from 'react';
import s from "./Settings.module.css";
import Setting from "./Settings/Setting"




const Songs = (props) => {

    let MessageData = props.setting.SettingsElement.map( s  => <Setting message={s.message} />)

    return <div className={s.settings}>
        { MessageData }
    </div>
}


export default Songs;