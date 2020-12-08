import React from 'react';
import {addSettingActionCreator, updateSettingActionCreator} from "../../Redux/settings-reducer";
import Settings from "./Settings";


const SettingsContainer = (props) => {
    let state = props.store.getState().SettingsPage
    let addSetting = () => {
        //props.addSetting()
        props.store.dispatch( addSettingActionCreator() )
    }

    let onSettingChange = (text) => {
        let action = updateSettingActionCreator(text)
        props.store.dispatch(action)
    }

    return ( <Settings onSettingChange={onSettingChange}
                       addSetting={addSetting}
                       SettingsPage={state}
                       addNewSetting={state.addNewSetting}
    />)

}


export default SettingsContainer;