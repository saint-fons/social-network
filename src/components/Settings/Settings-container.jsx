import React from 'react';
import {addSettingActionCreator, updateSettingActionCreator} from "../../Redux/settings-reducer";
import Settings from "./Settings";
import StoreContext from "../../StoreContext";

const SettingsContainer = (props) => {

    return (
         <StoreContext.Consumer>
             { (store) => {
                let state = store.getState().SettingsPage
                let addSetting = () => {
                    //props.addSetting()
                    store.dispatch(addSettingActionCreator())
                }
                let onSettingChange = (text) => {
                    let action = updateSettingActionCreator(text)
                    store.dispatch(action)
                }
                return <Settings
                onSettingChange={onSettingChange}
                addSetting={addSetting}
                SettingsPage={state}
                addNewSetting={state.addNewSetting}/>}
            }
        </StoreContext.Consumer>
    )
}


export default SettingsContainer;