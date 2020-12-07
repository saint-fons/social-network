import settingsReducer from "./settings-reducer";
import profileReducer from "./profile-reducer";

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

        this._state.SettingsPage = settingsReducer(this._state.SettingsPage, action)
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._callSubscriber(this._state)

    }

}





window.store = store

export default store