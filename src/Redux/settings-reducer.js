const ADD_SETTING = 'ADD-SETTING';
const UPDATE_NEW_SETTING = 'UPDATE-NEW-SETTING';

let initialState = {
    SettingsElement: [
        {message: "1111111"},
        {message: "hello there"}
    ],
    addNewSetting: "Vyzyvai Natashu1111"
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SETTING:
            let newSetting = {
                message: state.addNewSetting
            }
            state.SettingsElement.push(newSetting)
            state.addNewSetting = ''
            break;
        case UPDATE_NEW_SETTING:
            state.addNewSetting = action.newSetting
            break;
        default : return state
    }

    return state
}

export const addSettingActionCreator = () => ({type: ADD_SETTING})
export const updateSettingActionCreator = (text) =>
    ({ type: UPDATE_NEW_SETTING, newSetting: text})

export default settingsReducer