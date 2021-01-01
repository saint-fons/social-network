import React from 'react';
import {addSettingActionCreator, updateSettingActionCreator} from "../../Redux/settings-reducer";
import Settings from "./Settings";
import {connect} from "react-redux";


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