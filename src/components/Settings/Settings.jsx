import React from 'react';
import s from "./Settings.module.css";
import Setting from "./Settings/Setting"


const Settings = (props) => {
    let SettingData = props.SettingsPage.SettingsElement.map ( s =>
        <Setting message={s.message} /> )

    let newSettingElement = React.createRef();

    let addSetting = () => {
        props.addSetting()   //обращение через пропсы
        //props.dispatch( addSettingActionCreator() )
    }

    let onSettingChange = () => {
        let text = newSettingElement.current.value
        props.onSettingChange(text)
        //let action = updateSettingActionCreator(text)
        //props.dispatch(action)
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


export default Settings;