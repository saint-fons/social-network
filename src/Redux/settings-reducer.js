const ADD_SETTING = 'ADD-SETTING';
const UPDATE_NEW_SETTING = 'UPDATE-NEW-SETTING';

let initialState = {
    SettingsElement: [
        {message: "1111111"},
        {message: "hello there"}
    ],
    addNewSetting: "Vyzyvai Natashu111133"
}

const settingsReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case ADD_SETTING:
            let newSetting = {
                message: state.addNewSetting
            }
            stateCopy = {...state}
            stateCopy.SettingsElement = [...state.SettingsElement]
            stateCopy.SettingsElement.push(newSetting)
            stateCopy.addNewSetting = ''
            return stateCopy
        case UPDATE_NEW_SETTING: {
            stateCopy = {...state}
            stateCopy.addNewSetting = action.newSetting
            return stateCopy
        }
        default : return state
    }
}

export const addSettingActionCreator = () => ({type: ADD_SETTING})
export const updateSettingActionCreator = (text) =>
    ({ type: UPDATE_NEW_SETTING, newSetting: text})

export default settingsReducer