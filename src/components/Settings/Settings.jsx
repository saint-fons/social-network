import React from 'react';
import s from "./Settings.module.css";
import Setting from "./Settings/Setting"
import {Field, Form, reduxForm} from "redux-form"
import {maxLengthCreator, required} from "../Utils/Validator/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const maxLength10 =  maxLengthCreator(10)

let AddNewSettingForm = (props) => {
return <Form onSubmit={props.handleSubmit}
             className={s.settings}>
    <div>
        <Field name="newSettingText"
               component={Textarea} placeholder={"Setting messsage"}
               validate={[required, maxLength10]}
        />
    </div>
    <div>
        <button> Add setting </button>
    </div>
</Form>
}

let AddNewSettingFormRedux = reduxForm({form: "SettingAddNewForm"})(AddNewSettingForm)

const Settings = (props) => {

    let SettingData = props.SettingsPage.SettingsElement.map ( s =>
        <Setting message={s.message} /> )

    let newSettingElement = React.createRef();

    let onAddSetting = (values) => {
        props.addSetting(values.newSettingText)
    }

    let onSettingChange = () => {
        let text = newSettingElement.current.value
        props.onSettingChange(text)
        //let action = updateSettingActionCreator(text)
        //props.dispatch(action)
    }

    return <div>
        <h3>My settings</h3>
        <AddNewSettingFormRedux onSubmit={onAddSetting} />
        <div>
            {SettingData}
        </div>
    </div>
}

export default Settings;