import React from 'react';
import s from "./Settings.module.css";
import Setting from "./Settings/Setting"
import {addSettingActionCreator, updateSettingActionCreator} from "../../Redux/State";


const Songs = (props) => {



    let SettingData = props.state.SettingsElement.map ( s =>
        <Setting message={s.message} /> )

    let newSettingElement = React.createRef();

    let addSetting = () => {
        props.dispatch( addSettingActionCreator() )
    }

    let onSettingChange = () => {
        let text = newSettingElement.current.value
        //props.dispatch( { type: 'UPDATE-NEW-SETTING', newSetting: text })
        let action = updateSettingActionCreator(text)
        props.dispatch(action)
    }

    return <div className={s.settings}>
        <div>
            <textarea onChange={ onSettingChange }
                      ref={ newSettingElement }
                      value={ props.addNewSetting }
            />
        </div>
        <div>
            <button onClick={ addSetting }> Add setting </button>
        </div>

        { SettingData }

    </div>
}


export default Songs;