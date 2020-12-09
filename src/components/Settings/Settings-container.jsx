import React from 'react';
import {addSettingActionCreator, updateSettingActionCreator} from "../../Redux/settings-reducer";
import Settings from "./Settings";
import connect from "react-redux/lib/connect/connect";

/*const SettingsContainer = (props) => {

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
}*/

let mapStateToProps = (state) => {
    return{
        addNewSetting: state.SettingsPage.addNewSetting,
        SettingsPage: state.SettingsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onSettingChange: (text) => {dispatch(updateSettingActionCreator(text))},
        addSetting: () => {dispatch(addSettingActionCreator())}
    }
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)


export default SettingsContainer;