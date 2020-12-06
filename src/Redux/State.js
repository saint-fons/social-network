const ADD_SETTING = 'ADD-SETTING';
const UPDATE_NEW_SETTING = 'UPDATE-NEW-SETTING';
const ADD_PROFILE = 'ADD-PROFILE';
const UPDATE_NEW_PROFILE = 'UPDATE-NEW-PROFILE';

let store = {
    _state: {
        DialogPage: {
            DialogElement: [
                {name: "Alexandra", id: 1, age: 19},
                {name: "Dmitri", id: 2, age: 18},
                {name: "Masha", id: 3, age: 25},
                {name: "Vikaaaa", id: 4, age: 18}
            ],
            MessageElement: [
                {message: "message 1", number: "number"},
                {message: "message 2", number: "number"},
                {message: "message 3", number: "number"},
                {message: "message 7", number: "number"}
            ]
        },
        SettingsPage: {
            SettingsElement: [
                {message: "1111111"},
                {message: "hello there"}
            ],
            addNewSetting: "Vyzyvai Natashu1111"
        },
        ProfilePage: {
            ProfileElement: [
                {names: "Abdul"},
                {names: "Natasha"}
            ],
            AddNewProfile: "lyaaaaa1"
        }
    },
    _callSubscriber() {
        console.log("State was changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === "ADD-PROFILE") {
            let newProfile = {
                names: this._state.ProfilePage.AddNewProfile
            }
            this._state.ProfilePage.ProfileElement.push(newProfile)
            this._state.ProfilePage.AddNewProfile = ''
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-PROFILE") {
            this._state.ProfilePage.AddNewProfile = action.newProfile
            this._callSubscriber(this._state)
        } else if (action.type === "ADD-SETTING") {
            let newSetting = {
                message: this._state.SettingsPage.addNewSetting
            }
            this._state.SettingsPage.SettingsElement.push(newSetting)
            this._state.SettingsPage.addNewSetting = ''
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-SETTING") {
            this._state.SettingsPage.addNewSetting = action.newSetting
            this._callSubscriber(this._state)
        }
    }

}

export const addSettingActionCreator = () => ({type: ADD_SETTING})

export const updateSettingActionCreator = (text) =>
({ type: UPDATE_NEW_SETTING, newSetting: text})

export const addProfileActionCreator = () => ({type: ADD_PROFILE})

export const updateProfileActionCreator = (text) =>
({ type: UPDATE_NEW_PROFILE, newProfile: text })

window.store = store

export default store